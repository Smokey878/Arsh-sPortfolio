import { useEffect, useState } from 'react'; 
import { Typewriter } from 'react-simple-typewriter';
import SpiralCanvas from './SpiralCanvas';
import '../styles/IntroAnimation.css';

export default function IntroAnimation({ onFinish }) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [consoleText, setConsoleText] = useState('> Initializing...');
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const promptTimer = setTimeout(() => setShowPrompt(true), 6500);

    const steps = [
      '> Initializing modules...',
      '> Calibrating interface...',
      '> Loading particles...',
      '> System ready',
    ];

    steps.forEach((text, i) => {
      setTimeout(() => setConsoleText(text), i * 2000);
    });

    return () => clearTimeout(promptTimer);
  }, []);

  const handleClick = () => {
    if (!showPrompt) return;
    setFade(true);
    setTimeout(() => {
      onFinish();
    }, 1200); // match the CSS transition duration
  };

  return (
    <div className={`intro-container ${fade ? 'fade-out' : 'fade-in'}`} onClick={handleClick}>
      <SpiralCanvas />
    
<div className="intro-text">
  <h1 className="intro-name">
    <Typewriter
      words={['Arsh Mobeen']}
      loop={1}
      cursor
      cursorStyle="_"
      typeSpeed={100}
      delaySpeed={900}
    />
  </h1>
</div>



      <img
        src="/logo.png"
        alt="logo"
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          opacity: 0.35,
          width: 150,
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* ✅ Console-style status line */}
      <div style={{
        position: 'absolute',
        bottom: 20,
        left: 30,
        color: '#6A5ACD',
        fontFamily: 'monospace',
        fontSize: '0.95rem',
        opacity: 0.7,
        zIndex: 3,
        textShadow: '0 0 2px #000',
      }}>
        {consoleText}
      </div>

      {showPrompt && (
        <p className="proceed-text">Click anywhere to proceed.</p>
      )}
    </div>
  );
}
