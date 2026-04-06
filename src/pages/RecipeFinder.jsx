import { useEffect, useState } from 'react'
import IngredientInput from '../components/IngredientInput.jsx'
import RecipeList from '../components/RecipeList.jsx'
import FilterPanel from '../components/FilterPanel.jsx'
import recipes from '../data/recipes.js'

const pageTitle_Harshit_24BCI0100 = 'Find Recipes'
const favoriteStorageKey = 'smart-recipe-favorites'

function RecipeFinder() {
  const [selectedIngredients, setSelectedIngredients] = useState([])
  const [vegetarianOnly, setVegetarianOnly] = useState(false)
  const [maxCookingTime, setMaxCookingTime] = useState('60')

  const [favoriteRecipeIds, setFavoriteRecipeIds] = useState(() => {
    const savedFavorites = localStorage.getItem(favoriteStorageKey)

    if (!savedFavorites) {
      return []
    }

    try {
      return JSON.parse(savedFavorites)
    } catch {
      return []
    }
  })


  const handleAddIngredient = (value) => {
    const normalizedValue = value.trim().toLowerCase()

    if (!normalizedValue || selectedIngredients.includes(normalizedValue)) {
      return
    }

    setSelectedIngredients((prev) => [...prev, normalizedValue])
  }


  const handleRemoveIngredient = (ingredientToRemove) => {
    setSelectedIngredients((prev) =>
      prev.filter((ingredient) => ingredient !== ingredientToRemove)
    )
  }


  const handleClearIngredients = () => {
    setSelectedIngredients([])
  }


  useEffect(() => {
    localStorage.setItem(
      favoriteStorageKey,
      JSON.stringify(favoriteRecipeIds)
    )
  }, [favoriteRecipeIds])


  const recipesWithMatchPercent = recipes.map((recipe) => {
    const matchingIngredients = recipe.ingredients.filter((ingredient) =>
      selectedIngredients.includes(ingredient)
    )

    const missingIngredients = recipe.ingredients.filter(
      (ingredient) => !selectedIngredients.includes(ingredient)
    )

    const matchPercent =
      recipe.ingredients.length === 0
        ? 0
        : Math.round(
            (matchingIngredients.length / recipe.ingredients.length) * 100
          )

    return {
      ...recipe,
      matchPercent,
      matchingIngredients,
      missingIngredients,
    }
  })


  const filteredRecipes = recipesWithMatchPercent
    .filter((recipe) => {
      const matchesVegetarian = !vegetarianOnly || recipe.veg
      const matchesIngredients = recipe.matchingIngredients.length > 0

      const recipeTime = Number.parseInt(recipe.time, 10)
      const matchesCookingTime =
        recipeTime <= Number.parseInt(maxCookingTime, 10)

      return (
        matchesVegetarian &&
        matchesIngredients &&
        matchesCookingTime
      )
    })
    .sort((a, b) => b.matchPercent - a.matchPercent)


  const handleFavoriteToggle = (recipeId) => {
    setFavoriteRecipeIds((prev) => {
      if (prev.includes(recipeId)) {
        return prev.filter((id) => id !== recipeId)
      }

      return [...prev, recipeId]
    })
  }


  return (
    <main className="page-shell">

      <section className="container page-section hero-panel">

        <h1 className="hero-title">
          {pageTitle_Harshit_24BCI0100}
        </h1>

        <p className="hero-text">
          Enter ingredients to discover recipes you can cook right now.
        </p>

      </section>



      <section className="container page-section content-panel">

        <IngredientInput
          ingredients={selectedIngredients}
          onAddIngredient={handleAddIngredient}
          onRemoveIngredient={handleRemoveIngredient}
          onClearIngredients={handleClearIngredients}
        />


        <FilterPanel
          vegetarianOnly={vegetarianOnly}
          onVegetarianChange={setVegetarianOnly}
          maxCookingTime={maxCookingTime}
          onMaxCookingTimeChange={setMaxCookingTime}
          resultCount={filteredRecipes.length}
        />


        <RecipeList
          title="Matching Recipes"
          recipes={filteredRecipes}
          favoriteRecipeIds={favoriteRecipeIds}
          onFavoriteToggle={handleFavoriteToggle}
          showResultCount
          emptyMessage={
            selectedIngredients.length === 0
              ? 'Add ingredients to begin searching.'
              : 'No matching recipes yet. Try adding more ingredients.'
          }
        />

      </section>

    </main>
  )
}

export default RecipeFinder
