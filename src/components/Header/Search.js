import React, { useState } from "react";

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ["Shots", "Designers", "Projects"]; // Dropdown options

  return (
    <div className="relative flex items-center w-full max-w-xl ml-10 sm:flex">
      {/* Input Field */}
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full px-4 py-5 text-sm bg-gray-200  rounded-full focus:outline-none focus:ring focus:ring-pink-300"
      />

      {/* Dropdown */}
      <div
        className="absolute right-16 flex items-center px-4 py-2 text-sm font-semibold cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Shots
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-16 top-12 bg-white border rounded-lg shadow-lg w-36">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                console.log(`Selected: ${option}`);
                setIsDropdownOpen(false); // Close dropdown on selection
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {/* Search Icon */}
      <div className="absolute right-1.5 bg-pink-500 text-white p-3 rounded-full cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
