import { FaBriefcase, FaProjectDiagram, FaAward, FaMicrochip } from "react-icons/fa";

const stats = [
  {
    number: "1.5+",
    label: "Years Experience",
    icon: <FaBriefcase size={35} />,
  },
  {
    number: "8+",
    label: "Projects",
    icon: <FaProjectDiagram size={35} />,
  },
  {
    number: "5+",
    label: "Certifications",
    icon: <FaAward size={35} />,
  },
  {
    number: "12+",
    label: "Technologies",
    icon: <FaMicrochip size={35} />,
  },
];

export default function Stats() {
  return (
    <section className="bg-[#050816] py-24 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="bg-[#111827] rounded-3xl p-10 text-center border border-gray-700 hover:border-blue-500 hover:-translate-y-3 transition duration-300"
            >

              <div className="text-blue-400 flex justify-center mb-5">
                {stat.icon}
              </div>

              <h2 className="text-5xl font-bold mb-2">
                {stat.number}
              </h2>

              <p className="text-gray-400">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}