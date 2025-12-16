import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Feane Bistro</h3>
            <p className="text-gray-400">Fresh, seasonal dishes in the heart of town.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Hours</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Mon–Thu: 11am – 9pm</li>
              <li>Fri–Sat: 11am – 11pm</li>
              <li>Sun: 11am – 8pm</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow</h4>
            <ul className="text-gray-400 space-y-1">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm pt-4 border-t border-gray-800">
          © {new Date().getFullYear()} Feane Bistro
        </div>
      </div>
    </footer>
  )
}

export default Footer

