import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

function RecentWorks() {
  const works = [
    {
      title: "MindaugasAntique",
      description:
        "An elegant web application designed for showcasing and selling antique items. Built with React and ASP.NET Core, featuring a user-friendly interface.",
      techStack: ["React.js", "ASP.NET Core", "Microsoft SQL Server", "Docker"],
      link: "https://mindaugasantique.cloud",
    },
  ];

  const githubLink = "https://github.com/VytautasVilkas"; 

  return (
    <section id="recent-works" className="flex items-center justify-center p-6 ">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">My Recent Works</h1>
        <ul className="space-y-6">
          {works.map((work, index) => (
            <li key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">{work.title}</h2>
              <p className="mt-2 text-gray-700">{work.description}</p>

              <div className="mt-4">
                <h3 className="text-md font-medium text-gray-700">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {work.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-sm bg-gray-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {work.link && (
                <div className="mt-4">
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* GitHub Link Section */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Find More Projects</h2>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 hover:underline"
          >
            <FaGithub className="mr-2 text-2xl" />
            Visit my GitHub
          </a>
        </div>

        <div className="border-t border-gray-300 mt-5"></div>
      </div>
    </section>
  );
}

export default RecentWorks;
