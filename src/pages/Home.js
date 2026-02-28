import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[radial-gradient(circle_at_center,_#000000,_#1f2937)] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl  mb-4">
            Welcome to Our Event Platform
          </h1>
          <p className="text-xl mb-8 opacity-95">
            Discover amazing events and join our community
          </p>
          <button className="bg-primary text-black  px-8 py-3 rounded-full hover:opacity-85 transition-opacity duration-300 transform hover:-translate-y-1">
            Get Started
          </button>
        </div>
      </section>

      {/* Section 1 - Featured Events */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl  text-center mb-4">Featured Events</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Explore our curated selection of events
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gradient-to-br from-purple-600 to-purple-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-video bg-gray-400 flex items-center justify-center">
                  <img
                    src={`https://via.placeholder.com/400x300?text=Event+${item}`}
                    alt={`Event ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl  mb-2">Event Title</h3>
                  <p className="text-gray-100">
                    Description of your amazing event
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Why Join Us */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl  text-center mb-4">Why Join Us?</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Here are the reasons to be part of our community
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Professional', desc: 'High-quality events managed by professionals' },
              { title: 'Community', desc: 'Connect with like-minded individuals' },
              { title: 'Experience', desc: 'Create unforgettable memories' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center"
              >
                <h3 className="text-2xl  text-purple-600 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}