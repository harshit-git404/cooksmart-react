import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import RecipeFinder from './pages/RecipeFinder.jsx'
import RecipeExplorer from './pages/RecipeExplorer.jsx'
import Favorites from './pages/Favorites.jsx'
import MealPlanner from './pages/MealPlanner.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import RecipeDetail from './pages/RecipeDetail.jsx'

const themeStorageKey = 'cooksmart-theme'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(themeStorageKey)

    return savedTheme === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    localStorage.setItem(themeStorageKey, theme)
    document.body.classList.remove('dark-theme', 'light-theme')
    document.body.classList.add(`${theme}-theme`)
  }, [theme])

  const handleThemeToggle = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbar theme={theme} onThemeToggle={handleThemeToggle} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-finder" element={<RecipeFinder />} />
          <Route path="/recipe-explorer" element={<RecipeExplorer />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/meal-planner" element={<MealPlanner />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
