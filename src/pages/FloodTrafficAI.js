import '../styles/ProjectLayout.css';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import ProjectShell from '../components/ProjectShell';

export default function FloodTrafficAI() {
  return (
    <ProjectShell>
      <ProjectCaseStudy
        title="Flood-Responsive Traffic Light System"
        summary="An Arduino-based traffic signal prototype that detects flooding and redirects drivers away from unsafe routes."
        tech={['Arduino', 'C++', 'Water Sensors', 'LED Matrix', 'Routing Logic']}
        heroImage="/flood-sensor.png"
        heroAlt="Flood sensor prototype"
        snapshot={[
          { label: 'Role', value: 'Embedded systems' },
          { label: 'Timeline', value: 'Engineering prototype' },
          { label: 'Focus', value: 'Safety and routing' },
          { label: 'Output', value: 'Working hardware demo' },
        ]}
        overview="This prototype addresses flood-prone rural roads where GPS or cellular service may not be reliable. The system senses rising water levels and activates clear LED traffic signals that guide drivers away from unsafe areas."
        problem="Flooding can develop faster than drivers receive reliable route updates. The goal was to create a local, GPS-independent warning system that could detect water risk and provide immediate directional guidance."
        approach={[
          'Integrated water sensor readings with Arduino logic to detect unsafe flood conditions.',
          'Used LED matrix signals and directional arrows to communicate rerouting decisions clearly.',
          'Tested visibility across simulated day, night, and fog conditions.',
          'Designed for fail-safe operation with battery backup and manual override considerations.',
        ]}
        technical={[
          'Sensor detection targeted approximately +/-2 cm water-level accuracy.',
          'Arduino C++ logic interprets sensor values and switches between normal and flood-response states.',
          'LED matrix output provides directionally readable arrows for route guidance.',
          'Routing behavior was modeled around scenario-based decision logic for flood avoidance.',
        ]}
        images={[
          { src: '/floodlight-banner.png', alt: 'Arduino water sensor setup', caption: 'Sensor and controller setup.' },
          { src: '/flood-light-demo.png', alt: 'Flood traffic light demo', caption: 'LED signal behavior during testing.' },
        ]}
        outcome="The prototype demonstrated fast response time, clear directional output, and practical embedded-systems thinking for public safety. It reinforced the importance of designing for unreliable environments, not ideal conditions."
      />
    </ProjectShell>
  );
}
