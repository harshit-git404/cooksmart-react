import { useNavigate } from 'react-router-dom'

function RecipeCard({
  recipe,
  isFavorite,
  onFavoriteToggle,
  variant = 'finder',
  savedButtonLabel = 'Saved',
}) {

  const navigate = useNavigate()
  const isFinder = variant === 'finder'

  const handleCardClick = () => {
    navigate(`/recipe/${recipe.id}`)
  }

  const handleFavoriteClick = (event) => {
    event.stopPropagation()
    onFavoriteToggle(recipe.id)
  }

  const handleSeeRecipeClick = (event) => {
    event.stopPropagation()
    navigate(`/recipe/${recipe.id}`)
  }

  return (
    <article
      className="recipe-card"
      onClick={handleCardClick}
    >

      <h3 className="recipe-title">
        {recipe.name}
      </h3>


      <div className="recipe-info-grid">

        <p className="recipe-detail">
          <span className="detail-label">Time:</span> {recipe.time}
        </p>

        <p className="recipe-detail">
          <span className="detail-label">Difficulty:</span> {recipe.difficulty}
        </p>

        <p className="recipe-detail">
          <span className="detail-label">Type:</span> {recipe.veg ? 'Veg' : 'Non-Veg'}
        </p>

        {isFinder && (
          <p className="recipe-detail">
            <span className="detail-label">Match:</span> {recipe.matchPercent}%
          </p>
        )}

      </div>


      {isFinder && (
        <div className="match-bar">
          <div
            className="match-bar-fill"
            style={{ width: `${recipe.matchPercent}%` }}
          />
        </div>
      )}


      <div className="recipe-ingredients-block">

        {isFinder ? (

          <>
            <div className="ingredient-group">
              <p className="recipe-subtitle">You have:</p>

              {recipe.matchingIngredients.length > 0
                ? recipe.matchingIngredients.map((ingredient) => (
                    <p key={ingredient} className="recipe-ingredient-item">
                      {ingredient}
                    </p>
                  ))
                : <p className="recipe-ingredient-item">None</p>}
            </div>


            <div className="ingredient-group">
              <p className="recipe-subtitle">You need:</p>

              {recipe.missingIngredients.length > 0
                ? recipe.missingIngredients.map((ingredient) => (
                    <p
                      key={ingredient}
                      className="recipe-ingredient-item recipe-ingredient-missing"
                    >
                      {ingredient}
                    </p>
                  ))
                : <p className="recipe-ingredient-item recipe-ingredient-missing">None</p>}
            </div>
          </>

        ) : (

          <div className="ingredient-group">
            <p className="recipe-subtitle">Ingredients:</p>

            {recipe.ingredients.map((ingredient) => (
              <p key={ingredient} className="recipe-ingredient-item">
                {ingredient}
              </p>
            ))}
          </div>

        )}

      </div>

      <div className="recipe-card-actions">
        <button
          type="button"
          className="recipe-secondary-button"
          onClick={handleSeeRecipeClick}
        >
          See Recipe
        </button>

        <button
          type="button"
          className={`favorite-button ${isFavorite ? 'favorite-button-saved' : ''}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? savedButtonLabel : 'Add'}
        </button>
      </div>

    </article>
  )
}

export default RecipeCard
