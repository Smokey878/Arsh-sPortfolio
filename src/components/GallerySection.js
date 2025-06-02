import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/GallerySection.css';

const galleryImages = [
  {
    src: './f1-car.jpg',
    alt: 'F1 electronics',
    caption: 'Wiring sensors in our Formula-style race car during the 2024 design cycle.',
  },
  {
    src: '/images/lab-work.jpg',
    alt: 'Soldering in lab',
    caption: 'Late-night soldering session for our smart irrigation controller prototype.',
  },
  {
    src: '/images/hackathon.jpg',
    alt: 'Hackathon team',
    caption: 'Presenting our Hack the North submission: a Python-powered emergency alert system.',
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartY = useRef(null);

  const paginate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + galleryImages.length) % galleryImages.length);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (deltaY > 50) paginate(-1);
    else if (deltaY < -50) paginate(1);
  };

  return (
    <section className="vertical-gallery" id="gallery">
      <h2>Engineering Gallery</h2>

      <div
        className="gallery-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="nav-arrow up" onClick={() => paginate(-1)}>↑</button>

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            className="gallery-slide"
            custom={direction}
            initial={{ y: direction > 0 ? 200 : -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction > 0 ? -200 : 200, opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <img src={galleryImages[current].src} alt={galleryImages[current].alt} />
            <p className="caption">{galleryImages[current].caption}</p>
          </motion.div>
        </AnimatePresence>

        <button className="nav-arrow down" onClick={() => paginate(1)}>↓</button>
      </div>
    </section>
  );
}
