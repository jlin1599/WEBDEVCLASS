import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import ShoppingCart from './components/ShoppingCart'
import './index.css'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.name === item.name)
      if (existingItem) {
        return prevItems.map(i =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemName) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== itemName))
  }

  const updateQuantity = (itemName, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemName)
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.name === itemName
            ? { ...item, quantity: newQuantity }
            : item
        )
      )
    }
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Header cartItemCount={getTotalItems()} onCartClick={() => setIsCartOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        <ShoppingCart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
          totalPrice={getTotalPrice()}
        />
      </div>
    </Router>
  )
}

export default App
