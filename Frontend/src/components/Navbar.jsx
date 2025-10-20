import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, LogIn, UserPlus, Home, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <Brain className="text-white w-8 h-8 drop-shadow-lg" />
          <h1 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
            QuizVerse
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 transition-colors duration-300 ${
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "text-white hover:text-yellow-300"
              }`
            }
          >
            <Home size={20} /> Home
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-1 transition-colors duration-300 ${
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "text-white hover:text-yellow-300"
              }`
            }
          >
            <LogIn size={20} /> Login
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `flex items-center gap-1 transition-colors duration-300 ${
                isActive
                  ? "text-yellow-300 font-semibold"
                  : "text-white hover:text-yellow-300"
              }`
            }
          >
            <UserPlus size={20} /> Sign Up
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-inner text-white py-4 space-y-3"
          >
            <div className="flex flex-col items-center gap-3">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <Home size={20} /> Home
              </NavLink>

              <NavLink
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <LogIn size={20} /> Login
              </NavLink>

              <NavLink
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 hover:text-yellow-300 transition"
              >
                <UserPlus size={20} /> Sign Up
              </NavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
