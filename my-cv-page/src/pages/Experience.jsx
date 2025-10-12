import React from "react";

function Experience() {
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

  return (
    <section
      id="experience"
      className="min-h-screen scroll-mt-[80px] bg-black text-green-400 font-mono px-6 py-12"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="mb-8">
          <div className="text-sm text-green-300/80 select-none">
            C:\&gt; <span className="text-green-100">experience</span>
            <span className="blink-cursor">_</span>
          </div>
          <h1 className="text-3xl font-bold text-green-200 mt-2 tracking-wide">
            My Experience
          </h1>
        </div>

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

        <div className="border-t border-green-500/20 mt-6" />
      </div>

      <style>{`
        @keyframes blinkCursor { 0%,49% {opacity:1;} 50%,100% {opacity:0;} }
        .blink-cursor { animation: blinkCursor 1s step-start infinite; }
      `}</style>
    </section>
  );
}
export default Experience;

  