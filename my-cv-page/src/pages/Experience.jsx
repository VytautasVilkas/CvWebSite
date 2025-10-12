function Experience() {
  const NAV_OFFSET = 80; 

  const jobs = [
    {
      title: ".NET Developer",
      company: "Kickertech · Full-time",
      period: "2025 – Present · Vilnius, Lithuania · Hybrid",
      desc:
        "As a .NET developer, I specialise in building reliable APIs and background services that keep sportsbook systems fast and stable.",
      skills: [".NET Core", "Dapper", "MySQL", "GitLab"],
    },
    {
      title: ".NET Developer",
      company: "Vilko IT · Full-time",
      period: "Jun 2023 – Present · Vilnius, Lithuania · Hybrid",
      desc:
        "I build internal tools for warehouse and operations: stock management, inter-warehouse transfers, item movement tracking, and work orders for tea packaging and coffee production. I also develop accounting support tools—vehicle/route tracking, fuel-usage logging, and fuel-station receipt checks—to help accountants reconcile costs and monitor fleet usage.",
      skills: [
        ".NET Core",
        "ASP.NET Core",
        "ADO.NET",
        "Microsoft SQL Server",
        "Visual Basic .NET (VB.NET)",
      ],
    },
    {
      title: "Freelance Software Developer",
      company: "Freelance · Remote",
      period: "Dec 2024 – Present · Vilnius, Lithuania · Remote",
      desc:
        "I build and maintain full-stack applications using .NET, React, Docker, and Microsoft SQL Server: secure ASP.NET backends, React web apps, and Windows desktop applications tailored to client needs, plus containerised deployments and server management with Docker.",
      skills: [".NET Core", "React.js", "Microsoft SQL Server", "Docker", "GitHub"],
    },
    {
      title: "Audio Engineer",
      company: "Midiaudio · Full-time",
      period: "Jun 2019 – Jun 2021 · Vilnius, Lithuania",
      desc:
        "Sold and set up studio equipment, configured systems, and supported clients to ensure professional audio standards.",
      skills: ["Dante Networking", "Steinberg Nuendo", "Ableton"],
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
      id="experience"
      className="min-h-screen scroll-mt-[80px] bg-black text-green-400 font-mono px-6 py-12"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="rounded-xl border border-green-500/30 bg-black shadow-[0_0_30px_rgba(34,197,94,0.15)] overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 border-b border-green-500/20 bg-gradient-to-r from-black to-green-900/10">
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-green-500/70 rounded-sm shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
              <span className="text-green-200 text-xs tracking-wide select-none">
                experience.exe
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
              {jobs.map((job, idx) => (
                <li
                  key={idx}
                  className="p-6 rounded-xl border border-green-500/30 bg-black/60 shadow-[0_0_24px_rgba(34,197,94,0.08)]"
                >
                  <h2 className="text-xl font-semibold text-green-100">{job.title}</h2>
                  <p className="text-green-300/90">{job.company}</p>
                  <p className="text-xs text-green-400/70 mt-1">{job.period}</p>

                  <p className="mt-3 text-green-200/85">{job.desc}</p>

                  <div className="mt-4">
                    <h3 className="text-sm font-semibold text-green-300/90 mb-2">skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-1 text-xs rounded-full border border-green-400/30 text-green-200/90"
                        >
                          {s}
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

export default Experience;
