import portfolio from "../data/portfolio";
import Reveal from "./Reveal";
import { FaCode, FaTools } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { FaExternalLinkAlt } from "react-icons/fa";
export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#050816] text-white py-20 px-6"
    >
      <Reveal direction="left">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-5xl font-bold text-center mb-16">
            Technical Skills
          </h2>

          {/* Technical Skills */}
          <h3 className="flex items-center justify-center gap-3 text-2xl font-semibold text-blue-400 mb-6">
            <LuBrain className="text-3xl" />
            Programming & Hardware
          </h3>

          <div className="flex flex-wrap justify-center gap-5 mb-14">
            {portfolio.skills.technical.map((skill, index) => (
              <a
                key={index}
                href={`https://www.google.com/search?q=What+is+${encodeURIComponent(skill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-[#111827] border border-gray-700 hover:border-blue-500 hover:scale-105 transition duration-300 shadow-lg cursor-pointer"
              >
                {skill}
              </a>
            ))}
          </div>

          {/* Tools */}
          <h3 className="flex items-center justify-center gap-3 text-2xl font-semibold text-blue-400 mb-6">
            <FaTools className="text-3xl" />
            Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-5">
            {portfolio.skills.tools.map((tool, index) => (
              <a
                key={index}
                href={`https://www.google.com/search?q=What+is+${encodeURIComponent(tool)}+Tool`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-[#111827] border border-gray-700 hover:border-blue-500 hover:scale-105 transition duration-300 shadow-lg cursor-pointer"
              >
                {tool}
              </a>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}