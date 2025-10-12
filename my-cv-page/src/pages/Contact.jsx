import React from "react";

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
      <div className="w-full max-w-3xl">
        <div className="rounded-xl border border-green-500/30 bg-black shadow-[0_0_30px_rgba(34,197,94,0.15)] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-green-500/20 bg-black text-xs tracking-widest text-green-300/80">
            <span>C:\Windows\System32\cmd.exe</span>
            <span>[Admin]</span>
          </div>
          <div className="p-8 text-center">
            <div className="mb-6">
              <div className="text-sm text-green-300/80 select-none">
                C://contact <span className="blink-cursor">_</span>
              </div>
              <h3 className="text-3xl font-bold text-green-200 mt-2 tracking-wide">Contact</h3>
            </div>

            <p className="text-green-200/85 mb-6">
              Feel free to reach out for more information.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-green-500/20">
                <h4 className="text-sm font-semibold text-green-300/90 mb-1">Email</h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-green-100 hover:underline break-all"
                >
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

        <div className="border-t border-green-500/20 mt-6" />
      </div>

      <style>{`
        @keyframes blinkCursor { 0%,49% {opacity:1;} 50%,100% {opacity:0;} }
        .blink-cursor { animation: blinkCursor 1s step-start infinite; }
      `}</style>
    </section>
  );
}
export default Contact;
