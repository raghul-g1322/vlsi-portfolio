import portfolio from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] py-20 px-8"
    >
      <Reveal direction="up">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-white text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

          {portfolio.projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}

        </div>

      </div>
      </Reveal>
    </section>
  );
}