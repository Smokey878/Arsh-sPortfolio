import '../styles/ProjectLayout.css';

export default function PlantWatering() {
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
        <h1>Autonomous Plant Watering System</h1>
        <p className="project-subtitle">Raspberry Pi · Python · GPIO · Embedded Systems · User-Centric Design</p>
        <p>
          This project, developed for Hutton House’s accessible gardening initiative, addresses the physical limitations
          faced by differently abled volunteers during gardening tasks. Our solution is a gravity-fed water cart
          equipped with a hose system, mounted on a stable and maneuverable base designed to minimize effort
          and maximize independence. Built with embedded systems knowledge and validated through user testing,
          this project emphasizes accessibility, practicality, and ease of use.
        </p>
      </section>
      <section className="project-section links">
        <h2>Project Report</h2>
        <ul>
          <li><a href="/Plant%20Watering%20Report.pdf" target="_blank" rel="noopener noreferrer">Download Full Report (PDF)</a></li>
        </ul>
      </section>
      <section className="project-section features">
        <h2>Key Features</h2>
        <ul>
          <li>Gravity-based water flow capped at 100ml/s to ensure manageability</li>
          <li>Wheelchair and walker compatible handle and mobility design</li>
          <li>18L water tank capacity with zero spillage during transport</li>
          <li>Durable, weather-resistant design for long-term outdoor use</li>
          <li>Tool-less assembly in 10 logical steps, no technical expertise required</li>
        </ul>
      </section>

      <section className="project-section challenges">
        <h2>Challenges</h2>
        <p>
          Testing without access to real mobility devices presented a major challenge. We overcame this by designing
          for universal ergonomics and later validating with a wheelchair user during the engineering showcase. 
          Ensuring consistent flow control without electrical pumps also required precision engineering of the tank height
          and hose geometry. Additionally, we worked around budget constraints by repurposing accessible materials
          like recycling bins and minimizing custom components.
        </p>
      </section>

      <section className="project-section screenshots">
        <h2>Gallery</h2>
        <div className="screenshot-gallery">
          <img src="/plant-watering.png" alt="Full system view" />
          <img src="/project1-screen2.png" alt="Hose connection and control mechanism" />
        </div>
      </section>

      <section className="project-section results">
        <h2>Impact & Results</h2>
        <p>
          Our solution exceeded spatial and ergonomic expectations: it requires less than 0.3 m² of storage space,
          moves with less than 0.5 lbs of force, and was approved by multiple users during our final demo.
          Compared to the previous solution (a basic watering can), the cart provided a 2.4× capacity improvement,
          better maneuverability, and drastically reduced effort. It was praised for its accessibility and innovation.
        </p>
      </section>

      <section className="project-section reflection">
        <h2>Reflection</h2>
        <p>
          This project taught us the importance of designing with empathy. It highlighted how seemingly simple tasks
          like watering can become complex without accessibility in mind. We’d love to integrate smart monitoring
          in future iterations, such as soil moisture sensors or timed valves, while retaining the simplicity that makes
          this system so effective.
        </p>
      </section>


    </div>
  );
}
