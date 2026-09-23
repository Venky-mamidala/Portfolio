

const skills = [
  "Python",
  "FastAPI",
  "Java",
  "C",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
];

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-kicker">02 — Expertise</div>

      <div className="section-heading">
        <div>
          <p className="eyebrow">The tools I use</p>
          <h2>
            Built on solid
            <br />
            technical foundations.
          </h2>
        </div>

        <p>
          I work across the stack to create dependable, user-centered web
          applications.
        </p>
      </div>

      <div className="skill-list">
        {skills.map((skill, index) => (
          <div className="skill-row" key={skill}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{skill}</h3>
            <i>↗</i>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
