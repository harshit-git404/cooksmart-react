function Portfolio() {
  const skillGroups = [
    {
      title: 'Languages',
      items: ['Java', 'Python', 'C/C++', 'JavaScript', 'R'],
    },
    {
      title: 'Web Technologies',
      items: ['React', 'Node.js', 'HTML', 'CSS', 'Vite'],
    },
    {
      title: 'Core Concepts',
      items: ['Data Structures and Algorithms', 'REST APIs', 'OOP'],
    },
    {
      title: 'Developer Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Google Cloud Platform'],
    },
    {
      title: 'Deployment',
      items: ['Hostinger', 'FTP-based deployment'],
    },
    {
      title: 'Libraries',
      items: ['pandas', 'NumPy', 'Matplotlib'],
    },
  ]

  const projects = [
    {
      name: 'Meme Gen AI',
      period: 'Sep. 2025 - Dec. 2025',
      description:
        'An end-to-end AI meme generation system built to create context-aware memes automatically.',
      points: [
        'Designed and developed a complete meme generation workflow using NLP and generative AI.',
        'Analyzed trending social media content to generate relevant captions and meme ideas.',
        'Built a custom user interface for generating memes from text prompts.',
        'Developed a Python backend integrating deep learning models for text and image generation.',
        'Automated the content selection and generation pipeline for scalability and real-time relevance.',
        'Improved contextual humor by combining trend analysis with generative models.',
      ],
      achievement:
        'Reached the Samsung PRISM Hackathon finals and earned a granted patent for the proposed AI-based meme generation system.',
    },
  ]

  const experience = [
    {
      role: 'Web Dev Intern',
      company: 'GharKiBai',
      period: 'Dec. 2024 - Mar. 2025',
      summary: 'Worked on a service marketplace platform connecting urban households with domestic workers.',
      points: [
        'Collaborated in a 3-member team to build a platform for maids, cleaners, and helpers.',
        'Developed backend services with Node.js and Express.js for authentication, listings, and booking workflows.',
        'Integrated the Vite frontend with backend APIs for smooth data flow and responsive behavior.',
        'Built and tested RESTful APIs for registration, job posting, service browsing, and booking management.',
        'Designed and managed MongoDB schemas for users, service providers, and service requests.',
        'Deployed the application on Hostinger via FTP and handled basic server configuration and debugging.',
        'Used Git for version control and team collaboration.',
      ],
    },
  ]

  const education = [
    {
      institution: 'Vellore Institute of Technology',
      period: 'Jul. 2024 - Jul. 2028',
      program: 'Bachelor of Technology in Computer Science',
      detail: 'Specialization in Information Security',
      scoreLabel: 'CGPA',
      score: '9.05',
    },
    {
      institution: 'Universal Academy, Dehradun',
      period: '2021 - 2023',
      program: 'Senior High School',
      detail: 'CBSE',
      scoreLabel: 'Percentage',
      score: '90.0',
    },
    {
      institution: 'St. Patrick’s Academy, Dehradun',
      period: '2019 - 2021',
      program: 'High School',
      detail: 'ICSE',
      scoreLabel: 'Percentage',
      score: '91.4',
    },
  ]

  const contacts = [
    {
      label: 'Phone',
      value: '+91-6395401102',
      href: 'tel:+916395401102',
    },
    {
      label: 'Email',
      value: 'harsgit.hub@gmail.com',
      href: 'mailto:harsgit.hub@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/harshitsingh404',
      href: 'https://linkedin.com/in/harshitsingh404',
    },
    {
      label: 'GitHub',
      value: 'github.com/harshit-git404',
      href: 'https://github.com/harshit-git404',
    },
  ]

  return (
    <main className="page-shell">
      <section className="container page-section hero-panel portfolio-hero">
        <div className="portfolio-hero-content">
          <p className="portfolio-eyebrow">Developer Portfolio</p>
          <h1 className="portfolio-hero-title">Harshit Singh</h1>
          <p className="portfolio-hero-subtitle">AI Engineer &amp; Full Stack Developer</p>
          <p className="portfolio-hero-text">
            Computer Science student focused on AI systems and full stack development, with
            hands-on experience building production-style platforms and experimental AI products.
          </p>

          <div className="portfolio-hero-links">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                className="portfolio-hero-link"
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {contact.label}: {contact.value}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container page-section portfolio-section">
        <div className="portfolio-stat-grid">
          <article className="portfolio-stat-card">
            <p className="portfolio-stat-value">9.05</p>
            <p className="portfolio-stat-label">CGPA at VIT</p>
          </article>
          <article className="portfolio-stat-card">
            <p className="portfolio-stat-value">Samsung PRISM</p>
            <p className="portfolio-stat-label">Hackathon finalist</p>
          </article>
          <article className="portfolio-stat-card">
            <p className="portfolio-stat-value">Full Stack</p>
            <p className="portfolio-stat-label">React, Node.js, MongoDB, REST APIs</p>
          </article>
        </div>
      </section>

      <section className="container page-section portfolio-section">
        <div className="section-heading">
          <h2 className="section-title">Skills</h2>
          <p className="page-text">
            Tools and technologies I use across web development, backend systems, and AI-driven work.
          </p>
        </div>

        <div className="portfolio-skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="feature-card portfolio-card">
              <h3 className="feature-title">{group.title}</h3>
              <div className="portfolio-chip-list">
                {group.items.map((item) => (
                  <span key={item} className="portfolio-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container page-section portfolio-section">
        <div className="section-heading">
          <h2 className="section-title">Projects</h2>
          <p className="page-text">
            Selected work that reflects my interest in applied AI, product engineering, and execution.
          </p>
        </div>

        <div className="portfolio-project-grid">
          {projects.map((project) => (
            <article key={project.name} className="recipe-card portfolio-card">
              <div className="portfolio-heading-row">
                <div>
                  <p className="portfolio-card-label">Featured Project</p>
                  <h3 className="recipe-title">{project.name}</h3>
                </div>
                <p className="portfolio-date">{project.period}</p>
              </div>

              <p className="page-text">{project.description}</p>

              <ul className="info-list">
                {project.points.map((point) => (
                  <li key={point} className="info-list-item">
                    {point}
                  </li>
                ))}
              </ul>

              <div className="recipe-detail portfolio-highlight">
                <span className="detail-label">Highlight:</span> {project.achievement}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container page-section portfolio-section">
        <div className="section-heading">
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="portfolio-stack">
          {experience.map((item) => (
            <article key={`${item.role}-${item.company}`} className="content-panel portfolio-card">
              <div className="portfolio-heading-row">
                <div>
                  <h3 className="feature-title">{item.role}</h3>
                  <p className="portfolio-company">{item.company}</p>
                  <p className="page-text">{item.summary}</p>
                </div>
                <p className="portfolio-date">{item.period}</p>
              </div>

              <ul className="info-list">
                {item.points.map((point) => (
                  <li key={point} className="info-list-item">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container page-section portfolio-section">
        <div className="section-heading">
          <h2 className="section-title">Education</h2>
        </div>

        <div className="portfolio-stack">
          {education.map((item) => (
            <article key={item.institution} className="content-panel portfolio-card">
              <div className="portfolio-heading-row">
                <div>
                  <h3 className="feature-title">{item.institution}</h3>
                  <p className="page-text">{item.program}</p>
                  <p className="portfolio-meta-text">{item.detail}</p>
                </div>
                <p className="portfolio-date">{item.period}</p>
              </div>

              <p className="recipe-detail">
                <span className="detail-label">{item.scoreLabel}:</span> {item.score}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container page-section portfolio-section">
        <div className="section-heading">
          <h2 className="section-title">Contact</h2>
          <p className="page-text">
            Open to opportunities in AI engineering, backend systems, and full stack product development.
          </p>
        </div>

        <div className="portfolio-contact-list">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              className="portfolio-contact-link"
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="detail-label">{contact.label}:</span> {contact.value}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Portfolio
