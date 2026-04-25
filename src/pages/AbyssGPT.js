import '../styles/ProjectLayout.css';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import ProjectShell from '../components/ProjectShell';

export default function AbyssGPT() {
  return (
    <ProjectShell>
      <ProjectCaseStudy
        title="AbyssGPT"
        summary="A deep-sea exploration assistant that combines natural language querying, route planning, risk scoring, and interactive mapping."
        tech={['Python', 'Streamlit', 'Plotly', 'Pandas', 'NetworkX', 'NLP']}
        heroImage="/abyss-gpt.png"
        heroAlt="AbyssGPT interface preview"
        snapshot={[
          { label: 'Role', value: 'Prototype developer' },
          { label: 'Timeline', value: 'Hackathon build' },
          { label: 'Focus', value: 'Exploration intelligence' },
          { label: 'Output', value: 'Interactive assistant' },
        ]}
        overview="AbyssGPT was built as an intelligent assistant for deep-sea scientists planning submarine exploration. It connects environmental data, graph-based routing, and natural language interaction into a single exploratory interface."
        problem="Deep-sea exploration involves route uncertainty, environmental risk, and data-heavy decision-making. The goal was to make exploration planning more understandable by combining algorithmic recommendations with an interface researchers could query naturally."
        approach={[
          'Modeled exploration points as a graph where routes could be weighted by distance, risk, or environmental constraints.',
          'Built an interactive Streamlit interface for querying scenarios and visualizing route options.',
          'Used Plotly maps and charts to make route decisions and environmental scores easier to interpret.',
          'Connected Pandas data processing with NetworkX pathfinding to support dynamic recommendations.',
        ]}
        technical={[
          'NetworkX and A* pathfinding support route generation through weighted graph structures.',
          'Pandas pipelines prepare exploration data for scoring, filtering, and visualization.',
          'NLP-style prompt handling lets users ask exploration questions in a more natural way.',
          'Streamlit provides a lightweight product surface for rapid iteration and live interaction.',
        ]}
        images={[
          { src: '/abyss-gpt.png', alt: 'AbyssGPT product interface', caption: 'Prototype interface for exploration planning.' },
        ]}
        outcome="The project demonstrated how AI-facing interfaces can sit on top of classical algorithms and data workflows. It pushed me to think about technical usefulness, not just novelty, in a hackathon setting."
      />
    </ProjectShell>
  );
}
