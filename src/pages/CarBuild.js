import '../styles/ProjectLayout.css';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import ProjectShell from '../components/ProjectShell';

export default function CarBuild() {
  return (
    <ProjectShell>
      <ProjectCaseStudy
        title="Custom BMW F30 Build"
        summary="A performance-aesthetic BMW 330i build combining tuning, airflow upgrades, body styling, and interior lighting."
        tech={['ECU Tune', 'Intercooler', 'Cold Air Intake', 'Body Kit', 'Starlight Wiring']}
        heroImage="/bmw.jpg"
        heroAlt="Custom BMW F30 build"
        snapshot={[
          { label: 'Role', value: 'Builder + designer' },
          { label: 'Timeline', value: 'Personal automotive build' },
          { label: 'Focus', value: 'Performance and aesthetics' },
          { label: 'Output', value: 'Modified BMW F30' },
        ]}
        overview="This build transforms a BMW F30 330i into a more expressive performance-aesthetic platform. It combines airflow and tuning upgrades with exterior styling and interior starlight lighting to create a car that feels engineered and designed."
        problem="The challenge was balancing performance, reliability, fitment, and visual identity. Each modification needed to work with the car's existing systems while contributing to a cohesive final build."
        approach={[
          'Installed performance-focused upgrades including ECU tuning, intercooler improvements, and cold air intake hardware.',
          'Planned exterior styling around a front lip, rear diffuser, side skirt treatment, and overall body-kit fitment.',
          'Integrated ambient starlight roof lighting while preserving interior usability and clean wiring paths.',
          'Tested fitment, airflow, and drivability after each modification instead of treating the build as purely cosmetic.',
        ]}
        technical={[
          'The ECU tune improves throttle response, torque delivery, and overall drivability.',
          'Intercooler and intake upgrades support improved airflow and lower charge-air temperatures under load.',
          'Body components required alignment, mounting discipline, and attention to panel gaps.',
          'Interior lighting involved electrical routing, remote control behavior, and clean concealment of wiring.',
        ]}
        images={[
          { src: '/bmw.jpg', alt: 'BMW F30 exterior build', caption: 'Exterior view of the modified F30.' },
        ]}
        outcome="The project strengthened my hands-on understanding of automotive systems, electrical routing, fitment, and aesthetic execution. It also reflects my broader interest in merging engineering precision with luxury design."
      />
    </ProjectShell>
  );
}
