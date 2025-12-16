import React from 'react'

function About() {
  return (
    <div>
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Our Story</h1>
          <p className="text-gray-400">From a farmer's market stall to your favorite neighborhood table.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Rooted in Community</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Feane Bistro began as a weekend pop-up celebrating regional farms and artisanal producers. Today, our
                  kitchen still sources directly from growers we know by name. Our chefs craft seasonal menus that balance
                  comfort and creativity, highlighting peak produce and time-honored techniques.
                </p>
                <p>
                  Signature dishes like our herb roasted chicken and hand-stretched pizzas showcase simplicity done right.
                  Whether it's a casual lunch or a celebration dinner, we hope every meal feels like coming home.
                </p>
                <p>
                  Our mission is simple: cook with integrity, serve with warmth, and build a place where everyone belongs.
                </p>
              </div>
            </div>
            <figure className="space-y-2">
              <img
                src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1200&auto=format&fit=crop"
                alt="Warm bistro interior with wooden tables"
                className="w-full h-auto rounded-lg"
              />
              <figcaption className="text-gray-400 text-sm">Morning light in our dining room.</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

