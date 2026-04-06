import { Link } from 'react-router-dom'

function Home() {
  const features = [
    {
      title: 'Ingredient-Based Recipe Search',
      text: 'Enter ingredients you already have and discover relevant recipes instantly.',
    },
    {
      title: 'Explore Recipes',
      text: 'Browse recipes with filters for cooking time, difficulty, and dietary preference.',
    },
    {
      title: 'Step-by-Step Cooking Mode',
      text: 'Follow distraction-free cooking instructions in a focused interface.',
    },
    {
      title: 'Save Favorites',
      text: 'Bookmark recipes and quickly return to the ones you like.',
    },
  ]

  const steps = [
    'Enter available ingredients',
    'Choose a recipe that fits your needs',
    'Follow guided cooking steps',
  ]

  return (
    <main className="page-shell">

      <section className="container page-section hero-panel home-hero">
        <div className="hero-content">
          <h1 className="hero-title">CookSmart</h1>

          <p className="hero-text">
            Find recipes you can cook right now using ingredients already in your kitchen.
          </p>

          <div className="hero-actions">
            <Link to="/recipe-finder" className="primary-button">
              Find Recipes
            </Link>
          </div>
        </div>
      </section>


      <section className="container page-section home-section">
        <div className="section-header">
          <h2 className="section-title">Core Features</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>


      <section className="container page-section home-section">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article key={step} className="step-card">
              <span className="step-number">0{index + 1}</span>
              <p className="step-text">{step}</p>
            </article>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Home