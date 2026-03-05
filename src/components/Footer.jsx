import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12 mt-0 z-[2]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Link to="https://enactus.in" target="_blank">
            <img
              src="/Images/EnactusLogo.png"
              className="w-[20vh] object-cover"
              alt="Enactus NSUT"
            />
          </Link>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary text-lg mb-4">Quick Links</h4>
            <ul
              className="space-y-2"
              style={{ fontFamily: '"Gill Sans", sans-serif' }}
            >
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
                <HashLink
                  to="/#timeline"
                  className="text-gray-300 hover:text-primary transition-colors duration-300"
                >
                  Schedule
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div id="contact">
            <h4 className="text-primary  text-lg mb-4">Contact</h4>
            <p
              className="text-gray-300 mb-2"
              style={{ fontFamily: '"Gill Sans", sans-serif' }}
            >
              enactus@nsut.ac.in
            </p>
            <p
              className="text-gray-300"
              style={{ fontFamily: '"Gill Sans", sans-serif' }}
            >
              Phone: 9540994584, 7011994120
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Enactus NSUT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
