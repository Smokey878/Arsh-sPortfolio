import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function CaseSection({ title, children }) {
  return (
    <motion.section
      className="case-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h2>{title}</h2>
      {children}
    </motion.section>
  );
}

function TextBlock({ content }) {
  if (Array.isArray(content)) {
    return content.map((paragraph) => <p key={paragraph}>{paragraph}</p>);
  }

  return <p>{content}</p>;
}

function BulletList({ items }) {
  return (
    <ul className="case-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ProjectCaseStudy({
  title,
  summary,
  tech,
  heroImage,
  heroAlt,
  snapshot,
  overview,
  problem,
  approach,
  technical,
  outcome,
  images = [],
  links = [],
}) {
  return (
    <>
      <section className="project-hero">
        <div className="project-hero-copy">
          <p className="project-eyebrow">Project Case Study</p>
          <h1>{title}</h1>
          <p className="project-summary">{summary}</p>
          <div className="project-tech-pills">
            {tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        {heroImage && (
          <div className="project-hero-media">
            <img src={heroImage} alt={heroAlt || `${title} preview`} />
          </div>
        )}
      </section>

      <section className="project-snapshot" aria-label="Project snapshot">
        {snapshot.map((item) => (
          <div className="snapshot-item" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </section>

      <CaseSection title="Overview">
        <TextBlock content={overview} />
      </CaseSection>

      <CaseSection title="Problem / Goal">
        <TextBlock content={problem} />
      </CaseSection>

      <CaseSection title="Approach">
        <BulletList items={approach} />
      </CaseSection>

      <CaseSection title="Technical Details and Key Features">
        <BulletList items={technical} />
      </CaseSection>

      {images.length > 0 && (
        <CaseSection title="Visuals">
          <div className="case-image-grid">
            {images.map((image) => (
              <figure key={image.src}>
                <img src={image.src} alt={image.alt} />
                {image.caption && <figcaption>{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </CaseSection>
      )}

      <CaseSection title="Outcome / Reflection">
        <TextBlock content={outcome} />
      </CaseSection>

      {links.length > 0 && (
        <section className="project-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </section>
      )}
    </>
  );
}
