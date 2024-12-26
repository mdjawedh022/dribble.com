import React from "react";

const Search = () => {
  return (
    <div className="relative flex items-center w-full max-w-xl ml-10 sm:flex">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full px-4 py-5 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring focus:ring-pink-200"
      />
      <div className="absolute right-1.5 bg-pink-500 text-white p-3 rounded-full cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-4 h-4"
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
