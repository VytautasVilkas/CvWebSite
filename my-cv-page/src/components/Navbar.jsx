import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "#home", label: "home" },
    { href: "#experience", label: "experience" },
    { href: "#education", label: "education" },
    { href: "#recent-works", label: "works" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <header className="w-full bg-black text-green-400 font-mono border-b border-green-500/30 shadow-[0_0_25px_rgba(34,197,94,0.15)] relative z-20">
      <style>
        {`
          @keyframes blinkCursor {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .blink-cursor {
            animation: blinkCursor 1s step-start infinite;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="text-sm text-green-300/80 select-none">
          C:\\Portfolio\\Vytautas&gt;
          <span className="text-green-100 blink-cursor">_</span>
        </div>

        <nav className="hidden sm:flex gap-6 text-sm tracking-wide">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-green-300 transition-colors duration-200"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-green-400 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-green-400 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute block w-6 h-[2px] bg-green-400 transform transition-all duration-300 ${
                isMenuOpen ? "rotate-45 top-2.5" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-[2px] bg-green-400 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "top-2.5"
              }`}
            ></span>
            <span
              className={`absolute block w-6 h-[2px] bg-green-400 transform transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 top-2.5" : "top-5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-black border-t border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
          <nav className="flex flex-col items-center py-4 space-y-2 text-green-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-green-100 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
