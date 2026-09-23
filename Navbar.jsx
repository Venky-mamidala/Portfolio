

function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a
          className="brand"
          href="#home"
          aria-label="Venkatesh Mamidala home"
        >
          VM<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#education">Education</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
