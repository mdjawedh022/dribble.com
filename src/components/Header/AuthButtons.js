import React from "react";
import { Link } from "react-router-dom";

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link
        to="#signup"
        className="hidden lg:block text-gray-800 hover:text-pink-500 font-semibold"
      >
        Sign up
      </Link>
      <button className="bg-black text-white px-4 py-2 rounded-full">
        Log in
      </button>
    </div>
  );
};

export default AuthButtons;
