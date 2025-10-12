import React from "react";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-green-400 font-mono"
    >
      <div className="w-full max-w-3xl mx-auto p-6">
        <div className="rounded-xl border border-green-500/30 bg-black shadow-[0_0_30px_rgba(34,197,94,0.15)] overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-green-500/20 bg-black">
            <span className="text-xs tracking-widest text-green-300/80">
              C:\\Windows\\System32\\cmd.exe
            </span>
            <span className="text-xs text-green-500/70">[Admin]</span>
          </div>

          <div className="p-4 leading-relaxed">
            <pre className="whitespace-pre-wrap text-sm md:text-base">
              <span className="text-green-300/80">Microsoft Windows [Version 10.0.19045]</span>
              {"\n"}
              <span className="text-green-300/60">(c) Vytautas Vilkas. All rights reserved.</span>
              {"\n\n"}
              <span className="text-green-300/90">C:\Users\Vytautas&gt; echo Welcome</span>
              {"\n"}
              Welcome to my portfolio terminal. Type <span className="text-green-200">help</span> to explore.
              {"\n\n"}
            </pre>

            <div className="text-sm md:text-base">
              <Typewriter
                options={{
                  loop: true,
                  delay: 35,
                  deleteSpeed: 12,
                  cursor: "_",
                }}
                onInit={(tw) => {
                  tw.typeString(
                    '<span class="text-green-300/90">C:\\Users\\Vytautas&gt; whoami</span>'
                  )
                    .pauseFor(500)
                    .typeString("<br/>vytautas.vilkas")
                    .pauseFor(900)
                    .typeString("<br/><br/><span class='text-green-300/90'>C:\\Users\\Vytautas&gt; skills</span>")
                    .pauseFor(400)
                    .typeString(
                      "<br/>.NET · C# · ASP.NET Core · React · SQL · Docker"
                    )
                    .pauseFor(1100)
                    .typeString("<br/><br/><span class='text-green-300/90'>C:\\Users\\Vytautas&gt; about</span>")
                    .pauseFor(400)
                    .typeString(
                      "<br/>Building reliable web/desktop apps and turning complex problems into elegant solutions."
                    )
                    .pauseFor(1200)
                    .typeString("<br/><br/><span class='text-green-300/90'>C:\\Users\\Vytautas&gt; projects</span>")
                    .pauseFor(400)
                    .typeString(
                      "<br/>Open: <a href='https://github.com/VytautasVilkas' target='_blank' rel='noreferrer' class='underline'>github.com/VytautasVilkas</a>"
                    )
                    .pauseFor(2000)
                    .deleteAll(10)
                    .start();
                }}
              />
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-green-500/60 select-none">
          Tip: press ↑ to cycle commands (just kidding… but you can click the GitHub link).
        </p>
      </div>
    </section>
  );
}

export default Home;
