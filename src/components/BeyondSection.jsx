import { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/BeyondSection.css';

const beyondItems = [
  {
    icon: '🚀',
title: 'Leadership & Involvement',
text: `As VP Events for Western's Pakistani Students Association, I organized and executed large-scale cultural and networking events. With Western Formula Racing, I contributed to the electronics and data acquisition systems for the team’s race car. Additionally, I support marketing and outreach initiatives for the i3 Institute, developing communication strategies to drive engagement.`,

  },
{
  icon: '🎉',
  title: 'Events & Leadership',
  text: `As VP Events for Western's Pakistani Students Association, I managed the full cycle of event planning for high-profile cultural galas, networking mixers, and charity fundraisers, often hosting over 300+ attendees. This involved coordinating sponsors, venues, marketing, budgeting, and cross-functional teams, all while delivering seamless experiences under tight deadlines.`,
},
{
  icon: '🚗',
  title: 'Side Hustle: Car Refurbishment',
  text: `I refurbish, customize, and redesign luxury vehicles — blending mechanical precision with aesthetic design. From bodywork restoration, paint correction, and interior detailing to performance upgrades and full cosmetic transformations, I apply engineering skill and creative vision to bring high-end automotive projects to life.`,
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
