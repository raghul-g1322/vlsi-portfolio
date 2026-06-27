import portfolio from "../data/portfolio";
import { FaGraduationCap } from "react-icons/fa";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#050816] text-white py-10 px-6"
    >
      <Reveal direction="right">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-8">
          Education
        </h2>

        <div className="space-y-5">

          {portfolio.education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#111827] rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition duration-300 flex gap-6 items-start"
            >
              <FaGraduationCap
                size={40}
                className="text-blue-500 mt-1"
              />

              <div>
                <h3 className="text-2xl font-bold">
                  {edu.college}
                </h3>

                <p className="text-blue-400 font-bold mt-0">
                  {edu.spez}
                </p>
                
                <p className="text-gray-400 mt-2">
                  {edu.degree}
                </p>

                <p className="text-yellow-200 mt-2">
                  {edu.year}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
      </Reveal>
    </section>
  );
}