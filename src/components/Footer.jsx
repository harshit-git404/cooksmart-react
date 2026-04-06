import { NavLink } from 'react-router-dom'

function Footer() {

  const links = [
    { to: '/', label: 'Home' },
    { to: '/recipe-finder', label: 'Find Recipes' },
    { to: '/recipe-explorer', label: 'Explore' },
    { to: '/favorites', label: 'Favorites' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About' },
  ]

  return (
    <footer className="footer">

      <div className="container footer-inner">

        <h2 className="footer-brand">
          CookSmart
        </h2>

        <p className="footer-text">
          Making everyday cooking simpler.
        </p>


        <nav className="footer-links">

          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className="footer-link"
            >
              {link.label}
            </NavLink>
          ))}

        </nav>


        <div className="footer-meta">
          <p className="footer-text">Harshit Singh</p>
          <p className="footer-text">24BCI0100</p>
        </div>

      </div>

    </footer>
  )
}

export default Footer
