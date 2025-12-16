import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSuccess('Thanks! Your message has been sent.')
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  return (
    <div>
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-400">We'd love to hear from you.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Visit</h2>
              <p className="text-gray-300 mb-4">123 Market Street, Springfield, USA</p>
              <div className="aspect-video rounded-lg overflow-hidden border border-gray-700">
                <iframe
                  title="Google Map to Feane Bistro"
                  src="https://www.google.com/maps?q=New%20York&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Message Us</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  Send
                </button>
                {success && <p className="text-green-400 text-sm mt-2">{success}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

