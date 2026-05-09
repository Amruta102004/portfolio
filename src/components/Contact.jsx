import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section className="bg-[#f5f7fb] py-20 px-6">

      <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
        Connect with Me
      </h2>

      <div className="flex justify-center gap-8 flex-wrap">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/amruta-tekale-609ab4315/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white w-24 h-24 rounded-2xl shadow-md flex items-center justify-center hover:scale-105 transition duration-300"
        >
          <FaLinkedin className="text-[#0077B5] text-5xl" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Amruta102004"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white w-24 h-24 rounded-2xl shadow-md flex items-center justify-center hover:scale-105 transition duration-300"
        >
          <FaGithub className="text-black text-5xl" />
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/AmrutaTekale/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white w-24 h-24 rounded-2xl shadow-md flex items-center justify-center hover:scale-105 transition duration-300"
        >
          <SiLeetcode className="text-[#FFA116] text-5xl" />
        </a>

        {/* Email */}
        <a
          href="atekale046@gmail.com"
          className="bg-white w-24 h-24 rounded-2xl shadow-md flex items-center justify-center hover:scale-105 transition duration-300"
        >
          <FaEnvelope className="text-red-500 text-5xl" />
        </a>

      </div>
    </section>
  );
}