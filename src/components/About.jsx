import portfolio from "../data/portfolio";
import Reveal from "./Reveal";
import {
  FaMicrochip,
  FaMemory,
  FaNetworkWired,
  FaProjectDiagram,
  FaCode,
  FaLaptopCode,
  FaPython,
  FaAward,
} from "react-icons/fa";

import {
  LuCpu,
  LuCircuitBoard,
  LuBinary,
} from "react-icons/lu";

import {
  TbCpu,
  TbCircuitChangeover,
  TbBinaryTree,
} from "react-icons/tb";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B1120] text-white py-20 px-8"
    >
      <Reveal direction="left">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-10">
          About Me
        </h2>

        <p className="text-xl text-gray-300 leading-9 max-w-4xl text-justify">
          {portfolio.about.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-[#111827] p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition">
            <FaCode className="text-4xl text-blue-400 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              RTL Design
            </h3>
            <p className="text-gray-400">
              Verilog, SystemVerilog and FPGA Design.
            </p>
          </div>

          <div className="bg-[#111827] p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition">
            <LuCpu className="text-4xl text-blue-400 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              ASIC Flow
            </h3>
            <p className="text-gray-400">
              LINT, CDC, Synthesis, STA, UPF
            </p>
          </div>

          <div className="bg-[#111827] p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition">
            <LuCircuitBoard className="text-4xl text-blue-400 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              FPGA Flow
            </h3>
            <p className="text-gray-400">
              FPGA Design, Implementation, Bit-Stream Gen.
            </p>
          </div>

        </div>

      </div>
      </Reveal>
    </section>
  );
}