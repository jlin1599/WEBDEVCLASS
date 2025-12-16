const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

export const menuAPI = {
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/menu`)
    if (!response.ok) throw new Error('Failed to fetch menu')
    return response.json()
  },
  
  getByCategory: async (category) => {
    const response = await fetch(`${API_BASE_URL}/menu/category/${category}`)
    if (!response.ok) throw new Error('Failed to fetch menu by category')
    return response.json()
  },
  
  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/menu/${id}`)
    if (!response.ok) throw new Error('Failed to fetch menu item')
    return response.json()
  },
  
  getFeatured: async () => {
    const response = await fetch(`${API_BASE_URL}/menu/featured`)
    if (!response.ok) throw new Error('Failed to fetch featured items')
    return response.json()
  }
}

export const ordersAPI = {
  create: async (orderData) => {
    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
    if (!response.ok) throw new Error('Failed to create order')
    return response.json()
  },
  
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/orders`)
    if (!response.ok) throw new Error('Failed to fetch orders')
    return response.json()
  },
  
  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/orders/${id}`)
    if (!response.ok) throw new Error('Failed to fetch order')
    return response.json()
  }
}

