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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-green-500/30 shadow-[0_0_25px_rgba(34,197,94,0.15)]">
      <style>
        {`
          @keyframes blinkCursor { 0%,49% {opacity:1;} 50%,100% {opacity:0;} }
          .blink-cursor { animation: blinkCursor 1s step-start infinite; }
          .nav-underline::after {
            content: "";
            position: absolute;
            left: 0; bottom: -2px;
            width: 0; height: 1px;
            background: rgb(52 211 153); /* green-400 */
            transition: width .3s ease;
          }
          .nav-underline:hover::after,
          .nav-underline:focus-visible::after {
            width: 100%;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3 text-green-400 font-mono">
        <div className="text-sm text-green-300/80 select-none">
          C:\\Users\\Vytautas\\navigation_bar&gt;
          <span className="text-green-100 blink-cursor">_</span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm tracking-wide">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative nav-underline hover:text-green-300 focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          className="sm:hidden text-green-400 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block w-6 h-[2px] bg-green-400 transform transition-all duration-300 ${isMenuOpen ? "rotate-45 top-2.5" : "top-0"}`} />
            <span className={`absolute block w-6 h-[2px] bg-green-400 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : "top-2.5"}`} />
            <span className={`absolute block w-6 h-[2px] bg-green-400 transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-2.5" : "top-5"}`} />
          </div>
        </button>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden bg-black/90 border-t border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
          <nav className="flex flex-col items-center py-4 space-y-2 text-green-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="relative nav-underline px-2 py-1 hover:text-green-100"
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
