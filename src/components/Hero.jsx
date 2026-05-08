import hero from "../assets/hero.gif";
export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-200 to-pink-200 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600">Hi, I'm Amruta Tekale</h1>
      <p className="mt-4 text-gray-700">Full-Stack Developer | MERN & Java Enthusiast</p>

      <div className="flex gap-4 mt-6">
        <a href="https://www.linkedin.com/in/amruta-tekale-609ab4315/" target="_blank" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">LinkedIn</a>
        <a href="https://github.com/Amruta102004" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded"> GitHub </a>
        <a href="https://leetcode.com/u/AmrutaTekale/" target="_blank" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">LeetCode</a>
      </div>

      <img src={hero} className="w-40 rounded-2xl shadow-lg mt-6"/>
    </div>
  );
}