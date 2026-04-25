import '../styles/ProjectLayout.css';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import ProjectShell from '../components/ProjectShell';

export default function PlantWatering() {
  return (
    <ProjectShell>
      <ProjectCaseStudy
        title="Autonomous Plant Watering System"
        summary="An accessible gravity-fed watering cart designed to help differently abled volunteers maintain garden beds with less physical strain."
        tech={['Python', 'GPIO', 'Raspberry Pi', 'Embedded Systems', 'Accessible Design']}
        heroImage="/plant-watering.png"
        heroAlt="Autonomous plant watering system prototype"
        snapshot={[
          { label: 'Role', value: 'Design + embedded systems' },
          { label: 'Timeline', value: 'Engineering design project' },
          { label: 'Focus', value: 'Accessibility and usability' },
          { label: 'Output', value: 'Prototype + report' },
        ]}
        overview="This project was developed for Hutton House's accessible gardening initiative. The system uses a stable, maneuverable cart, an 18L tank, and controlled gravity-fed water flow to reduce physical effort while preserving independence for users with mobility constraints."
        problem="Traditional watering cans are heavy, repetitive, and difficult to manage for volunteers using mobility aids. The goal was to design a low-maintenance solution that improved capacity, movement, and control without creating a complicated technical barrier."
        approach={[
          'Designed around universal ergonomics, storage constraints, and safe movement beside wheelchairs or walkers.',
          'Used gravity-fed flow instead of an electrical pump to keep the system reliable, low-cost, and easy to maintain.',
          'Validated the tank height, hose geometry, and flow control against user comfort and watering consistency.',
          'Prioritized tool-less assembly, weather resistance, and stable handling for real outdoor use.',
        ]}
        technical={[
          'Water flow was capped near 100ml/s to balance watering speed with controllability.',
          'The cart uses an 18L tank with a stable base and hose routing designed to minimize spillage during movement.',
          'Raspberry Pi and GPIO concepts informed potential future sensor integration for moisture monitoring or timed valves.',
          'Design constraints included less than 0.3 m² storage footprint and movement force below 0.5 lbs.',
        ]}
        images={[
          { src: '/plant-watering.png', alt: 'Full plant watering prototype', caption: 'Full prototype view.' },
          { src: '/project1-screen2.png', alt: 'Plant watering hose mechanism', caption: 'Hose and flow-control detail.' },
        ]}
        outcome="The final concept delivered a 2.4x capacity improvement over a basic watering can and received positive feedback during the engineering showcase. The project reinforced how accessibility-focused engineering can turn a simple daily task into a more independent, dignified experience."
        links={[
          { label: 'Download Full Report', href: '/Plant%20Watering%20Report.pdf' },
        ]}
      />
    </ProjectShell>
  );
}
