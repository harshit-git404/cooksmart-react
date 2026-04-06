import { useState } from 'react'

function CookingMode({ recipe, onClose }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const totalSteps = recipe.steps.length

  return (
    <main className="cooking-mode-shell">
      <section className="container">
        <div className="cooking-mode-card">
          <button type="button" className="secondary-button" onClick={onClose}>
            Back to Recipe
          </button>

          <h1 className="cooking-mode-title">{recipe.name}</h1>

          <div className="cooking-mode-progress">
            <p className="cooking-mode-step-count">
              Step {currentStepIndex + 1} of {totalSteps}
            </p>
            <p className="cooking-mode-step-indicator">
              Step {currentStepIndex + 1} / {totalSteps}
            </p>
          </div>

          <div className="cooking-mode-step-card">
            <p className="cooking-mode-step-text">
              {recipe.steps[currentStepIndex]}
            </p>
          </div>

          <div className="cooking-mode-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={() =>
                setCurrentStepIndex((previousIndex) => previousIndex - 1)
              }
              disabled={currentStepIndex === 0}
            >
              Previous Step
            </button>

            <button
              type="button"
              className="primary-button"
              onClick={() =>
                setCurrentStepIndex((previousIndex) => previousIndex + 1)
              }
              disabled={currentStepIndex === totalSteps - 1}
            >
              Next Step
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CookingMode
