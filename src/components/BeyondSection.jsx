import { motion } from 'framer-motion';
import '../styles/BeyondSection.css';

const beyondItems = [
  {
    title: 'Pakistani Students’ Association President',
    label: 'Student Leadership',
    image: '/psa-president.JPEG',
    caption: 'Cultural programming, team leadership, and student representation.',
    text: 'Leading cultural and community initiatives, managing event teams, representing students, and building programming that creates a stronger campus community.',
    tags: ['Leadership', 'Culture', 'Programming'],
  },
  {
    title: 'Vice President of Hemoglobal',
    label: 'Healthcare Advocacy',
    image: '/hemoglobal-vp.jpg',
    caption: 'Healthcare advocacy through student leadership and campus engagement.',
    text: 'Supporting healthcare advocacy through student leadership, charity initiatives, awareness programming, and campus engagement around accessible health impact.',
    tags: ['Advocacy', 'Healthcare', 'Community'],
  },
  {
    title: 'Swab the World',
    label: 'Community Health',
    image: '/swab-the-world.JPEG',
    caption: 'Swab drives, donor outreach, and stem cell registration awareness.',
    text: 'Organizing swab drives, recruiting students to register and swab, building awareness, and supporting donor outreach for life-saving stem cell matches.',
    tags: ['Health Impact', 'Swab Drives', 'Donors'],
  },
  {
    title: 'WICSA Cultural Performance',
    label: 'Creative Involvement',
    image: '/wicsa-fashion-show.jpg',
    caption: 'Cultural performance, dance, and collaborative stage production.',
    text: 'Contributing to a cultural performance through dance, creative expression, stage presence, and collaborative event production.',
    tags: ['Performance', 'Culture', 'Stage'],
  },
  {
    title: 'Car Refurbishment / Side Hustle',
    label: 'Automotive Venture',
    image: '/car-refurbishment.png',
    caption: 'Hands-on restoration, detailing, visual design, and entrepreneurship.',
    text: 'Refurbishing and customizing vehicles through restoration, detailing, visual upgrades, and a hands-on venture mindset.',
    tags: ['Automotive', 'Design', 'Venture'],
  },
  {
title: "Mock Trial President",
subtitle: "Leadership • Advocacy • Strategy",
image: "/mock-trial.jpg",
caption: "Leading through strategy, advocacy, and high-pressure competition.",

text:
"As President of Mock Trial, I led competitive case preparation, coached team members, and developed argument strategy in fast-paced simulated courtroom settings.",

tags: [
"Public Speaking",
"Leadership",
"Strategy",
"Advocacy",
"Team Coaching"
]
}
];

export default function BeyondSection() {
  return (
    <section className="beyond" id="beyond">
      <div className="beyond-heading">
        <h2 className="section-title">Beyond Engineering</h2>
        <p>
          Leadership, community work, creative involvement, and ventures that shape how I build beyond code.
        </p>
      </div>

      <div className="beyond-grid">
        {beyondItems.map((item, index) => (
          <motion.article
            key={item.title}
            className="beyond-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
          >
            <div
              className="beyond-image"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(106, 90, 205, 0.22), rgba(79, 195, 247, 0.08)), url('${item.image}')`,
              }}
            >
              <div className="beyond-image-caption">
                <span>{item.caption}</span>
              </div>
            </div>

            <div className="beyond-content">
              <p className="beyond-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="beyond-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
