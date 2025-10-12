import React from "react";
import Typewriter from "typewriter-effect";
import img from "../assets/IMG_7449.png"; 

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-emerald-100 font-mono"
    >
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto p-6">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mb-8 md:mb-0">
          <div className="relative">
            <img
              src={img}
              alt="Profile"
              className="rounded-xl border border-emerald-400/30 shadow-[0_0_25px_rgba(16,185,129,0.3)] w-full max-w-[350px] object-cover"
            />
            <div className="absolute inset-0 rounded-xl bg-emerald-500/10 blur-sm"></div>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-emerald-200 tracking-wide">
            Vytautas Vilkas
          </h2>
          <p className="text-emerald-400/80 text-sm">Software Developer</p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-10">
          <h1 className="text-4xl font-extrabold text-emerald-100 mb-4 tracking-tight">
            Hi, I&apos;m a Software Developer
          </h1>

          <div className="text-lg text-emerald-300/90 mb-6">
            <Typewriter
              options={{
                strings: [
                  "Building modern web and desktop applications.",
                  "Experienced in .NET, React, Java, and SQL.",
                  "Turning complex problems into elegant solutions.",
                ],
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 25,
              }}
            />
          </div>

          <p className="text-emerald-200/80 leading-relaxed">
            With a strong technical background in .NET, React, Java, and Microsoft SQL Server,
            I specialize in developing full-stack applications tailored to business needs.
            Previously, I worked in the music industry, focusing on sound design, recording,
            mixing, and mastering. This creative foundation now fuels my problem-solving
            approach in software development, where I&apos;ve been crafting innovative solutions
            for the past two years.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
