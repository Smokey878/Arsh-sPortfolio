import '../styles/ProjectLayout.css';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import ProjectShell from '../components/ProjectShell';

export default function SpriteAdventureGame() {
  return (
    <ProjectShell>
      <ProjectCaseStudy
        title="Untitled Sprite Adventure RPG"
        summary="A 2D pixel-art adventure game in development, focused on exploration, combat, puzzles, and modular gameplay systems."
        tech={['Unity', 'C#', 'Tilemaps', 'Sprite Animation', 'Gameplay Systems']}
        heroImage="/sprite-adventure.png"
        heroAlt="Sprite adventure game preview"
        snapshot={[
          { label: 'Role', value: 'Solo developer' },
          { label: 'Timeline', value: 'In development' },
          { label: 'Focus', value: '2D systems design' },
          { label: 'Output', value: 'Playable prototype' },
        ]}
        overview="This project explores the structure of classic action RPGs through a modern Unity workflow. The focus is on building clean gameplay systems first, then expanding the world with art, NPCs, encounters, and environmental storytelling."
        problem="2D adventure games can become messy quickly if movement, collisions, interactions, combat, and dialogue are not planned as reusable systems. The goal is to build a flexible foundation before scaling content."
        approach={[
          'Used Unity Tilemaps to block out environments and test exploration flow quickly.',
          'Built player movement and interaction logic around readable, responsive controls.',
          'Developed sprite animation states for traversal, feedback, and combat readability.',
          'Designed early puzzle and NPC interaction hooks that can expand without rewriting core systems.',
        ]}
        technical={[
          'C# scripts organize player state, interaction triggers, scene objects, and gameplay feedback.',
          'Tilemap layers separate collision, decoration, walkable space, and interactable objects.',
          'Animation controllers handle movement and action transitions through sprite-state logic.',
          'The architecture is being kept modular so combat, inventory, and dialogue can evolve independently.',
        ]}
        images={[
          { src: '/sprite-adventure.png', alt: 'Sprite adventure game prototype', caption: 'Early visual direction and gameplay prototype.' },
        ]}
        outcome="The project is helping me practice disciplined game architecture while still leaving room for creative worldbuilding. It is intentionally being built as a system-first prototype rather than a one-off scene."
      />
    </ProjectShell>
  );
}
