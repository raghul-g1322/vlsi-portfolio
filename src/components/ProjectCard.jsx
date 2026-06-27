import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-[#0F172A] border border-slate-700 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-all duration-300"
    >
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-7">

        {/* Title */}
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-gray-400 leading-7 text-justify max-w-2xl">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        {project.features && (
          <div className="mt-6">
            <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
              Key Features
            </h4>

            <ul className="space-y-2 text-gray-300">
              {project.features.map((feature) => (
                <li key={feature}>
                  ✔ {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

          {/* GitHub Button */}
          <div className="mt-8 flex justify-center">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700"
            >
              <FaGithub className="text-xl" />
              View on GitHub
            </a>
          </div>

      </div>
    </motion.div>
  );
}