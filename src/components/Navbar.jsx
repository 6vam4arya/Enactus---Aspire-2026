import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
            className="h-10 md:h-12 w-auto rounded"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-2 md:gap-8 flex-wrap justify-center">
          <li>
            <Link
              to="/"
              className={` text-md md:text-lg transition-all duration-300 rounded px-3 py-2 ${
                isActive("/")
                  ? "bg-primary text-black"
                  : "text-white hover:bg-black/30"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={` text-md md:text-lg transition-all duration-300 rounded px-3 py-2 ${
                isActive("/events")
                  ? "bg-primary text-black"
                  : "text-white hover:bg-black/30"
              }`}
            >
              Events
            </Link>
          </li>
          <li>
            <HashLink
              to="/#timeline"
              className="text-md md:text-lg transition-all duration-300 text-white hover:bg-black/30 rounded px-3 py-2"
              smooth
            >
              Schedule
            </HashLink>
          </li>
          <li>
            <HashLink
              to={(isActive("/events") ? "/events" : "/") + "#contact"}
              className=" text-md md:text-lg text-white transition-all duration-300 rounded px-3 py-2 hover:bg-black/30"
              smooth
            >
              Contact
            </HashLink>
          </li>
          <li>
            <HashLink to="/#register">
              <button className="bg-primary text-black  px-6 py-2 rounded transition-opacity duration-300 hover:opacity-85">
                Register
              </button>
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
