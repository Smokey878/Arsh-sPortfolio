import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/BeyondSection.css';

const beyondItems = [
  {
    icon: '🏀',
    title: 'Sports & Extracurriculars',
    text: `From basketball courts to gym floors, my passion for physical activity fuels my mental discipline. I'm also deeply involved in engineering student clubs, where collaboration turns ideas into action.`,
  },
  {
    icon: '🎉',
    title: 'Events & Leadership',
    text: `Whether it's organizing tech nights or coordinating F1 Racing Team showcases, I thrive in bringing people together under pressure — delivering both structure and flair in execution.`,
  },
  {
    icon: '🚗',
    title: 'Side Hustle: Car Refurbishment',
    text: `I refurbish and redesign luxury vehicles — blending engineering with artistry. From aesthetic mods to full transformations, this is where my design instincts meet horsepower.`,
  },
];

export default function BeyondSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="beyond" id="beyond">
      <h2 className="section-title">Beyond Engineering</h2>

      <div className="beyond-grid">
        {beyondItems.map((item, index) => (
          <motion.div
            key={index}
            className="beyond-card"
            whileHover={{ rotateX: 5, rotateY: -5 }}
            transition={{ type: 'spring', stiffness: 150 }}
            onClick={() => setActiveIndex(index)}
          >
            <motion.div
              className="beyond-icon"
              whileHover={{ scale: 1.3, textShadow: '0px 0px 8px #00ffaa' }}
            >
              {item.icon}
            </motion.div>
            <div className="beyond-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Simple Modal */}
      {activeIndex !== null && (
        <div className="beyond-modal" onClick={() => setActiveIndex(null)}>
          <motion.div
            className="beyond-modal-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3>{beyondItems[activeIndex].title}</h3>
            <p>{beyondItems[activeIndex].text}</p>
            <p className="modal-note">More details coming soon.</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
