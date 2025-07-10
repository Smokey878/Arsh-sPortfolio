import '../styles/ProjectLayout.css';

export default function ArtifactOfSalvation() {
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
        <h1>Artifact of Salvation: Stealth-Action RPG</h1>
        <p className="project-subtitle">Unity · C# · RPG Mechanics · Combat Design · Storytelling</p>
        <p>
          <em>Artifact of Salvation</em> is a 3D stealth-based RPG in which you play as Sid, an infamous archaeologist
          turned rogue hero. Contracted by a global conglomerate but driven by personal motives, Sid must retrieve
          a world-saving artifact before it falls into the hands of Phineus Valor, a corrupt corporate heir.
          Players progress through six immersive levels involving puzzles, enemies, stealth, and boss fights.
        </p>
      </section>

      <section className="project-section links">
        <h2>Project Code</h2>
        <ul>
          <li><a href="https://github.com/AlexandraLHeureuxECE/final-project-fantastic6" target="_blank" rel="noopener noreferrer">The Github</a></li>
        </ul>
      </section>

      <section className="project-section features">
        <h2>Key Features</h2>
        <ul>
          <li>Multi-act story-driven gameplay with high-stakes narrative</li>
          <li>Real-time combat with melee and ranged weapons (bow, sword)</li>
          <li>Stealth mechanics: sneak, distract enemies, perform silent takedowns</li>
          <li>Dynamic boss fights, environmental traps, and chase sequences</li>
          <li>XP-based leveling, inventory system, blacksmith and angel NPCs</li>
        </ul>
      </section>

      <section className="project-section challenges">
        <h2>Challenges</h2>
        <p>
          Designing meaningful stealth and combat mechanics in Unity required implementing enemy detection logic,
          environmental triggers, and animation transitions. Managing a clean architecture for inventory, XP, and class
          hierarchies was also key to balancing scalability with player experience.
        </p>
      </section>

      <section className="project-section screenshots">
        <h2>Screenshots</h2>
        <div className="screenshot-gallery">
          <img src="/artifact-temple.png" alt="Temple environment in Artifact of Salvation" />
          <img src="/artifact-banner.png" alt="Boss confrontation with Phineus Valor" />
        </div>
      </section>

      <section className="project-section results">
        <h2>Impact & Results</h2>
        <p>
          The game was highly praised during class demos for its storytelling, gameplay variety, and character design.
          It demonstrates advanced Unity development, strong code architecture, and an engaging player loop suitable
          for portfolio and professional pitches.
        </p>
      </section>

      <section className="project-section reflection">
        <h2>Reflection</h2>
        <p>
          Working on this game helped me master character-controller mechanics, AI pathfinding, and inventory systems.
          I also learned how to build multi-phase enemy encounters and intertwine story with gameplay flow. In future
          updates, I'd like to add voice acting, an expanded open world, and cutscenes powered by Unity Timeline.
        </p>
      </section>
    </div>
  );
}
