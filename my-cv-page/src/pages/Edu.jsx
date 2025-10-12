function Education() {
  const NAV_OFFSET = 80; 

  const educationData = [
    {
      school: "Kaunas University of Technology",
      degree: "Master's degree, Music Theory and Composition",
      period: "Sep 2020 – Jan 2022",
      skills: ["Steinberg Nuendo", "Ableton Live", "Cubase", "Cycling '74', 'Max"],
    },
    {
      school: "CodeAcademy",
      degree: "Software Development Program",
      period: "Feb 2023 – May 2023",
      skills: [
        "Object-Oriented Programming (OOP)",
        "SQL",
        "Java",
        "GitHub",
        "IntelliJ IDEA",
        "Databases",
        "Spring Framework",
      ],
    },
    {
      school: "Kaunas University of Technology",
      degree: "Bachelor's degree, Music Technology",
      period: "Sep 2016 – Jun 2020",
      skills: ["Steinberg Nuendo", "Ableton Live", "Cubase", "Cycling '74", "Max"],
    },
  ];

  function goHome(e) {
    e.preventDefault();
    const el = document.querySelector("#home");
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <section
      id="education"
      className="min-h-screen scroll-mt-[80px] bg-black text-green-400 font-mono flex items-center justify-center px-6 py-12"
    >
      <div className="w-full max-w-4xl">
        <div className="rounded-xl border border-green-500/30 bg-black shadow-[0_0_30px_rgba(34,197,94,0.15)] overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b border-green-500/20 bg-gradient-to-r from-black to-green-900/10">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-green-500/70 rounded-sm shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
              <span className="text-green-200 text-xs tracking-wide select-none">
                education.exe
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

          <div className="p-6">
            <ul className="space-y-6">
              {educationData.map((edu, index) => (
                <li
                  key={index}
                  className="p-6 rounded-xl border border-green-500/30 bg-black/60 shadow-[0_0_24px_rgba(34,197,94,0.08)]"
                >
                  <h2 className="text-xl font-semibold text-green-100">{edu.school}</h2>
                  <p className="text-green-300/90">{edu.degree}</p>
                  <p className="text-xs text-green-400/70 mt-1">{edu.period}</p>

                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-green-300/90 mb-2">skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full border border-green-400/30 text-green-200/90"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/20 mt-6" />
      </div>
    </section>
  );
}

export default Education;
