

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot" /> Available for opportunities
        </p>

        <h1>
          Designing useful
          <br />
          <em>digital experiences.</em>
        </h1>

        <p className="hero-copy">
          I’m Venkatesh Mamidala, a computer science engineer focused on
          thoughtful web products and practical software solutions.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <span>↓</span>
          </a>

          <a className="text-link" href="#contact">
            Start a conversation <span>→</span>
          </a>
        </div>

        <div className="hero-meta">
          <span>Based in India</span>
          <span>Open to work</span>
          <span>2026</span>
        </div>
      </div>

      <div className="hero-orb orb-one" aria-hidden="true" />
      <div className="hero-orb orb-two" aria-hidden="true" />
    </section>
  );
}

export default Hero;
