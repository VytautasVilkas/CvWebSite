import React from "react";

function Education() {
  const educationData = [
    {
      school: "Kaunas University of Technology",
      degree: "Master's degree, Music Theory and Composition",
      period: "Sep 2020 – Jan 2022",
      skills: ["Steinberg Nuendo", "Ableton Live", "Cubase", "Microsoft Office"],
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
        "Spring MVC",
        "Databases",
        "Spring Framework",
      ],
    },
    {
      school: "Kaunas University of Technology",
      degree: "Bachelor's degree, Music Technology",
      period: "Sep 2016 – Jun 2020",
      skills: ["Steinberg Nuendo", "Ableton Live", "Cubase", "Microsoft Office"],
    },
  ];

  return (
    <section id="education" className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Education</h1>
        <ul className="space-y-6">
          {educationData.map((edu, index) => (
            <li key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">{edu.school}</h2>
              <p className="text-gray-600">{edu.degree}</p>
              <p className="text-sm text-gray-500">{edu.period}</p>
              <div className="mt-4">
                <h3 className="text-md font-medium text-gray-700">Skills:</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-sm bg-gray-200 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-300 mt-5"></div>
      </div>
    </section>
  );
}

export default Education;
