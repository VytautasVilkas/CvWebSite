import React from "react";
import ascii2 from "../assets/ascii.txt?raw";

function Contact() {
  const contactInfo = {
    email: "Vytautas@Vilkas.lt",
    phone: "+370 60600856",
  };

  return (
    <section
      id="contact"
      className="min-h-screen scroll-mt-[80px] bg-black text-green-400 font-mono flex items-center justify-center px-6 py-12"
    >
      <div className="w-full max-w-xl">
        <div className="mb-8 text-center">
          <div className="text-sm text-green-300/80 select-none">
            C://contact <span className="blink-cursor">_</span>
          </div>
          <h3 className="text-3xl font-bold text-green-200 mt-2 tracking-wide">Contact</h3>
        </div>

        <div className="rounded-xl border border-green-500/30 bg-black/60 shadow-[0_0_24px_rgba(34,197,94,0.08)] p-8 text-center">
          {/* ASCII panel */}
          <div className="mb-6 max-h-[60vh] overflow-auto rounded-lg border border-green-500/20 bg-black/70 p-4">
            <pre
              className="whitespace-pre text-green-400 tracking-tight
                         text-[4px] leading-[4px]
                         sm:text-[5px] sm:leading-[5px]
                         md:text-[6px] md:leading-[6px]
                         lg:text-[7px] lg:leading-[7px]"
              style={{
                fontVariantLigatures: "none",
                letterSpacing: "-0.02em",
              }}
            >
              {ascii2}
            </pre>
          </div>

          <p className="text-green-200/85 mb-6">
            Feel free to reach out for more information.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-green-500/20">
              <h4 className="text-sm font-semibold text-green-300/90 mb-1">Email</h4>
              <a href={`mailto:${contactInfo.email}`} className="text-green-100 hover:underline break-all">
                {contactInfo.email}
              </a>
            </div>
            <div className="p-4 rounded-lg border border-green-500/20">
              <h4 className="text-sm font-semibold text-green-300/90 mb-1">Phone</h4>
              <a href="tel:+37060600856" className="text-green-100 hover:underline">
                {contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blinkCursor { 0%,49% {opacity:1;} 50%,100% {opacity:0;} }
        .blink-cursor { animation: blinkCursor 1s step-start infinite; }
      `}</style>
    </section>
  );
}
export default Contact;
