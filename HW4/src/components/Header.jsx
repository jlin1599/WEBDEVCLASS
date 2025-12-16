import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header({ cartItemCount, onCartClick }) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center gap-4">
        <Link to="/" className="text-2xl font-bold">
          Feane <span className="text-yellow-400">Bistro</span>
        </Link>
        
        <nav className={`${isNavOpen ? 'block' : 'hidden'} md:block fixed md:static inset-x-0 top-16 md:top-auto bg-gray-900 md:bg-transparent border-b md:border-0 border-gray-800 md:border-none`}>
          <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
            <li>
              <Link
                to="/"
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive('/') ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive('/menu') ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsNavOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive('/about') ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsNavOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive('/contact') ? 'text-white bg-gray-800' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative p-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Open Shopping Cart"
          >
            <span className="text-xl">🛒</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-gray-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                {cartItemCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="md:hidden p-2 border border-gray-700 rounded-lg hover:bg-gray-800"
            aria-label="Toggle Menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

