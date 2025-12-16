import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { menuAPI } from '../services/api'

const galleryImages = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
]

function Home() {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [chefsFavorites, setChefsFavorites] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const featured = await menuAPI.getFeatured()
        setChefsFavorites(featured)
      } catch (error) {
        console.error('Error fetching featured items:', error)
        // Fallback to empty array if API fails
        setChefsFavorites([])
      } finally {
        setLoading(false)
      }
    }
    fetchFeatured()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (direction) => {
    setGalleryIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % galleryImages.length
      } else {
        return (prev - 1 + galleryImages.length) % galleryImages.length
      }
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Fresh. Local. Memorable.</h1>
          <p className="text-xl text-gray-300 mb-8">Experience seasonal cuisine crafted with heart.</p>
          <Link to="/menu" className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-lg hover:shadow-lg transition-all">
            Explore the Menu
          </Link>
        </div>
      </section>

      {/* Chef's Favorites */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Chef's Favorites</h2>
          {loading ? (
            <p className="text-gray-400 text-center py-8">Loading featured items...</p>
          ) : chefsFavorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {chefsFavorites.map((item) => (
                <article key={item._id || item.name} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <span className="inline-block bg-gray-900 px-3 py-1 rounded-lg border border-gray-700 text-yellow-400 font-semibold">
                      ${item.price}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-8">No featured items available.</p>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Gallery</h2>
          <div className="relative rounded-xl overflow-hidden border border-gray-700 bg-gray-950">
            <div className="relative h-96 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
              >
                {galleryImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
            <button
              onClick={() => goToSlide('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 border border-gray-700 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={() => goToSlide('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 border border-gray-700 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

