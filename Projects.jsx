

const projects = [
  {
    number: "01",
    title: "Neighbourhood Knowledge Exchange",
    description:
      "A community platform for sharing skills, resources, and useful local knowledge.",
    technologies: ["React", "FastAPI", "Python"],
  },
  {
    number: "02",
    title: "Online Auction System",
    description:
      "A responsive auction experience where buyers can browse, bid, and sell with confidence.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-kicker">03 — Selected work</div>

      <div className="section-heading">
        <div>
          <p className="eyebrow">Projects</p>
          <h2>
            Made to solve
            <br />
            real problems.
          </h2>
        </div>

        <p>
          A selection of products built with a focus on usefulness, clean
          flows, and maintainable engineering.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>

            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="project-arrow">↗</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
