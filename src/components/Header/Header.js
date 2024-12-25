import React, { useState } from "react";
import Search from "./Search";
import NavigationLinks from "./NavigationLinks";
import AuthButtons from "./AuthButtons";
import Hamburger from "./Humburger";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-50">
      {/* Grouped Dribbble text and Search */}
      <div className="flex items-center space-x-4 flex-grow">
        <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="text-2xl font-bold text-black logo">Dribbble</div>

        {/* Adjusted to position Search closer to "Dribbble" text */}
        <div className="hidden sm:flex items-center ml-6 flex-grow max-w-md">
          <Search />
        </div>
        <div className="flex lg:px-[50px]">
          <NavigationLinks isMenuOpen={isMenuOpen} />
        </div>
      </div>

      <AuthButtons />
    </header>
  );
};

export default Header;