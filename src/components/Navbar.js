import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/Images/HeadingEvents.png`}
            alt="Logo"
            className="h-12 w-auto rounded"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 flex-wrap justify-center">
          <li>
            <Link
              to="/"
              className={` text-lg transition-all duration-300 rounded px-3 py-2 ${
                isActive('/')
                  ? 'bg-primary text-black'
                  : 'text-white hover:bg-black/30'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={` text-lg transition-all duration-300 rounded px-3 py-2 ${
                isActive('/events')
                  ? 'bg-primary text-black'
                  : 'text-white hover:bg-black/30'
              }`}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/schedule"
              className={` text-lg transition-all duration-300 rounded px-3 py-2 ${
                isActive('/schedule')
                  ? 'bg-primary text-black'
                  : 'text-white hover:bg-black/30'
              }`}
            >
              Schedule
            </Link>
          </li>
          <li>
            <a
              href="#gallery"
              className=" text-lg text-white transition-all duration-300 rounded px-3 py-2 hover:bg-black/30"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className=" text-lg text-white transition-all duration-300 rounded px-3 py-2 hover:bg-black/30"
            >
              Contact
            </a>
          </li>
          <li>
            <button
              className="bg-primary text-black  px-6 py-2 rounded transition-opacity duration-300 hover:opacity-85"
            >
              Register
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}