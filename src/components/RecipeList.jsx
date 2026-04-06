import RecipeCard from './RecipeCard.jsx'

function RecipeList({
  title,
  recipes,
  favoriteRecipeIds,
  onFavoriteToggle,
  emptyMessage,
  variant = 'finder',
  savedButtonLabel,
  showResultCount = false,
}) {
  const resultLabel = `Showing ${recipes.length} ${recipes.length === 1 ? 'recipe' : 'recipes'}`

  return (
    <section className="recipe-section">
      <div className="section-heading">
        <h2 className="section-title">{title}</h2>
        {showResultCount && (
          <p className="recipe-list-count">{resultLabel}</p>
        )}
      </div>

      {recipes.length === 0 && (
        <div className="empty-card">
          <p className="empty-text empty-text-centered">{emptyMessage}</p>
        </div>
      )}

      {recipes.length > 0 && (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isFavorite={favoriteRecipeIds.includes(recipe.id)}
              onFavoriteToggle={onFavoriteToggle}
              variant={variant}
              savedButtonLabel={savedButtonLabel}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default RecipeList
