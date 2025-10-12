import React from "react";
import { FaGithub } from "react-icons/fa"; 

function RecentWorks() {
  const githubLink = "https://github.com/VytautasVilkas";

  return (
    <section
      id="recent-works"
      className="flex items-center justify-center p-6"
    >
      <div className="w-full max-w-4xl text-center">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:underline text-lg"
        >
          <FaGithub className="mr-2 text-2xl" />
          Visit my GitHub
        </a>
      </div>
    </section>
  );
}

export default RecentWorks;
