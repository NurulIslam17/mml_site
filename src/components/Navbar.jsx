import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#e55039] p-4">
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-white text-3xl font-bold font-[RubikMonoOne]">.FD</div>
        
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-100 font-[RubikMonoOne] font-semibold hover:text-white">Home</a>
          <a href="/contact" className="text-gray-100 font-[RubikMonoOne] font-semibold hover:text-white">Contact</a>
          <a href="/contact" className="text-gray-100 font-[RubikMonoOne] font-semibold hover:text-white">Register</a>
        </div>

        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="/" className="block text-gray-300 hover:bg-gray-700 px-4 py-2">Home</a>
        <a href="/about" className="block text-gray-300 hover:bg-gray-700 px-4 py-2">About</a>
        <a href="/services" className="block text-gray-300 hover:bg-gray-700 px-4 py-2">Services</a>
        <a href="/contact" className="block text-gray-300 hover:bg-gray-700 px-4 py-2">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
