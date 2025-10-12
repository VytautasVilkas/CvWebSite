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
        {/* Terminal window */}
        <div className="rounded-xl border border-green-500/30 bg-black shadow-[0_0_30px_rgba(34,197,94,0.15)] overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-green-500/20 bg-black text-xs tracking-widest text-green-300/80">
            <span>C:\Windows\System32\cmd.exe</span>
            <span>[Admin]</span>
          </div>

          {/* Body */}
          <div className="p-8">
            {/* Prompt line (left-aligned) */}
            <div className="text-sm text-green-300/80 select-none mb-4">
              C://contact <span className="blink-cursor">_</span>
            </div>

            {/* Terminal-style lines */}
            <div className="space-y-2 text-sm md:text-base">
              <div>
                <span className="text-green-300/90">C://contact&gt;</span>{" "}
                echo "Feel free to reach out for more information."
              </div>
              <div className="text-green-200/85">
                "Feel free to reach out for more information."
              </div>

              <div className="mt-4">
                <span className="text-green-300/90">C://contact&gt;</span>{" "}
                echo Email:
                {" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-green-100 underline-offset-2 hover:underline break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div>
                <span className="text-green-300/90">C://contact&gt;</span>{" "}
                echo Phone:
                {" "}
                <a
                  href="tel:+37060600856"
                  className="text-green-100 underline-offset-2 hover:underline"
                >
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
