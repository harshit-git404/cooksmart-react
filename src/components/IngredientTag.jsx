function IngredientTag({ ingredient, onRemove }) {
  return (
    <div className="ingredient-tag">
      <span>{ingredient}</span>
      <button
        type="button"
        className="tag-remove"
        aria-label={`Remove ${ingredient}`}
        onClick={() => onRemove(ingredient)}
      >
        X
      </button>
    </div>
  )
}

export default IngredientTag
