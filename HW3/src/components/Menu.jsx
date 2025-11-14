import React from 'react'
import MenuItem from './MenuItem'

const menuData = {
  starters: [
    { name: 'Bruschetta', price: 8, description: 'Tomatoes, basil, garlic, grilled sourdough.', image: '/images/Bruschetta.png' },
    { name: 'Seasonal Soup', price: 7, description: "Ask about today's selection.", image: '/images/Seasonal Soup.png' },
    { name: 'Calamari', price: 11, description: 'Lemon aioli and fresh herbs.', image: '/images/Calamari.png' },
  ],
  mains: [
    { name: 'Grilled Salmon', price: 21, description: 'Asparagus, citrus butter.', image: '/images/Grilled Salmon.png' },
    { name: 'Ribeye Steak', price: 28, description: 'Garlic mash, peppercorn sauce.', image: '/images/Ribeye Steak.png' },
    { name: 'Truffle Pasta', price: 19, description: 'Wild mushrooms, parmesan.', image: '/images/Truffle Pasta.png' },
  ],
  desserts: [
    { name: 'Crème Brûlée', price: 8, description: 'Madagascar vanilla bean.', image: '/images/Crème Brûlée.png' },
    { name: 'Tiramisu', price: 9, description: 'Classic espresso and mascarpone.', image: '/images/Tiramisu.png' },
    { name: 'Gelato Trio', price: 7, description: "Ask for today's flavors.", image: '/images/Gelato Trio.png' },
  ],
}

function Menu({ addToCart }) {
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
            {menuData.starters.map((item) => (
              <MenuItem key={item.name} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Mains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.mains.map((item) => (
              <MenuItem key={item.name} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData.desserts.map((item) => (
              <MenuItem key={item.name} item={item} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu

