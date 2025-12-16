const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true, enum: ['starters', 'mains', 'desserts'] },
  featured: { type: Boolean, default: false }
}, { timestamps: true })

module.exports = mongoose.model('MenuItem', menuItemSchema)

