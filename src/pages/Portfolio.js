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
        <h1>Personal Portfolio Website</h1>
        <p className="project-subtitle">Built with React, JavaScript, HTML5, CSS3, Framer Motion</p>
        <p>
          This is my personal portfolio website designed to showcase my software engineering projects, academic background, professional experiences, and personal brand. It serves as a central hub for recruiters, collaborators, and anyone interested in learning more about my work and expertise.
        </p>
      </section>

      <section className="project-section features">
        <h2>Key Features</h2>
        <ul>
          <li>Fully responsive design optimized for both desktop and mobile devices.</li>
          <li>Smooth animations using Framer Motion for modern, interactive transitions.</li>
          <li>Dedicated project pages with in-depth breakdowns for each major project.</li>
          <li>Modular React component architecture for scalability and maintainability.</li>
          <li>Custom smooth-scrolling navigation across multiple sections.</li>
          <li>Dark theme aesthetic with custom typography and consistent UI/UX.</li>
        </ul>
      </section>

      <section className="project-section challenges">
        <h2>Challenges</h2>
        <p>
          One of the biggest challenges was balancing performance with animations and responsiveness across different devices. Additionally, I had to design a scalable component structure to allow easy future expansion as I add more projects and content. Debugging smooth scroll behavior across different browsers also required some fine-tuning.
        </p>
      </section>

      <section className="project-section screenshots">
        <h2>Screenshots</h2>
        <div className="screenshot-gallery">
          <img src="/portfoliohome.png" alt="Portfolio Home Page" />
          <img src="/portfolioprojects.png" alt="Portfolio Projects Page" />
        </div>
      </section>

      <section className="project-section results">
        <h2>Impact & Results</h2>
        <p>
          This portfolio has allowed me to professionally showcase my skills to potential employers, collaborators, and peers. It significantly boosted my online presence and gave me a strong platform to present my work during job applications and networking opportunities.
        </p>
      </section>

      <section className="project-section reflection">
        <h2>Reflection</h2>
        <p>
          In the future, I plan to integrate a blog section, add a backend for dynamic content updates, and include analytics to track visitor engagement. Building this project allowed me to gain deeper experience with React, CSS architecture, and deployment pipelines.
        </p>
      </section>

      <section className="project-section links">
        <h2>Project Links</h2>
        <ul>
          <li><a href="https://github.com/Smokey878/Arsh-sPortfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a></li>
        </ul>
      </section>
    </div>
  );
}