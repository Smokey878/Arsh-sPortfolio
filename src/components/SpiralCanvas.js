import { useRef, useEffect } from 'react';

export default function SpiralCanvas() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const motionOffsetX = 70;
    const motionOffsetY = -100;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const motionCenterX = centerX + motionOffsetX;
    const motionCenterY = centerY + motionOffsetY;

    const underlineY = centerY + 40;
    const underlineLength = 280;

    const numStrings = 7;
    const trailLength = 30;

    const colors = [
      '#BFA181', '#C0C0C0', '#3D3D3D',
      '#FFFFFF', '#6A5ACD', '#4B0082', '#999999',
    ];

    const phases = {
      LAUNCH: 30,
      WAVE: 100,
      OVERSHOOT: 60,
      CURL_BACK: 80,
      SLAM: 60,
    };

    const totalFrames = Object.values(phases).reduce((a, b) => a + b, 0);

    const particles = Array.from({ length: numStrings }, (_, i) => ({
      trail: [],
      color: colors[i % colors.length],
      settleProgress: 0,
    }));

    let globalTime = 0;

    function getPathPosition(t, i) {
      const delay = i * 25;
      const tOffset = t - delay;
      if (tOffset < 0) return { x: -999, y: -999 };

      const [p1, p2, p3, p4, p5] = [
        phases.LAUNCH,
        phases.LAUNCH + phases.WAVE,
        phases.LAUNCH + phases.WAVE + phases.OVERSHOOT,
        phases.LAUNCH + phases.WAVE + phases.OVERSHOOT + phases.CURL_BACK,
        totalFrames,
      ];

      const startX = motionCenterX - 400;
      const baseY = motionCenterY;

      if (tOffset < p1) {
        const x = startX + tOffset * 5;
        return { x, y: baseY };
      }

      if (tOffset < p2) {
        const waveT = tOffset - p1;
        const x = startX + p1 * 5 + waveT * 3;
        const y = baseY + 50 * Math.sin(waveT * 0.1) + 20 * Math.sin(waveT * 0.3 + i);
        return { x, y };
      }

      if (tOffset < p3) {
        const prog = (tOffset - p2) / phases.OVERSHOOT;
        const eased = easeOutSine(prog);
        const fromX = motionCenterX + 50;
        const toX = motionCenterX + 100;
        const y = motionCenterY + 10 * Math.sin(prog * Math.PI * 2 + i);
        return {
          x: fromX + (toX - fromX) * eased,
          y,
        };
      }

      if (tOffset < p4) {
        const prog = (tOffset - p3) / phases.CURL_BACK;
        const eased = easeInOutQuad(prog);
        const fromX = motionCenterX + 100;
        const toX = centerX - underlineLength / 2 + (i * (underlineLength / (numStrings - 1)));
        const midY = motionCenterY - 50 + 10 * Math.sin(i);
        return {
          x: fromX + (toX - fromX) * eased,
          y: midY + (motionCenterY - midY) * eased,
        };
      }

      if (tOffset < p5) {
        const prog = (tOffset - p4) / phases.SLAM;
        const eased = easeInOutQuad(prog);
        const x = centerX - underlineLength / 2 + (i * (underlineLength / (numStrings - 1)));
        const fromY = motionCenterY;
        return {
          x,
          y: fromY + (underlineY - fromY) * eased,
        };
      }

      return {
        x: centerX - underlineLength / 2 + (i * (underlineLength / (numStrings - 1))),
        y: underlineY,
      };
    }

    function updateParticles() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'; // softer transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      

      particles.forEach((p, i) => {
        const pos = getPathPosition(globalTime, i);
        if (pos.x !== -999) p.trail.push(pos);
        if (p.trail.length > trailLength) p.trail.shift();

        for (let j = 0; j < p.trail.length - 1; j++) {
          const a = p.trail[j];
          const b = p.trail[j + 1];
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      });

      if (globalTime > totalFrames + 180) {
        const gradient = ctx.createLinearGradient(
          centerX - underlineLength / 2,
          underlineY,
          centerX + underlineLength / 2,
          underlineY
        );
        gradient.addColorStop(0, '#C0C0C0');
        gradient.addColorStop(0.5, '#FFFFFF');
        gradient.addColorStop(1, '#BFA181');

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.shadowColor = 'white';
        ctx.shadowBlur = 15;
        ctx.lineWidth = 4;
        ctx.moveTo(centerX - underlineLength / 2, underlineY);
        ctx.lineTo(centerX + underlineLength / 2, underlineY);
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      globalTime++;
      requestAnimationFrame(updateParticles);
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function easeOutSine(t) {
      return Math.sin((t * Math.PI) / 2);
    }

    updateParticles();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    />
  );
}
