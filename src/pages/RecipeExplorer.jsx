import { useEffect, useState } from 'react'
import RecipeList from '../components/RecipeList.jsx'
import recipes from '../data/recipes.js'
import { includesNormalizedMatch } from '../utils/search.js'

const favoriteStorageKey = 'smart-recipe-favorites'

function RecipeExplorer() {

  const [searchTerm, setSearchTerm] = useState('')
  const [vegetarianOnly, setVegetarianOnly] = useState(false)
  const [maxCookingTime, setMaxCookingTime] = useState('60')
  const [difficulty, setDifficulty] = useState('all')


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



  const filteredRecipes = recipes.filter((recipe) => {

    const matchesSearch =
      includesNormalizedMatch(recipe.name, searchTerm)

    const matchesVegetarian =
      !vegetarianOnly || recipe.veg


    const matchesCookingTime =
      Number.parseInt(recipe.time, 10)
      <= Number.parseInt(maxCookingTime, 10)


    const matchesDifficulty =
      difficulty === 'all'
      || recipe.difficulty === difficulty


    return (
      matchesSearch
      && matchesVegetarian
      && matchesCookingTime
      && matchesDifficulty
    )

  })



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
          Explore Recipes
        </h1>

        <p className="hero-text">
          Browse available recipes and refine results using filters.
        </p>

      </section>



      <section className="container page-section content-panel">


        <div className="explorer-filters">


          <div className="filter-group">

            <label
              htmlFor="recipe-search"
              className="section-label"
            >
              Search
            </label>


            <input
              id="recipe-search"
              type="text"
              className="text-input"
              placeholder="Search by recipe name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>



          <div className="filter-group">

            <label
              htmlFor="explorer-time"
              className="section-label"
            >
              Max Cooking Time
            </label>


            <select
              id="explorer-time"
              className="select-input"
              value={maxCookingTime}
              onChange={(e) => setMaxCookingTime(e.target.value)}
            >

              <option value="15">15 min</option>
              <option value="30">30 min</option>
              <option value="60">60 min</option>

            </select>

          </div>



          <div className="filter-group">

            <label
              htmlFor="explorer-difficulty"
              className="section-label"
            >
              Difficulty
            </label>


            <select
              id="explorer-difficulty"
              className="select-input"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >

              <option value="all">
                All
              </option>

              <option value="easy">
                easy
              </option>

              <option value="medium">
                medium
              </option>

            </select>

          </div>



          <label className="checkbox-row explorer-toggle">

            <input
              type="checkbox"
              checked={vegetarianOnly}
              onChange={(e) => setVegetarianOnly(e.target.checked)}
            />

            <span>
              Vegetarian only
            </span>

          </label>


        </div>



        <RecipeList
          title="Available Recipes"
          recipes={filteredRecipes}
          favoriteRecipeIds={favoriteRecipeIds}
          onFavoriteToggle={handleFavoriteToggle}
          showResultCount
          emptyMessage="No recipes match the selected filters."
          variant="explorer"
        />


      </section>



    </main>

  )

}

export default RecipeExplorer
