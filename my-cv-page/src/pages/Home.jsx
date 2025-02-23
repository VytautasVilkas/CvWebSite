import React from "react";
import Typewriter from "typewriter-effect";
import img from '../assets/IMG_7449.png';  // Import the image file

function Home() {
  return (
    <section id="home" className="bg-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto p-6">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center mb-8 md:mb-0">
          <img 
            src={img} 
            alt="Profile" 
            className="rounded-xl shadow-xl w-full max-w-[350px] object-cover"
          />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">Vytautas Vilkas</h2>
        </div>


        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pl-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            Hi, I'm a Software Developer
          </h1>

          <div className="text-xl text-gray-700 mb-6">
            <Typewriter
              options={{
                strings: [
                  "Building modern web and desktop applications.",
                  "Experienced in .NET, React, Java, and SQL.",
                  "Turning complex problems into elegant solutions."
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            With a strong technical background in .NET, React, Java, and Microsoft SQL Server, I specialize in developing full-stack applications tailored to business needs. Previously, I worked in the music industry, focusing on sound design, recording, mixing, and mastering. This creative foundation now fuels my problem-solving approach in software development, where I’ve been crafting innovative solutions for the past two years.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;



