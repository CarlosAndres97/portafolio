import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'
import { useState } from 'react'

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="container-custom flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold text-primary-600">
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-primary-600 transition-colors">
            Inicio
          </Link>
          <Link to="/projects" className="hover:text-primary-600 transition-colors">
            Proyectos
          </Link>
          <Link to="/blog" className="hover:text-primary-600 transition-colors">
            Blog
          </Link>
          <Link to="/about" className="hover:text-primary-600 transition-colors">
            Sobre mí
          </Link>
          <Link to="/contact" className="btn-primary">
            Contacto
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Inicio
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            Proyectos
          </Link>
          <Link to="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            Sobre mí
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary">
            Contacto
          </Link>
        </div>
      )}
    </nav>
  )
}
