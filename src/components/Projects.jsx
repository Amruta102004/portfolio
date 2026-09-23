import {
  FaGithub,
  FaExternalLinkAlt,
  FaJava,
  FaCode,
  FaReact,
  FaRobot,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiGooglegemini,
  SiAndroidstudio,
  SiTailwindcss
} from "react-icons/si";

export default function Projects() {
  return (
    <section className="bg-[#f5f7fb] py-20 px-6">

      {/* Heading */}
      <h2 className="text-5xl font-bold text-center text-[#1f2937] mb-20">
        Projects
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">




        {/* InterviewAI */}
        <div className="bg-white rounded-[28px] p-7 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300">

          {/* Title */}
          <h3 className="text-3xl font-bold text-[#1f2937] mb-4">
            InterviewAI
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-[15px] leading-8 mb-7">
            AI-powered interview prep tool that generates personalized technical & behavioral questions, skill-gap analysis, and a day-wise prep plan from your resume and job description — built with the MERN stack and Google Gemini.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-10">

            <span className="bg-[#1e293b] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
              <FaReact className="text-[14px]" />
              React.js
            </span>

            <span className="bg-[#1e293b] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
              <FaNodeJs className="text-[14px]" />
              Node.js
            </span>

            <span className="bg-[#1e293b] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
              <SiExpress className="text-[14px]" />
              Express.js
            </span>

            <span className="bg-[#1e293b] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
              <SiMongodb className="text-[14px]" />
              MongoDB
            </span>

            <span className="bg-[#1e293b] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
              <SiGooglegemini className="text-[14px]" />
              Gemini API
            </span>

            <span className="bg-[#1e293b] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
              <FaRobot className="text-[14px]" />
              Generative AI
            </span>

          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/Amruta102004/interview-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e293b] text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm shadow-md hover:scale-105 transition duration-300"
            >
              <FaGithub />
              GitHub
            </a>

            {/* Live */}
            <a
              href="https://interview-ai-webapp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1677ff] text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm shadow-md hover:scale-105 transition duration-300"
            >
              <FaExternalLinkAlt />
              Live
            </a>

          </div>
        </div>

        {/* Super Calculator */}
        <div className="bg-white rounded-[28px] p-7 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300">

          {/* Title */}
          <h3 className="text-3xl font-bold text-[#1f2937] mb-4">
            Super Calculator
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-[15px] leading-8 mb-7">
            Multi-functional calculator with scientific, binary,
            age, loan and arithmetic calculations using Java
            and Android Studio.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mb-10">

            <span className="bg-[#1e293b] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
              <FaJava className="text-[14px]" />
              Java
            </span>

            <span className="bg-[#1e293b] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
              <SiAndroidstudio className="text-[14px]" />
              Android Studio
            </span>

            <span className="bg-[#1e293b] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-md">
              <FaCode className="text-[14px]" />
              XML
            </span>

          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/Amruta102004/super-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1e293b] text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm shadow-md hover:scale-105 transition duration-300"
            >
              <FaGithub />
              GitHub
            </a>

            {/* Live */}
            <a
              href="https://github.com/Amruta102004/super-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1677ff] text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm shadow-md hover:scale-105 transition duration-300"
            >
              <FaExternalLinkAlt />
              Live
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}