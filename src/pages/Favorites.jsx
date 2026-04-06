import { useEffect, useState } from 'react'
import RecipeList from '../components/RecipeList.jsx'
import recipes from '../data/recipes.js'

const favoriteStorageKey = 'smart-recipe-favorites'

function Favorites() {

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


  useEffect(() => {

    localStorage.setItem(
      favoriteStorageKey,
      JSON.stringify(favoriteRecipeIds)
    )

  }, [favoriteRecipeIds])



  const favoriteRecipes = recipes.filter((recipe) =>
    favoriteRecipeIds.includes(recipe.id)
  )



  const handleFavoriteToggle = (recipeId) => {

    setFavoriteRecipeIds((prev) =>
      prev.filter((id) => id !== recipeId)
    )

  }



  return (

    <main className="page-shell">


      <section className="container page-section hero-panel">

        <h1 className="hero-title">
          Favorites
        </h1>

        <p className="hero-text">
          Your saved recipes in one place for quick access.
        </p>

      </section>



      <section className="container page-section content-panel">


        <RecipeList
          title="Saved Recipes"
          recipes={favoriteRecipes}
          favoriteRecipeIds={favoriteRecipeIds}
          onFavoriteToggle={handleFavoriteToggle}
          emptyMessage="No saved recipes yet."
          variant="explorer"
          savedButtonLabel="Remove"
        />


      </section>



    </main>

  )

}

export default Favorites
