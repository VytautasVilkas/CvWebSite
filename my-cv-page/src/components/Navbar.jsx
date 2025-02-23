import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="w-full p-4 flex items-center justify-between bg-white shadow-md px-6 relative z-10">
        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex gap-6 font-oldStandard">
          <a href="#home" className="underline-hover transform transition-all duration-300 ease-out hover:scale-110">Home</a>
          <a href="#experience" className="underline-hover transform transition-all duration-300 ease-out hover:scale-110">Experience</a>
          <a href="#education" className="underline-hover transform transition-all duration-300 ease-out hover:scale-110">Education</a>
          <a href="#contact" className="underline-hover transform transition-all duration-300 ease-out hover:scale-110">Contact</a>
          <a href="#recent-works" className="underline-hover transform transition-all duration-300 ease-out hover:scale-110">Works</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            <div className="relative w-6 h-6">
              <span className={`absolute block w-6 h-[2px] bg-gray-800 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-2.5' : 'top-0'}`}></span>
              <span className={`absolute block w-6 h-[2px] bg-gray-800 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-2.5'}`}></span>
              <span className={`absolute block w-6 h-[2px] bg-gray-800 transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-2.5' : 'top-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md sm:hidden">
            <nav className="flex flex-col items-center py-4 space-y-2">
              <a href="#home" className="py-2 underline-hover transform transition-all duration-300 ease-out hover:scale-110" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#experience" className="py-2 underline-hover transform transition-all duration-300 ease-out hover:scale-110" onClick={() => setIsMenuOpen(false)}>Experience</a>
              <a href="#education" className="py-2 underline-hover transform transition-all duration-300 ease-out hover:scale-110" onClick={() => setIsMenuOpen(false)}>Education</a>
              <a href="#recent-works" className="py-2 underline-hover transform transition-all duration-300 ease-out hover:scale-110" onClick={() => setIsMenuOpen(false)}>Works</a>
              <a href="#contact" className="py-2 underline-hover transform transition-all duration-300 ease-out hover:scale-110" onClick={() => setIsMenuOpen(false)}>Contacts</a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Navbar;

