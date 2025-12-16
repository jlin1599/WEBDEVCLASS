const mongoose = require('mongoose')
const MenuItem = require('../models/Menu')
require('dotenv').config()

const menuData = [
  // Starters
  { name: 'Bruschetta', price: 8, description: 'Tomatoes, basil, garlic, grilled sourdough.', image: '/images/Bruschetta.png', category: 'starters', featured: false },
  { name: 'Seasonal Soup', price: 7, description: "Ask about today's selection.", image: '/images/Seasonal Soup.png', category: 'starters', featured: false },
  { name: 'Calamari', price: 11, description: 'Lemon aioli and fresh herbs.', image: '/images/Calamari.png', category: 'starters', featured: false },
  
  // Mains
  { name: 'Grilled Salmon', price: 21, description: 'Asparagus, citrus butter.', image: '/images/Grilled Salmon.png', category: 'mains', featured: false },
  { name: 'Ribeye Steak', price: 28, description: 'Garlic mash, peppercorn sauce.', image: '/images/Ribeye Steak.png', category: 'mains', featured: false },
  { name: 'Truffle Pasta', price: 19, description: 'Wild mushrooms, parmesan.', image: '/images/Truffle Pasta.png', category: 'mains', featured: false },
  
  // Desserts
  { name: 'Crème Brûlée', price: 8, description: 'Madagascar vanilla bean.', image: '/images/Crème Brûlée.png', category: 'desserts', featured: false },
  { name: 'Tiramisu', price: 9, description: 'Classic espresso and mascarpone.', image: '/images/Tiramisu.png', category: 'desserts', featured: false },
  { name: 'Gelato Trio', price: 7, description: "Ask for today's flavors.", image: '/images/Gelato Trio.png', category: 'desserts', featured: false },
  
  // Featured items (Chef's Favorites)
  { name: 'Herb Roasted Chicken', price: 18, description: 'With garden vegetables and lemon jus.', image: '/images/herbroastedchicken.png', category: 'mains', featured: true },
  { name: 'Margherita Pizza', price: 14, description: 'San Marzano tomatoes, mozzarella, basil.', image: '/images/margheritapizza.png', category: 'mains', featured: true },
  { name: 'Chocolate Lava Cake', price: 9, description: 'Warm center, vanilla bean gelato.', image: '/images/chocolatelavacake.png', category: 'desserts', featured: true },
]

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/feane-bistro'

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB')
    
    // Clear existing menu items
    await MenuItem.deleteMany({})
    console.log('Cleared existing menu items')
    
    // Insert menu items
    await MenuItem.insertMany(menuData)
    console.log('Menu items seeded successfully')
    
    mongoose.connection.close()
    process.exit(0)
  })
  .catch(err => {
    console.error('Error seeding database:', err)
    process.exit(1)
  })

