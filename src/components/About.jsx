import {
  FaJava,
  FaReact,
  FaLightbulb,
  FaGraduationCap
} from "react-icons/fa";

import { SiSpringboot, SiMongodb } from "react-icons/si";

export default function About() {
  return (
    <section className="bg-gray-100 py-20 px-6">

      <h2 className="text-5xl font-bold text-center mb-16 text-gray-800">
        About Me
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Summary Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 relative">

          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
          <FaJava />
          </div>

          <h3 className="text-3xl font-semibold mt-10 mb-6 text-gray-800">
            Professional Summary
          </h3>

          <p className="text-gray-600 leading-8 text-lg">
            Information Technology undergraduate with strong foundations
            in DSA, OOP, MERN Stack and scalable application development.
          </p>

        </div>

        {/* Skills Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 relative">

          <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-yellow-400 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
          <FaLightbulb />
          </div>

          <h3 className="text-3xl font-semibold mt-10 mb-8 text-gray-800">
            Skills & Interests
          </h3>

          <div className="grid grid-cols-2 gap-8 text-center">

            <div>
              <FaJava className="text-4xl mx-auto mb-2 text-gray-700" />
              <p>Java & Spring Boot</p>
            </div>

            <div>
              <FaReact className="text-4xl mx-auto mb-2 text-gray-700" />
              <p>MERN Stack</p>
            </div>

            <div>
              <SiMongodb className="text-4xl mx-auto mb-2 text-gray-700" />
              <p>Databases</p>
            </div>

            <div>
              <FaLightbulb className="text-4xl mx-auto mb-2 text-gray-700" />
              <p>AI & Innovation</p>
            </div>

          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-16">

        {/* Education */}
        <div className="border-l-4 border-cyan-400 pl-8 relative">

          <div className="absolute -left-6 top-0 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            2
          </div>

          <h3 className="text-3xl font-bold mb-6 text-gray-800">
            B.E. Information Technology
          </h3>

          <p className="text-gray-500 text-lg mb-4">
            2022 – 2025 | CGPA: 7.83
          </p>

          <p className="text-gray-600 leading-7">
            Worked on scalable Java, Spring Boot and MERN Stack projects.
          </p>

          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Diploma in Computer Engineering
            </h3>

            <p className="text-gray-500 text-lg mb-4">
              2019 – 2022 | 88.63%
            </p>

            <p className="text-gray-600 leading-7">
              Built strong programming and hardware fundamentals.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="border-l-4 border-purple-400 pl-8 relative">

          <div className="absolute -left-6 top-0 bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
            1
          </div>

          <h3 className="text-3xl font-bold mb-6 text-gray-800">
            Web Intern – Company Name
          </h3>

          <p className="text-gray-500 text-lg mb-4">
            Feb – Apr 2024
          </p>

          <p className="text-gray-600 leading-7">
            Built MERN stack applications and optimized APIs.
          </p>

        </div>

      </div>

    </section>
  );
}