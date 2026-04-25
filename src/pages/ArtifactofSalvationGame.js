import '../styles/ProjectLayout.css';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import ProjectShell from '../components/ProjectShell';

export default function ArtifactOfSalvation() {
  return (
    <ProjectShell>
      <ProjectCaseStudy
        title="Artifact of Salvation"
        summary="A Unity stealth-action RPG prototype with combat, puzzles, narrative progression, and multi-level gameplay."
        tech={['Unity', 'C#', 'RPG Systems', 'Combat Design', 'Blender', 'Photoshop']}
        heroImage="/artifactbanner.png"
        heroAlt="Artifact of Salvation game banner"
        snapshot={[
          { label: 'Role', value: 'Gameplay + systems' },
          { label: 'Timeline', value: 'Team game project' },
          { label: 'Focus', value: 'Stealth and RPG mechanics' },
          { label: 'Output', value: 'Playable Unity prototype' },
        ]}
        overview="Artifact of Salvation follows Sid, an archaeologist racing to recover a world-saving relic before it falls into the wrong hands. The project combines stealth, combat, exploration, puzzles, and RPG progression into a playable 3D prototype."
        problem="The main challenge was building multiple gameplay systems that felt connected: enemy detection, combat, inventory, leveling, scripted events, and story progression all needed to work together without overwhelming the player."
        approach={[
          'Implemented gameplay loops around stealth movement, enemy encounters, puzzle solving, and boss progression.',
          'Structured C# scripts for player control, enemy behavior, inventory, XP, and interaction systems.',
          'Designed levels around pacing: exploration, tension, combat, and reward.',
          'Combined custom assets, environmental design, and UI feedback to support the narrative.',
        ]}
        technical={[
          'Unity and C# power player movement, combat states, interaction triggers, and progression logic.',
          'Enemy behavior uses detection ranges, environmental triggers, and encounter scripting.',
          'RPG systems include inventory handling, XP-based progression, NPC interactions, and item feedback.',
          'Art and presentation were supported through Blender, Photoshop, and Unity scene composition.',
        ]}
        images={[
          { src: '/artifact-temple.png', alt: 'Temple environment in Artifact of Salvation', caption: 'Temple exploration environment.' },
          { src: '/artifact-banner.png', alt: 'Artifact of Salvation boss scene', caption: 'Story and confrontation imagery.' },
        ]}
        outcome="The prototype was praised for its story ambition and variety of gameplay systems. It strengthened my ability to connect object-oriented code architecture with player-facing design and game feel."
        links={[
          { label: 'View GitHub Repository', href: 'https://github.com/AlexandraLHeureuxECE/final-project-fantastic6' },
        ]}
      />
    </ProjectShell>
  );
}
