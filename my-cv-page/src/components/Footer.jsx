import React from 'react';

function Footer() {
  return (
    <footer
      className="relative w-full text-[#4a3f35] font-oldStandard py-4 px-6 mt-auto shadow-inner"
      style={{ minHeight: '100px' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start pb-2">
        <div className="text-sm text-left">
          <p className="font-bold">Contacts:</p>
            <>
              <p>Phone: +37060600856</p>
              <p>Email: Vytautas@Vilkas.lt</p>
            </>
        </div>
      </div>
      <div className="border-t border-[#e0ded8] mt-2"></div>
      <div className="text-sm text-center pt-2">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
