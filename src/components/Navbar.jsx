import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingBag, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="w-full">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Left Logo Icon */}
        <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold">LOGO</h1>
        </div>

        {/* Center LOGO Text */}
        <div className="hidden md:block">
          <h1 className="text-xl font-bold">LOGO</h1>
        </div>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center space-x-4 text-xl">
          <FaSearch />
          <FaHeart />
          <FaShoppingBag />
          <FaUser />
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
          <div className="flex items-center space-x-1 text-sm">
            <span>ENG</span>
            <IoChevronDown className="text-base" />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Center LOGO for Mobile */}
      <div className="md:hidden flex justify-center">
        <h1 className="text-xl font-bold">LOGO</h1>
      </div>

      {/* Bottom Navbar */}
      <div className="hidden md:flex justify-center space-x-8 text-sm font-semibold py-2 uppercase border-b">
        <a href="#">Shop</a>
        <a href="#">Skills</a>
        <a href="#">Stories</a>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 text-sm font-semibold uppercase">
          <a href="#">Shop</a>
          <a href="#">Skills</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
          <a href="#">Contact Us</a>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 pt-4 text-xl">
            <FaSearch />
            <FaHeart />
            <FaShoppingBag />
            <FaUser />
            <div className="flex items-center space-x-1 text-sm">
              <span>ENG</span>
              <IoChevronDown className="text-base" />
            </div>
          </div>

          {/* Logout for Mobile */}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
