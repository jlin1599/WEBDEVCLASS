const express = require('express')
const router = express.Router()
const Order = require('../models/Order')

// Create a new order
router.post('/', async (req, res) => {
  try {
    const { items, totalPrice, totalItems } = req.body
    
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Order must contain at least one item' })
    }

    const order = new Order({
      items,
      totalPrice,
      totalItems
    })

    const savedOrder = await order.save()
    res.status(201).json(savedOrder)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get single order
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (!order) {
      return res.status(404).json({ error: 'Order not found' })
    }
    res.json(order)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update order status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    )
    if (!order) {
      return res.status(404).json({ error: 'Order not found' })
    }
    res.json(order)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router

