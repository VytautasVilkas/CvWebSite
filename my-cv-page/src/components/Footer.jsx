import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-green-400 font-mono border-t border-green-500/20 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-green-500/70 text-center">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
}

export default Footer;

