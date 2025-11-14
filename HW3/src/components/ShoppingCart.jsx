import React from 'react'

function ShoppingCart({ isOpen, onClose, items, removeFromCart, updateQuantity, clearCart, totalPrice }) {
  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-gray-800 z-50 shadow-2xl flex flex-col">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:text-gray-400 transition-colors"
            aria-label="Close Cart"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 opacity-50">🛒</div>
              <p className="text-gray-400 mb-2">Your cart is empty</p>
              <p className="text-gray-500 text-sm">Add some delicious items from our menu!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="bg-gray-900 p-4 rounded-lg border border-gray-700"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                      <p className="text-yellow-400 font-semibold mt-1">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        className="w-8 h-8 bg-gray-700 border border-gray-600 rounded flex items-center justify-center hover:bg-gray-600 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-700 border border-gray-600 rounded flex items-center justify-center hover:bg-gray-600 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="px-3 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-700 space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg text-center">
              <strong className="text-xl">
                Total: ${totalPrice.toFixed(2)}
              </strong>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={clearCart}
                className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Clear Cart
              </button>
              <button
                onClick={() => {
                  alert(`Thank you for your order!\n\nItems: ${items.reduce((sum, item) => sum + item.quantity, 0)}\nTotal: $${totalPrice.toFixed(2)}\n\nYour order will be ready shortly!`)
                  clearCart()
                  onClose()
                }}
                className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default ShoppingCart

