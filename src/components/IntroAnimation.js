import { useEffect, useRef, useState } from 'react'; 
import { Typewriter } from 'react-simple-typewriter';
import SpiralCanvas from './SpiralCanvas';
import '../styles/IntroAnimation.css';

export default function IntroAnimation({ onFinish, onSkipIntro }) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [consoleText, setConsoleText] = useState('> Initializing...');
  const [fade, setFade] = useState(false);
  const skippedRef = useRef(false);

  useEffect(() => {
    const promptTimer = setTimeout(() => setShowPrompt(true), 6500);

    const steps = [
      '> Initializing modules...',
      '> Calibrating interface...',
      '> Loading particles...',
      '> System ready',
    ];

    const stepTimers = steps.map((text, i) =>
      setTimeout(() => setConsoleText(text), i * 2000)
    );

    return () => {
      clearTimeout(promptTimer);
      stepTimers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (fade) return undefined;

    const skipIntro = () => {
      if (skippedRef.current) return;
      skippedRef.current = true;
      setFade(true);
      onSkipIntro();
    };

    window.addEventListener('keydown', skipIntro);
    window.addEventListener('pointerdown', skipIntro);

    return () => {
      window.removeEventListener('keydown', skipIntro);
      window.removeEventListener('pointerdown', skipIntro);
    };
  }, [fade, onSkipIntro]);

  const handleClick = () => {
    if (skippedRef.current) return;
    if (!showPrompt) return;
    skippedRef.current = true;
    setFade(true);
    setTimeout(() => {
      onFinish();
    }, 1200); // match the CSS transition duration
  };

  return (
    <div className={`intro-container ${fade ? 'fade-out' : 'fade-in'}`} onClick={handleClick}>
      <SpiralCanvas />

      <div className="intro-skip-hint" aria-hidden="true">
        <span>press any key to skip</span>
      </div>
    
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
