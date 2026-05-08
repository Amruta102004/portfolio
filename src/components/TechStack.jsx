const techs = ["Java", "JavaScript", "Python", "React", "Node", "MongoDB", "MySQL"];

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

export default function TechStack() {

  const techs = [
    { name: "JAVA", icon: <FaJava /> },
    { name: "JAVASCRIPT", icon: <SiJavascript /> },
    { name: "PYTHON", icon: <FaPython /> },
    { name: "REACT.JS", icon: <FaReact /> },
    { name: "NODE.JS", icon: <FaNodeJs /> },
    { name: "MYSQL", icon: <SiMysql /> },
    { name: "MONGODB", icon: <SiMongodb /> },
    { name: "RESTful API", icon: <SiExpress /> },
    { name: "TAILWINDCSS", icon: <SiTailwindcss /> },
    { name: "BOOTSTRAP", icon: <FaBootstrap /> },
    { name: "GIT", icon: <FaGitAlt /> },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">

      <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
        Tech Stack
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">

        {techs.map((tech, index) => (
          <div
            key={index}
            className="bg-[#1e293b] text-white px-8 py-4 rounded-xl shadow-md border border-gray-200 flex items-center gap-3 hover:scale-105 transition duration-300 min-w-[180px] justify-center"
          >

            <span className="text-2xl">
              {tech.icon}
            </span>

            <span className="tracking-[3px] font-semibold text-sm">
              {tech.name}
            </span>

          </div>
        ))}

      </div>
    </section>
  );
}