import { NavLink } from 'react-router-dom'

function Navbar({ theme, onThemeToggle }) {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/recipe-finder', label: 'Find Recipes' },
    { to: '/recipe-explorer', label: 'Explore' },
    { to: '/favorites', label: 'Favorites' },
    { to: '/about', label: 'About' },
  ]

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="brand-link">
          CookSmart
        </NavLink>

        <div className="nav-actions">
          <nav className="nav-links">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="secondary-button theme-toggle"
            onClick={onThemeToggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === 'dark' ? '☀' : '☾'}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
