import { useState } from 'react'
import recipes from '../data/recipes.js'

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const createEmptyPlan = () =>
  weekDays.reduce((plan, day) => {
    plan[day] = []
    return plan
  }, {})

function MealPlanner() {
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [weeklyPlan, setWeeklyPlan] = useState(createEmptyPlan)

  const handleDayClick = (day) => {
    if (!selectedRecipe) {
      return
    }

    setWeeklyPlan((previousPlan) => ({
      ...previousPlan,
      [day]: [...previousPlan[day], selectedRecipe],
    }))
  }

  const handleClearPlan = () => {
    setWeeklyPlan(createEmptyPlan())
    setSelectedRecipe(null)
  }

  const getTotalTime = (plannedRecipes) =>
    plannedRecipes.reduce((total, recipe) => {
      return total + Number.parseInt(recipe.time, 10)
    }, 0)

  return (
    <main className="page-shell">
      <section className="container page-section content-panel page-card">
        <div className="planner-header">
          <div>
            <h1 className="page-title">Weekly Meal Planner</h1>
            <p className="page-text">
              Select a recipe card and then click any day to add it to your
              weekly plan.
            </p>
          </div>

          <button
            type="button"
            className="secondary-button"
            onClick={handleClearPlan}
          >
            Clear Plan
          </button>
        </div>

        <div className="planner-layout">
          <section className="planner-sidebar">
            <h2 className="section-title">Available Recipes</h2>

            <div className="planner-recipe-list">
              {recipes.map((recipe) => (
                <button
                  key={recipe.id}
                  type="button"
                  className={`planner-recipe-card ${
                    selectedRecipe?.id === recipe.id
                      ? 'planner-recipe-card-active'
                      : ''
                  }`}
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  <span className="planner-recipe-name">{recipe.name}</span>
                  <span className="planner-recipe-time">{recipe.time}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="planner-main">
            <h2 className="section-title">Weekly Planner</h2>

            <div className="planner-grid">
              {weekDays.map((day) => (
                <article
                  key={day}
                  className={`planner-card ${
                    selectedRecipe ? 'planner-card-clickable' : ''
                  }`}
                  onClick={() => handleDayClick(day)}
                >
                  <h3 className="planner-day">{day}</h3>

                  <div className="planner-day-recipes">
                    {weeklyPlan[day].length === 0 && (
                      <p className="planner-empty">No meals planned yet.</p>
                    )}

                    {weeklyPlan[day].map((recipe, index) => (
                      <div
                        key={`${day}-${recipe.id}-${index}`}
                        className="planner-entry"
                      >
                        <p className="planner-entry-name">{recipe.name}</p>
                        <p className="planner-entry-time">{recipe.time}</p>
                      </div>
                    ))}
                  </div>

                  <div className="planner-total">
                    <p className="planner-label">Total time</p>
                    <p className="planner-value">
                      {getTotalTime(weeklyPlan[day])} min
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default MealPlanner
