import { useState } from 'react'
import { useParams } from 'react-router-dom'
import CookingMode from '../components/CookingMode.jsx'
import recipes from '../data/recipes.js'

function RecipeDetail() {
  const { id } = useParams()
  const recipe = recipes.find((item) => item.id === Number.parseInt(id, 10))
  const [isCookingModeOpen, setIsCookingModeOpen] = useState(false)

  if (!recipe) {
    return (
      <main className="page-shell">
        <section className="container page-section content-panel detail-page-card">
          <h1 className="page-title">Recipe Not Found</h1>
          <p className="page-text">
            The recipe you are looking for could not be found.
          </p>
        </section>
      </main>
    )
  }

  if (isCookingModeOpen) {
    return (
      <CookingMode
        recipe={recipe}
        onClose={() => setIsCookingModeOpen(false)}
      />
    )
  }

  return (
    <main className="page-shell">
      <section className="container page-section content-panel detail-page-card">
        <h1 className="detail-title">{recipe.name}</h1>

        <div className="detail-meta">
          <p className="recipe-detail">
            <span className="detail-label">Time:</span> {recipe.time}
          </p>
          <p className="recipe-detail">
            <span className="detail-label">Difficulty:</span> {recipe.difficulty}
          </p>
          <p className="recipe-detail">
            <span className="detail-label">Type:</span>{' '}
            {recipe.veg ? 'Veg' : 'Non-Veg'}
          </p>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => setIsCookingModeOpen(true)}
        >
          Start Cooking Mode
        </button>

        <div className="detail-section">
          <h2 className="section-title">Ingredients</h2>
          <ul className="info-list">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className="info-list-item">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h2 className="section-title">Cooking Steps</h2>
          <div className="detail-steps">
            {recipe.steps.map((step, index) => (
              <div key={step} className="detail-step-card">
                <p className="detail-step-title">Step {index + 1}</p>
                <p className="page-text">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default RecipeDetail
