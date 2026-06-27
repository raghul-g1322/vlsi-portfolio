import portfolio from "../data/portfolio";
import { FaCertificate } from "react-icons/fa";
import Reveal from "./Reveal";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen bg-[#0B1120] text-white py-20 px-6"
    >
      <Reveal>
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-15">
          Courses & Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {portfolio.certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#111827] border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition duration-300 shadow-lg flex items-center gap-5"
            >
              <FaCertificate
                className="text-blue-500"
                size={40}
              />

              <h3 className="text-xl font-semibold">
                {cert}
              </h3>

            </div>
          ))}

        </div>

      </div>
      </Reveal>
    </section>
  );
}