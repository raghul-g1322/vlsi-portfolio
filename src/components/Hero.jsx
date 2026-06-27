import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Background from "./Background";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center bg-[#050816] px-8 pt-24 md:pt-0 overflow-hidden"      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Background />
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p className="text-blue-200 text-xl mb-3">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="text-white">Raghul</span>{" "}
            <span className="text-blue-400">Ganesan</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl font-semibold tracking-wide text-gray-200">
              ASIC/FPGA RTL Design Engineer
          </p> 

          <TypeAnimation
            sequence={[
              "ASIC Design",
              2000,
              "FPGA Design",
              2000,
              "ASIC Verification",
              2000,
              "FPGA Emulation",
              2000,
              "LINT & CDC",
              2000,
              "ASIC & FPGA Synthesis",
              2000,
              "Static Timing Analysis",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-3xl font-semibold text-blue-300 mt-6 block min-h-[48px]"
          />

          <p className="mt-6 text-base md:text-lg text-gray-300 leading-8 text-justify">
            Passionate about bringing technology into people's lives through innovative VLSI design and semiconductor solutions. Driven by a deep interest in digital design, chip development, and verification, I strive to contribute to the advancement of modern electronics that power the devices we use every day.
          </p>

<div className="flex gap-5 mt-10">

  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 px-7 py-4 rounded-xl hover:bg-blue-700 transition"
  >
    Download CV
  </a>

  <Link
    to="contact"
    smooth={true}
    duration={100}
    className="border border-white px-7 py-4 rounded-xl hover:bg-white hover:text-black transition cursor-pointer"
  >
    Contact Me
  </Link>

</div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://www.linkedin.com/in/raghulgg/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/raghul-g1322"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

          </div>

        </motion.div>

        <motion.div
          className="
            relative
            flex
            justify-center
            md:justify-end
            items-end
            h-[400px]
            md:h-screen
          "
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

          <img
            src="/IMG_4423-removebg.png"
            alt="Profile"
            className="
              relative
              z-10
              w-[260px]
              md:w-[550px]
              sm:w-[220px]
              object-contain
              translate-x-15
              animate-[float_6s_ease-in-out_infinite]
              drop-shadow-[0_35px_70px_rgba(0,0,0,0.45)]
            "
          />
        </motion.div>

      </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <a
        href="#about"
        className="text-gray-400 hover:text-blue-400 lg:text-2xl transition"
      >
        ↓
      </a>
    </div>
    </motion.section>
  );
}