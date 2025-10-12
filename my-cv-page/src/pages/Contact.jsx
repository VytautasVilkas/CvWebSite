import React from "react";

function Contact() {
  const NAV_OFFSET = 80; 

  const contactInfo = {
    email: "Vytautas@Vilkas.lt",
    phone: "+370 60600856",
  };

  function goHome(e) {
    e.preventDefault();
    const el = document.querySelector("#home");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <section
      id="contact"
      className="min-h-screen scroll-mt-[80px] bg-black text-green-400 font-mono flex items-center justify-center px-6 py-12"
    >
      <div className="w-full max-w-3xl">
        <div className="rounded-xl border border-green-500/30 bg-black shadow-[0_0_30px_rgba(34,197,94,0.15)] overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b border-green-500/20 bg-gradient-to-r from-black to-green-900/10">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-green-500/70 rounded-sm shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
              <span className="text-green-200 text-xs tracking-wide select-none">
                contact.exe
              </span>
            </div>
            <button
              type="button"
              onClick={goHome}
              className="w-8 h-6 grid place-items-center rounded text-green-100 bg-green-500/20 hover:bg-red-500/40 hover:text-white transition-colors"
              aria-label="Close"
              title="Close (go home)"
            >
              ✕
            </button>
          </div>
          <div className="p-8 text-center">
            <h3 className="text-3xl font-bold text-green-200 tracking-wide mb-6">
              Contact
            </h3>
            <p className="text-green-200/85 mb-6">
              Feel free to reach out for more information.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-green-500/20 bg-black/60">
                <h4 className="text-sm font-semibold text-green-300/90 mb-1">Email</h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-green-100 underline-offset-2 hover:underline break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="p-4 rounded-lg border border-green-500/20 bg-black/60">
                <h4 className="text-sm font-semibold text-green-300/90 mb-1">Phone</h4>
                <a href="tel:+37060600856" className="text-green-100 underline-offset-2 hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-green-500/20 mt-6" />
      </div>
    </section>
  );
}
export default Contact;
