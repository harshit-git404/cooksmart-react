import recipes from '../data/recipes.js'

const allIngredients = [...new Set(
  recipes.flatMap((recipe) => recipe.ingredients.map((ingredient) => ingredient.trim().toLowerCase()))
)].sort((left, right) => left.localeCompare(right))

export default allIngredients
