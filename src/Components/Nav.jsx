import React, { useState } from 'react';
import hny from "../assets/hny.png";
import logo from "../assets/logo.svg";
import { Link } from 'react-scroll';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="z-20 p-4 lg:p-0 top-0 left-0 right-0 flex items-center justify-between px-5 lg:px-24 dark:bg-gray-900 relative">
      <div className="lg:pl-5 lg:pt-5">
        <img src={logo} alt="Logo" className="w-16 lg:w-32" />
      </div>

      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden text-black dark:text-white focus:outline-none z-30 relative"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
             className='text-white'
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
              className='text-white'
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out lg:hidden z-20`}
      >
        <div className="flex flex-col items-center font-light justify-center h-full space-y-6 text-white">
          {['Home', 'How It Works', 'Roadmap', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item}
              smooth={true}
              duration={500}
              className="text-lg font-medium cursor-pointer hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item}
            </Link>
          ))}
          <button
            className="px-6 py-2 border-2 border-white btn rounded-full font-bold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 text-black dark:text-white text-sm lg:text-base font-medium">
        {['Home', 'How It Works', 'Roadmap', 'Contact'].map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            className="relative cursor-pointer py-1 text-[20px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-width after:duration-300 hover:after:w-full"
          >
            {item}
          </Link>
        ))}
      </div>

      <button className="hidden lg:block px-4 lg:px-10 py-2 btn lg:text-[20px] border-2 border-white rounded-full font-bold text-white">
        Connect Wallet
      </button>

      <img
        src={hny}
        alt="Background"
        className="absolute h-[130px] lg:h-auto lg:w-full md:block top-0 lg:top-[-50px] left-0 z-[-1] right-0"
      />
    </nav>
  );
}

export default Nav;
