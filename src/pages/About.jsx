function About() {
  const features = [
    'Find recipes using ingredients already available at home',
    'Explore recipes using filters like cooking time, difficulty, and diet preference',
    'Save favorite recipes for quick access later',
    'Follow step-by-step instructions using Cooking Mode',
  ]

  const technologies = ['ReactJS', 'HTML', 'CSS', 'JavaScript']

  return (
    <main className="page-shell">
      <section className="container page-section content-panel info-page-card">

        <h1 className="page-title">About CookSmart</h1>

        <p className="page-text">
          CookSmart is a frontend web application designed to simplify everyday cooking decisions.
          Instead of searching through multiple websites, users can quickly discover recipes
          based on ingredients they already have at home.
        </p>

        <p className="page-text">
          The application focuses on providing a clean and interactive interface where users
          can explore recipes, save useful ones, and follow structured cooking steps without distractions.
        </p>


        <div className="info-section">
          <h2 className="section-title">Key Features</h2>

          <ul className="info-list">
            {features.map((feature) => (
              <li key={feature} className="info-list-item">
                {feature}
              </li>
            ))}
          </ul>
        </div>


        <div className="info-section">
          <h2 className="section-title">Technology Used</h2>

          <ul className="info-list">
            {technologies.map((technology) => (
              <li key={technology} className="info-list-item">
                {technology}
              </li>
            ))}
          </ul>
        </div>


        <div className="info-section">
          <h2 className="section-title">Project Objective</h2>

          <p className="page-text">
            This project demonstrates practical usage of React concepts including
            component-based architecture, state management, filtering logic,
            routing between pages, and reusable UI components.
          </p>
        </div>

      </section>
    </main>
  )
}

export default About