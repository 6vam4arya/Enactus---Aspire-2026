import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 mt-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-primary  text-lg mb-4">About Us</h4>
            <p className="text-gray-300">
              Your premier event management platform for unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary  text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-primary  text-lg mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">Email: info@events.com</p>
            <p className="text-gray-300">Phone: (555) 123-4567</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Event Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}