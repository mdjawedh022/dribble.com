import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavigationLinks = ({ isMenuOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState({
    explore: false,
    hire: false,
  });

  const exploreLinks = [
    { name: "Popular", path: "/explore/popular" },
    { name: "New & Noteworthy", path: "/explore/new" },
    { name: "Product Design", path: "/explore/product-design" },
    { name: "Web Design", path: "/explore/web-design" },
  ];

  const hireLinks = [
    { name: "Post a Job", path: "/hire/post-job" },
    { name: "Search Designers", path: "/hire/search" },
  ];

  const navLinks = [
    { name: "Find Jobs", path: "/jobs" },
    { name: "Blog", path: "/blog" },
  ];

  const handleMouseEnter = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: true,
    }));
  };

  const handleMouseLeave = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: false,
    }));
  };

  return (
    <nav
      className={`lg:flex lg:items-center lg:space-x-9 text-gray-700 lg:static absolute top-16 left-0 w-full bg-white lg:bg-transparent lg:w-auto ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      {/* Explore Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter("explore")}
        onMouseLeave={() => handleMouseLeave("explore")}
      >
        <button className="font-semibold hover:text-pink-500 flex items-center gap-2">
          Explore <HiOutlineChevronDown />
        </button>
        {dropdownOpen.explore && (
          <div className="absolute bg-white shadow-md rounded-md mt-1 z-20 w-48">
            {exploreLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 hover:bg-gray-100 text-sm font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Hire a Designer Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter("hire")}
        onMouseLeave={() => handleMouseLeave("hire")}
      >
        <button className="font-semibold hover:text-pink-500 flex items-center gap-2">
          Hire a Designer <HiOutlineChevronDown />
        </button>
        {dropdownOpen.hire && (
          <div className="absolute bg-white shadow-md rounded-md mt-1 z-20 w-48">
            {hireLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 hover:bg-gray-100 text-sm font-semibold"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Static Navigation Links (Find Jobs & Blog) */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0 mt-4 lg:mt-0 md:flex-col md:items-start md:py-4">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="font-semibold hover:text-pink-500"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavigationLinks;


