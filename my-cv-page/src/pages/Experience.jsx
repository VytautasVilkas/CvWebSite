// src/pages/Experience.jsx
function Experience() {
  return (
    
      <section id="experience">
        
          <div>
              <h1 className="text-3xl font-bold mb-4">My Experience</h1>
              <ul className="space-y-4">
                  {/* .NET Developer Experience */}
                  <li className="p-6 bg-white rounded-lg shadow-md">
                      <h2 className="text-xl font-semibold text-gray-800">.NET Developer</h2>
                      <p className="text-gray-600">Vilko IT · Full-time</p>
                      <p className="text-sm text-gray-500">Jun 2023 – Present · 1 yr 9 mos · Vilnius, Lithuania · Hybrid</p>
                      <p className="mt-2 text-gray-700">
                          As a software developer, I focus on building desktop and web applications tailored to specific business needs. My role involves developing and implementing complex business logic using .NET, ASP.NET, React, and Microsoft SQL Server.
                      </p>
                      <div className="mt-4">
                          <h3 className="text-md font-medium text-gray-800">Skills:</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                              {[
                                  ".NET Core", ".NET Framework", "C#", "Software Design Patterns", "React.js",
                                  "ASP.NET Web API", "ASP.NET Core", "ASP.NET", "Visual Basic", "ADO.NET",
                                  "Microsoft SQL Server", "Visual Basic .NET (VB.NET)"
                              ].map((skill, index) => (
                                  <span key={index} className="px-2 py-1 text-sm bg-gray-200 rounded-full">
                                      {skill}
                                  </span>
                              ))}
                          </div>
                      </div>
                  </li>
                                    {/* Freelance Software Developer Experience */}
                    <li className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Freelance Software Developer</h2>
                        <p className="text-gray-600">Freelance · Remote</p>
                        <p className="text-sm text-gray-500">Dec 2024 – Present · 3 mos · Vilnius, Lithuania · Remote</p>
                        <p className="mt-2 text-gray-700">
                            As a freelance developer, I build and maintain full-stack web applications using .NET, React, Docker, and Microsoft SQL Server. My work includes developing a secure ASP.NET backend for web services, a React-based web app, and .NET Framework applications tailored to client needs, along with running and managing servers using Docker for reliable performance and deployment.
                        </p>
                        <div className="mt-4">
                            <h3 className="text-md font-medium text-gray-800">Skills:</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {[
                                    ".NET Core", "C#", "React.js", "ASP.NET Web API", "ASP.NET Core",
                                    "ASP.NET", "Microsoft SQL Server", "Docker", "GitHub"
                                ].map((skill, index) => (
                                    <span key={index} className="px-2 py-1 text-sm bg-gray-200 rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </li>
                    {/* Audio Engineer Experience */}
                <li className="p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">Audio Engineer</h2>
                    <p className="text-gray-600">Midiaudio · Full-time</p>
                    <p className="text-sm text-gray-500">Jun 2019 – Jun 2021 · 2 yrs 1 mo · Vilnius, Lithuania</p>
                    <p className="mt-2 text-gray-700">
                    As a salesman at Midiaudio, I was responsible for selling studio equipment, connecting and setting up systems, and ensuring everything operated smoothly. I also provided support to clients, ensuring their audio setups met professional standards.
                    </p>
                    <div className="mt-4">
                        <h3 className="text-md font-medium text-gray-800">Skills:</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {[
                                "Dante Networking", "Computer Hardware", "Steinberg Nuendo", "Ableton"
                            ].map((skill, index) => (
                                <span key={index} className="px-2 py-1 text-sm bg-gray-200 rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </li>

  
              </ul>
          </div>
          <div className="border-t border-gray-300 mt-5"></div>
      </section>
  );
}

export default Experience;

  