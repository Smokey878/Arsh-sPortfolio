import '../styles/ProjectLayout.css';

export default function FloodTrafficAI() {
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
        <h1>Flood-Responsive Traffic Light System</h1>
        <p className="project-subtitle">Arduino · Sensors · LED Display · C++ · AI Routing</p>
        <p>
          This project solves a critical problem faced by rural flood-prone communities: the lack of real-time, GPS-independent guidance
          during flooding events. We engineered an AI-integrated Arduino traffic light system that detects rising water levels and
          activates directional LED arrows to reroute traffic away from dangerous zones—especially helpful in areas with unreliable
          cell service.
        </p>
      </section>

      <section className="project-section links">
        <h2>Project Demo</h2>
        <ul>
          <li><a href="https://sites.google.com/view/arshmobeensgamesite" target="_blank" rel="noopener noreferrer">Live Demo (Prototype Overview)</a></li>
        </ul>
      </section>

      <section className="project-section features">
        <h2>Key Features</h2>
        <ul>
          <li>Water sensor detection within ±2 cm accuracy</li>
          <li>LED matrix traffic signals with dynamic arrow directions</li>
          <li>AI logic for decision-making and evacuation route optimization</li>
          <li>Visibility tested in day/night/fog with a reach up to 10m</li>
          <li>Failsafe design with battery backup and manual override</li>
        </ul>
      </section>

      <section className="project-section challenges">
        <h2>Challenges</h2>
        <p>
          Ensuring reliability in real-world conditions was the biggest challenge. Debris often blocked the water sensor, and glare
          impacted visibility during testing. We mitigated this with filtration grates and light diffusion strategies, while also
          refining the AI logic to avoid false positives.
        </p>
      </section>

      <section className="project-section screenshots">
        <h2>Screenshots</h2>
        <div className="screenshot-gallery">
          <img src="/images/flood-sensor.jpg" alt="Water sensor setup with Arduino" />
          <img src="/images/flood-light-demo.jpg" alt="LED arrow light in action during fog simulation" />
        </div>
      </section>

      <section className="project-section results">
        <h2>Impact & Results</h2>
        <p>
          The system achieved over 95% directional clarity in visibility tests, had a sensor response time under 2 seconds,
          and was confirmed operational across temperatures from -30°C to 40°C. With AI integration, routing logic was accurate in
          95% of flood scenarios during simulations.
        </p>
      </section>

      <section className="project-section reflection">
        <h2>Reflection</h2>
        <p>
          This project honed our skills in embedded system design, environmental testing, and ethical systems engineering.
          It taught us how to build for real-world unpredictability, prioritize safety, and work collaboratively under pressure.
          In future versions, we plan to add solar panel support and cloud-based logging for regional alert coordination.
        </p>
      </section>
    </div>
  );
}
