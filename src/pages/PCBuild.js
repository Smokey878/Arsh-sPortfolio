import '../styles/ProjectLayout.css';

export default function PCBuild() {
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
        <h1>Custom PC Build</h1>
        <p className="project-subtitle">PC Hardware · Optimization · Thermals · Cable Management</p>
        <p>
          I built a high-performance custom PC from the ground up to handle demanding tasks such as gaming, software development,
          and 3D rendering. With careful research and component selection, I ensured that the build balanced performance,
          thermals, noise levels, and future upgradability. This build has served as both a workstation and a creative outlet
          for hardware tuning and benchmarking.
        </p>
      </section>

      <section className="project-section features">
        <h2>Build Specs</h2>
        <ul>
          <li>GPU: NVIDIA GeForce RTX 3070 (8GB GDDR6)</li>
          <li>CPU: AMD Ryzen 7 5800X — 8-Core, 16-Thread</li>
          <li>Motherboard: ASUS ROG Strix B550-F Gaming WiFi II</li>
          <li>RAM: 32GB DDR4 3600MHz (Corsair Vengeance RGB Pro)</li>
          <li>Storage: 1TB NVMe Gen4 SSD + 2TB HDD</li>
          <li>Power Supply: Corsair RM750x (750W, 80+ Gold)</li>
          <li>Case: Lian Li Lancool II Mesh with ARGB Fans</li>
          <li>Cooling: Deepcool AK620 Dual Tower Air Cooler</li>
        </ul>
      </section>

      <section className="project-section challenges">
        <h2>Challenges</h2>
        <p>
          Cable management in a compact mid-tower case required precision and patience. Ensuring compatibility between
          components like GPU clearance and CPU cooler height took multiple layout trials. BIOS configuration for optimal
          memory timing and thermals was another key part of the post-build process.
        </p>
      </section>

      <section className="project-section screenshots">
        <h2>Build Photos</h2>
        <div className="screenshot-gallery">
          <img src="/pcbuildfull.jpg" alt="Completed PC Build" />
          <img src="/pcbuildcables.jpg" alt="Cable management view" />
        </div>
      </section>

      <section className="project-section results">
        <h2>Performance & Results</h2>
        <p>
          The PC scored over 18,000 in Time Spy (3DMark) and comfortably handles modern AAA titles at 1440p ultra settings.
          It also reduced my compilation and rendering times by over 40% compared to my previous setup, becoming a crucial
          part of my creative and development workflow.
        </p>
      </section>

      <section className="project-section reflection">
        <h2>Reflection</h2>
        <p>
          Building this PC gave me hands-on experience with hardware compatibility, cooling systems, and BIOS tuning.
          It solidified my appreciation for the intersection of engineering and aesthetics—every wire, fan, and component
          was placed with both form and function in mind. I’m already thinking about a future custom water-cooled build.
        </p>
      </section>
    </div>
  );
}
