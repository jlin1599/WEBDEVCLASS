const express = require('express')
const router = express.Router()
const MenuItem = require('../models/Menu')

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find().sort({ category: 1, name: 1 })
    res.json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get featured menu items
router.get('/featured', async (req, res) => {
  try {
    const items = await MenuItem.find({ featured: true })
    res.json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get menu items by category
router.get('/category/:category', async (req, res) => {
  try {
    const items = await MenuItem.find({ category: req.params.category })
    res.json(items)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get single menu item
router.get('/:id', async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id)
    if (!item) {
      return res.status(404).json({ error: 'Menu item not found' })
    }
    res.json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router

