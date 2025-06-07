import '../styles/ProjectLayout.css';

export default function ConquestGame() {
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
        <h1>Conquest: Strategy-Based Decision Game</h1>
        <p className="project-subtitle">JavaScript · Game Design · Storytelling · Interactive UI · Logic Trees</p>
        <p>
          <em>Conquest</em> is a strategic text-based game simulating the tension, tactics, and triumph of leadership
          in a fictional war between two states—Aratium and Vaskos. The player takes on the role of a state leader,
          choosing one of four strategic stances at the outset—diplomatic, warlike, cunning, or humble—and making
          pivotal decisions throughout a branching narrative. The objective is to accumulate 15 victory points through
          a series of high-stakes encounters, each shaped by player choice, logic, and critical thinking.
        </p>
      </section>

      <section className="project-section links">
        <h2>Project Demo</h2>
        <ul>
          <li><a href="https://sites.google.com/view/arshmobeensgamesite" target="_blank" rel="noopener noreferrer">Play the Game</a></li>
        </ul>
      </section>

      <section className="project-section features">
        <h2>Key Features</h2>
        <ul>
          <li>Player-driven narrative with strategic choice affecting every outcome</li>
          <li>Multiple starting strategies: warlike, diplomatic, cunning, and humble</li>
          <li>Victory system based on earning points through successful decisions</li>
          <li>Custom character skins and selectable state allegiance</li>
          <li>Highly replayable due to branching logic paths and unique scenarios</li>
        </ul>
      </section>

      <section className="project-section challenges">
        <h2>Challenges</h2>
        <p>
          Balancing the complexity of choices while maintaining code simplicity was a key challenge. Given the large
          number of decision paths, the game logic relied heavily on nested <code>if</code> statements. Structuring
          these in a readable and scalable way required careful planning. Another challenge was designing impactful
          scenarios that felt immersive and distinct while keeping the mechanics lightweight and browser-compatible.
        </p>
      </section>

      <section className="project-section screenshots">
        <h2>Screenshots</h2>
        <div className="screenshot-gallery">
          <img src="/images/conquest-intro.jpg" alt="Intro screen of the Conquest game" />
          <img src="/images/conquest-decision.jpg" alt="Decision screen showing strategic choices" />
        </div>
      </section>

      <section className="project-section results">
        <h2>Impact & Results</h2>
        <p>
          <em>Conquest</em> received strong feedback for its immersive storytelling and creative logic-based structure.
          It stood out as a unique spin on traditional war-themed games by emphasizing brains over brawn.
          Players praised its replayability and ability to make them think critically. It was successfully showcased
          in my digital portfolio, drawing attention from peers and instructors alike.
        </p>
      </section>

      <section className="project-section reflection">
        <h2>Reflection</h2>
        <p>
          This project deepened my understanding of decision trees, conditional logic, and game flow architecture.
          More importantly, it taught me how to design for user engagement through story and interactivity rather than
          complexity. If expanded, I’d consider implementing a visual UI, adding real-time decision consequences,
          and introducing an AI-based opponent for dynamic challenges.
        </p>
      </section>
    </div>
  );
}
