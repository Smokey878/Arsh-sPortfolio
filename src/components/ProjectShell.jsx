import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import PortfolioChatbot from './PortfolioChatbot';

const navItems = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Workshops & Research', 'workshops'],
  ['Beyond Engineering', 'beyond'],
  ['Contact', 'contact'],
];

export default function ProjectShell({ children }) {
  const homeHref = '/?skipIntro=true';
  const sectionHref = (sectionId) => `${homeHref}#${sectionId}`;

  return (
    <div className="project-shell">
      <ParticleBackground />
      <PortfolioChatbot />

      <nav className="top-nav project-top-nav">
        <div className="nav-left">
          <a href={homeHref} className="nav-name">Arsh Mobeen</a>
        </div>
        <ul className="nav-links">
          {navItems.map(([label, sectionId]) => (
            <li key={sectionId}>
              <a href={sectionHref(sectionId)}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <motion.main
        className="project-page"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.main>
    </div>
  );
}
