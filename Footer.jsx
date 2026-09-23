


function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#home">
        VM<span>.</span>
      </a>

      <p>© 2026 Venkatesh Mamidala</p>

      <div className="footer-socials">
        <a
          href="https://github.com/Venky-mamidala"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Venkatesh's GitHub profile"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.04c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3.01 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
          </svg>
          GitHub <span aria-hidden="true">↗</span>
        </a>

        <a
          href="https://linkedin.com/in/venkatesh-mamidala"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}

export default Footer;
