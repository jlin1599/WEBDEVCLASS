import React, { useState, useEffect } from 'react'
import MenuItem from './MenuItem'
import { menuAPI } from '../services/api'

function Menu({ addToCart }) {
  const [menuItems, setMenuItems] = useState({ starters: [], mains: [], desserts: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true)
        const allItems = await menuAPI.getAll()
        
        // Group by category
        const grouped = {
          starters: allItems.filter(item => item.category === 'starters'),
          mains: allItems.filter(item => item.category === 'mains'),
          desserts: allItems.filter(item => item.category === 'desserts')
        }
        
        setMenuItems(grouped)
        setError(null)
      } catch (err) {
        setError('Failed to load menu. Please try again later.')
        console.error('Error fetching menu:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [])

  if (loading) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-400">Loading menu...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <p className="text-red-400">{error}</p>
      </div>
    )
  }
  return (
    <div>
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Our Menu</h1>
          <p className="text-gray-400">Crafted daily with local ingredients.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Starters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.starters.map((item) => (
              <MenuItem key={item._id || item.name} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Mains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.mains.map((item) => (
              <MenuItem key={item._id || item.name} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.desserts.map((item) => (
              <MenuItem key={item._id || item.name} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu

