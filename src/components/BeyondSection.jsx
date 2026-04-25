import { motion } from 'framer-motion';
import '../styles/BeyondSection.css';

const beyondItems = [
  {
    title: 'PSA President',
    label: 'Student Leadership',
    image: '/psa-president.jpg',
    caption: 'Cultural programming, team coordination, and campus community building.',
    text: 'Leading student initiatives that bring people together through cultural programming, event execution, and community-focused collaboration.',
    tags: ['Leadership', 'Culture', 'Events'],
  },
  {
    title: 'Vice President of Hemoglobal',
    label: 'Healthcare Advocacy',
    image: '/hemoglobal-vp.jpg',
    caption: 'Healthcare advocacy through charity events and student engagement.',
    text: 'Supporting healthcare-focused student advocacy through charity events, organizational leadership, and meaningful campus engagement.',
    tags: ['Advocacy', 'Charity', 'Community'],
  },
  {
    title: 'Swab the World',
    label: 'Community Health',
    image: '/swab-the-world.jpg',
    caption: 'Donor registration awareness for life-saving stem cell campaigns.',
    text: 'Helping build awareness for stem cell donor registration through community outreach, swab collection, and health impact campaigns.',
    tags: ['Health Impact', 'Outreach', 'Donors'],
  },
  {
    title: 'WICSA Fashion Show Model',
    label: 'Creative Involvement',
    image: '/wicsa-fashion-show.jpg',
    caption: 'Stage presence, confidence, and cultural representation.',
    text: 'Participating in campus events that celebrate creative expression, confidence, cultural representation, and community involvement.',
    tags: ['Creativity', 'Campus', 'Culture'],
  },
  {
    title: 'Car Refurbishment / Side Hustle',
    label: 'Automotive Venture',
    image: '/car-refurbishment.jpg',
    caption: 'Hands-on restoration, detailing, visual design, and entrepreneurship.',
    text: 'Refurbishing and customizing vehicles through hands-on restoration, detailing, visual design, and entrepreneurial execution.',
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
