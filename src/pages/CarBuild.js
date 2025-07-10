import '../styles/ProjectLayout.css';

export default function CarBuild() {
  const redirectToSection = (sectionId) => {
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="project-page">
      <nav className="top-nav">
        <div className="nav-left">
          <a href="/" className="nav-name">Arsh Mobeen</a>
        </div>
        <ul className="nav-links">
          <li><a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("about"); }}>About</a></li>
          <li><a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("skills"); }}>Skills</a></li>
          <li><a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("projects"); }}>Projects</a></li>
          <li><a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("workshops"); }}>Workshops & Research</a></li>
          <li><a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("beyond"); }}>Beyond Engineering</a></li>
          <li><a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("gallery"); }}>Gallery</a></li>
          <li><a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("contact"); }}>Contact</a></li>
        </ul>
      </nav>

      <section className="project-section overview">
        <h1>Custom BMW F30 Build</h1>
        <p className="project-subtitle">BMW 328i · Tuning · Hardware Mods · Aesthetic Upgrades</p>
        <p>
          This personal build project is a custom-tuned BMW F30 328i transformed into a performance-aesthetic hybrid.
          From upgraded intercooler and air intake to custom starlights and a full body kit, the build balances
          engineering precision with visual expression. The car reflects both technical expertise and artistic flair.
        </p>
      </section>


      <section className="project-section features">
        <h2>Key Features</h2>
        <ul>
          <li>Stage 1 ECU Tune for increased horsepower and torque</li>
          <li>Upgraded front-mounted intercooler for improved boost cooling</li>
          <li>Performance cold air intake for throttle response and sound</li>
          <li>Full body kit including M-style front lip, rear diffuser, and side skirts</li>
          <li>Ambient starlight roof with remote-controlled lighting effects</li>
        </ul>
      </section>

      <section className="project-section challenges">
        <h2>Challenges</h2>
        <p>
          Installing performance mods required precision in fitment and testing under different driving conditions.
          Coordinating electrical routing for the starlights while maintaining OEM functionality was delicate.
          The intercooler install demanded bumper disassembly and careful alignment of boost piping.
        </p>
      </section>


      <section className="project-section results">
        <h2>Impact & Results</h2>
        <p>
          The build draws attention at meets and online, serving as a conversation starter for automotive design,
          mechanical upgrades, and hands-on engineering. It reflects my ability to execute a vision across mechanical,
          electrical, and aesthetic domains - and feeds into my long-term aspirations of building a luxury design brand.
        </p>
      </section>

      <section className="project-section reflection">
        <h2>Reflection</h2>
        <p>
          This project taught me about real-world systems engineering - balancing power, airflow, and design.
          I developed new skills in automotive disassembly, wiring, tuning, and sourcing parts. The F30 is now more
          than just a car - it's a statement piece that embodies my passion for performance and luxury design.
          I'm now planning to expand the build with upgraded exhaust and forged wheels.
        </p>
      </section>
    </div>
  );
}
