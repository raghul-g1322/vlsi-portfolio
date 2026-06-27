import Reveal from "./Reveal";
import portfolio from "../data/portfolio";
/*
const experiences = [
  {
    year: "2022 - Present",
    role: "Senior VLSI Design Engineer",
    company: "SiliconCore Technologies",
    description:
      "Worked on RTL Design, ASIC Verification, SystemVerilog, UVM, Timing Closure and FPGA prototyping."
  },
  {
    year: "2023 - 2025",
    role: "VLSI Design Engineer",
    company: "ChipWorks Labs",
    description:
      "Designed high-speed digital circuits, wrote verification testbenches and collaborated with cross-functional teams."
  },
  {
    year: "2022 - 2023",
    role: "VLSI Intern",
    company: "Future Silicon Pvt Ltd",
    description:
      "Worked on Verilog modules, digital design and simulation using industry-standard EDA tools."
  }
];
*/
export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#050816] text-white py-20 px-6"
    >
      <Reveal direction="right">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Experience
        </h2>

        <div className="border-l-4 border-blue-500 pl-8 space-y-12">

          {portfolio.experience.map((company, companyIndex) => (
            <div key={companyIndex} className="mb-16">

              <h3 className="text-3xl font-bold text-blue-400">
                {company.company}
              </h3>

              {company.location && (
                <p className="text-gray-400 mb-5">{company.location}</p>
              )}

              {company.total_exp && (
                <p className="text-gray-400 mb-8">{company.total_exp}</p>
              )}

              <div className="border-l-4 border-blue-500 pl-8 space-y-10">

                {company.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="relative">

                    <div className="absolute -left-11 top-2 w-5 h-5 rounded-full bg-blue-500"></div>

                    <p className="text-blue-300 font-semibold">
                      {role.year}
                    </p>
                    
                    <p className="text-gray-300 italic leading-8">
                      {role.location}
                    </p>

                    <h4 className="text-2xl font-semibold mt-2">
                      {role.title}
                    </h4>

                    <p className="mt-3 text-gray-300 leading-8 text-justify">
                      {role.description}
                    </p>

                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
      </Reveal>
    </section>
  );
}