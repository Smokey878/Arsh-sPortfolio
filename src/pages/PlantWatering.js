import '../styles/ProjectLayout.css';

export default function F1Telemetry() {
  // redirect handler
  const redirectToSection = (sectionId) => {
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="project-page">
      {/*Top Navigation*/}
      <nav className="top-nav">
        <div className="nav-left">
          <a href="/" className="nav-name">Arsh Mobeen</a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("about"); }}>About</a>
          </li>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("skills"); }}>Skills</a>
          </li>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("projects"); }}>Projects</a>
          </li>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("workshops"); }}>Workshops & Research</a>
          </li>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("beyond"); }}>Beyond Engineering</a>
          </li>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("gallery"); }}>Gallery</a>
          </li>
          <li>
            <a href="/" onClick={(e) => { e.preventDefault(); redirectToSection("contact"); }}>Contact</a>
          </li>
        </ul>
      </nav>

      <section className="project-section overview">
        <h1>Project Title</h1>
        <p className="project-subtitle">Built with React, Node.js, MongoDB</p>
        <p>
          [Short intro paragraph explaining the project’s purpose, who it helps, and what problem it solves.]
        </p>
      </section>

      <section className="project-section features">
        <h2>Key Features</h2>
        <ul>
          <li>Feature one</li>
          <li>Feature two</li>
          <li>Feature three</li>
        </ul>
      </section>

      <section className="project-section challenges">
        <h2>Challenges</h2>
        <p>
          Describe the biggest hurdles — technical or conceptual — and how you solved them.
        </p>
      </section>

      <section className="project-section screenshots">
        <h2>Screenshots</h2>
        <div className="screenshot-gallery">
          <img src="/images/project1-screen1.jpg" alt="Screenshot 1" />
          <img src="/images/project1-screen2.jpg" alt="Screenshot 2" />
        </div>
      </section>

      <section className="project-section results">
        <h2>Impact & Results</h2>
        <p>
          What changed after this project was built? Did it speed something up, impress a client, win an award?
        </p>
      </section>

      <section className="project-section reflection">
        <h2>Reflection</h2>
        <p>
          What you’d do differently next time or what you learned that helped you grow.
        </p>
      </section>

      <section className="project-section links">
        <h2>Project Links</h2>
        <ul>
          <li><a href="https://github.com/yourusername/project">View on GitHub</a></li>
          <li><a href="https://yourprojectdemo.com" target="_blank" rel="noopener noreferrer">Live Demo</a></li>
        </ul>
      </section>
    </div>
  );
}
