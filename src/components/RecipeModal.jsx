function RecipeModal({ recipe, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose}>
          Close
        </button>

        <h2 className="modal-title">{recipe.name}</h2>

        <div className="recipe-info-grid">
          <p className="recipe-detail">
            <span className="detail-label">Match:</span> {recipe.matchPercent}%
          </p>
          <p className="recipe-detail">
            <span className="detail-label">Time:</span> {recipe.time}
          </p>
          <p className="recipe-detail">
            <span className="detail-label">Difficulty:</span> {recipe.difficulty}
          </p>
        </div>

        <div className="recipe-ingredients-block">
          <p className="recipe-subtitle">Ingredients:</p>
          {recipe.ingredients.map((ingredient) => (
            <p key={ingredient} className="recipe-ingredient-item">
              {ingredient}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecipeModal
