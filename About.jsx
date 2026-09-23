

function About() {
  function hideBrokenImage(event) {
    event.currentTarget.style.display = "none";
  }

  return (
    <section id="about" className="section about-section">
      <div className="section-kicker">01 — About me</div>

      <div className="about-layout">
        <div className="portrait-wrap">
          <div className="portrait-frame">
            <img
              src="/profile.jpeg"
              alt="Venkatesh Mamidala"
              onError={hideBrokenImage}
            />
            <div className="portrait-fallback" aria-hidden="true">
              VM
            </div>
          </div>

        </div>

        <div className="about-copy">
          <p className="eyebrow">A little introduction</p>

          <h2>
            Curious by nature.
            <br />
            Purposeful by design.
          </h2>

          <p>
            I’m a Computer Science and Engineering graduate with a genuine
            interest in building technology that solves everyday problems. I
            enjoy turning ideas into clear, reliable experiences—from backend
            logic to polished web interfaces.
          </p>

          <p>
            My approach is grounded in continuous learning, strong
            fundamentals, and careful attention to the people using the
            product. I’m looking for opportunities to contribute, grow, and
            build software that matters.
          </p>

          <div className="about-facts">
            <div>
              <strong>02</strong>
              <span>Featured projects</span>
            </div>
            <div>
              <strong>09</strong>
              <span>Core technologies</span>
            </div>
            <div>
              <strong>2026</strong>
              <span>Graduate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
