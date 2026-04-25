import '../styles/ProjectLayout.css';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import ProjectShell from '../components/ProjectShell';

export default function PCBuild() {
  return (
    <ProjectShell>
      <ProjectCaseStudy
        title="Custom PC Build"
        summary="A high-performance workstation assembled and tuned for development, gaming, rendering, and hardware experimentation."
        tech={['RTX 3070', 'Ryzen 7 5800X', 'Thermals', 'BIOS Tuning', 'Cable Management']}
        heroImage="/pcbuild.png"
        heroAlt="Custom PC build"
        snapshot={[
          { label: 'Role', value: 'Builder + optimizer' },
          { label: 'Timeline', value: 'Personal hardware build' },
          { label: 'Focus', value: 'Performance and thermals' },
          { label: 'Output', value: 'Daily workstation' },
        ]}
        overview="This build was assembled from the ground up to support software development, gaming, and creative workloads. The goal was not just raw performance, but a balanced system with strong thermals, clean cable routing, quiet operation, and future upgrade flexibility."
        problem="High-performance components can quickly run into clearance, airflow, noise, and compatibility issues. The build required careful component planning and post-build tuning to keep performance stable under sustained loads."
        approach={[
          'Selected components around GPU clearance, CPU thermals, motherboard capability, and upgrade paths.',
          'Planned airflow and cable routing before final assembly to keep the system clean and serviceable.',
          'Configured BIOS settings, memory profile, and fan behavior for balanced thermals and acoustics.',
          'Benchmarked and tested the system across gaming, development, and rendering workflows.',
        ]}
        technical={[
          'Core specs include RTX 3070, Ryzen 7 5800X, ASUS ROG Strix B550-F, and 32GB DDR4 3600MHz RAM.',
          'Storage combines NVMe SSD performance with additional HDD capacity for larger assets and project files.',
          'Cooling uses a dual-tower air cooler and mesh-focused case airflow to maintain stable temperatures.',
          'Power delivery is handled by a 750W 80+ Gold PSU for reliability and future expansion headroom.',
        ]}
        images={[
          { src: '/pcbuildfull.jpg', alt: 'Completed custom PC build', caption: 'Completed build with internal layout.' },
          { src: '/pcbuildcables.jpg', alt: 'Cable management view', caption: 'Cable routing and rear-side management.' },
        ]}
        outcome="The system became my main development and creative workstation, cutting compile and rendering times while reinforcing practical knowledge of hardware compatibility, thermal design, and systems-level tradeoffs."
      />
    </ProjectShell>
  );
}
