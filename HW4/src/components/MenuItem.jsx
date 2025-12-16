import React from 'react'

function MenuItem({ item, addToCart }) {
  return (
    <article className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="bg-gray-900 px-3 py-1 rounded-lg border border-gray-700 font-semibold text-yellow-400">
            ${item.price}
          </span>
          <button
            onClick={() => addToCart(item)}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default MenuItem

