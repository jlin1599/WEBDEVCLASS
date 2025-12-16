const mongoose = require('mongoose')

const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  description: { type: String }
})

const orderSchema = new mongoose.Schema({
  items: [orderItemSchema],
  totalPrice: { type: Number, required: true },
  totalItems: { type: Number, required: true },
  status: { type: String, default: 'pending', enum: ['pending', 'processing', 'completed', 'cancelled'] }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)

