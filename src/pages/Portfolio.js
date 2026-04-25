import '../styles/ProjectLayout.css';
import ProjectCaseStudy from '../components/ProjectCaseStudy';
import ProjectShell from '../components/ProjectShell';

export default function Portfolio() {
  return (
    <ProjectShell>
      <ProjectCaseStudy
        title="Personal Portfolio Website"
        summary="A custom React portfolio built to present projects, experience, and personal brand through a polished dark interface."
        tech={['React', 'JavaScript', 'CSS3', 'Framer Motion', 'Responsive Design']}
        heroImage="/portfolio.png"
        heroAlt="Portfolio website preview"
        snapshot={[
          { label: 'Role', value: 'Designer + developer' },
          { label: 'Timeline', value: 'Iterative personal build' },
          { label: 'Focus', value: 'Brand, motion, UX' },
          { label: 'Output', value: 'Live portfolio site' },
        ]}
        overview="This portfolio acts as a central hub for my software, engineering, automotive, and creative work. It was built as a fully custom React site rather than a template so the interaction design, content structure, and project pages could evolve with my work."
        problem="I needed a site that felt professional but still personal: technically credible, easy to scan, responsive on every screen size, and flexible enough to support detailed project case studies."
        approach={[
          'Structured the homepage around clear sections for background, experience, skills, projects, and community involvement.',
          'Used React components to keep the site modular as new projects and sections are added.',
          'Designed a dark premium visual system with glassmorphism, motion, subtle particles, and restrained accent color.',
          'Refined responsive layouts across hero, cards, grids, and detail pages to avoid horizontal overflow.',
        ]}
        technical={[
          'React Router powers dedicated project pages and direct section navigation.',
          'Framer Motion is used for subtle entrance animations and timeline interactions.',
          'A reusable canvas particle background adds ambient motion without blocking clicks or scrolling.',
          'CSS grid, flex-wrap, clamp(), and responsive media queries keep layouts consistent across desktop and mobile.',
        ]}
        images={[
          { src: '/portfoliohome.png', alt: 'Portfolio homepage screenshot', caption: 'Homepage layout and hero treatment.' },
          { src: '/portfolioprojects.png', alt: 'Portfolio projects section screenshot', caption: 'Projects section and card system.' },
        ]}
        outcome="The project strengthened my React architecture, visual design, and responsive CSS skills. It also gave me a professional platform that can continue growing as my engineering portfolio becomes more specialized."
        links={[
          { label: 'View on GitHub', href: 'https://github.com/Smokey878/Arsh-sPortfolio' },
        ]}
      />
    </ProjectShell>
  );
}
