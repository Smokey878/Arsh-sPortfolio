import '../styles/ProjectLayout.css';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import ProjectShell from '../components/ProjectShell';

export default function ConquestGame() {
  return (
    <ProjectShell>
      <ProjectCaseStudy
        title="Conquest Strategy Game"
        summary="A browser-based decision game where branching choices shape the outcome of a fictional conflict."
        tech={['JavaScript', 'HTML', 'CSS', 'Decision Trees', 'Interactive Storytelling']}
        heroImage="/conquest-banner.png"
        heroAlt="Conquest game banner"
        snapshot={[
          { label: 'Role', value: 'Game logic + UI' },
          { label: 'Timeline', value: 'School game project' },
          { label: 'Focus', value: 'Branching decisions' },
          { label: 'Output', value: 'Playable web game' },
        ]}
        overview="Conquest places the player in charge of a fictional state navigating strategic decisions during a tense conflict. The player chooses a leadership style, makes scenario-based decisions, and earns victory points based on logic, risk, and consequence."
        problem="The challenge was to make a lightweight text-driven game feel strategic without overcomplicating the interface or codebase. Every decision needed to feel distinct, understandable, and replayable."
        approach={[
          'Built a branching narrative flow around leadership styles such as diplomatic, warlike, cunning, and humble.',
          'Designed a point-based win condition that rewards successful decisions across multiple scenarios.',
          'Created custom screens for introduction, decision-making, and player feedback.',
          'Kept the game browser-compatible with plain JavaScript, HTML, and CSS.',
        ]}
        technical={[
          'Decision paths are handled through conditional logic and state variables that track player choices.',
          'The victory system uses accumulated points to determine progress and end-state outcomes.',
          'Reusable UI sections support player setup, scenario presentation, and consequence feedback.',
          'The design balances simple implementation with enough branching structure to encourage replayability.',
        ]}
        images={[
          { src: '/conquestintro.png', alt: 'Conquest intro screen', caption: 'Intro and setup screen.' },
          { src: '/conquestdecision.png', alt: 'Conquest decision screen', caption: 'Decision screen with strategic choices.' },
        ]}
        outcome="The project taught me how to structure game flow, decision trees, and user feedback. It also helped me think more carefully about how interaction design can make simple logic feel engaging."
        links={[
          { label: 'Play the Game', href: 'https://sites.google.com/view/arshmobeensgamesite' },
        ]}
      />
    </ProjectShell>
  );
}
