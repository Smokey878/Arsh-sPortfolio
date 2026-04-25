import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const comet = [];
    const sparks = [];
    let animationFrame;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let lastSparkAt = 0;
    const cursor = {
      x: width / 2,
      y: height / 2,
      speed: 0,
      active: false,
    };

    const particleCount = () =>
      Math.min(72, Math.max(44, Math.floor((width * height) / 18000)));

    const createParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      size: Math.random() * 1.6 + 0.6,
      alpha: Math.random() * 0.35 + 0.18,
      phase: Math.random() * Math.PI * 2,
    });

    const createCometParticle = (index) => ({
      x: cursor.x,
      y: cursor.y,
      vx: 0,
      vy: 0,
      size: 3.2 - index * 0.12,
    });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles.length = 0;
      for (let i = 0; i < particleCount(); i += 1) {
        particles.push(createParticle());
      }

      comet.length = 0;
      for (let i = 0; i < 14; i += 1) {
        comet.push(createCometParticle(i));
      }
    };

    const handlePointerMove = (event) => {
      const dx = event.clientX - cursor.x;
      const dy = event.clientY - cursor.y;
      const nextSpeed = Math.hypot(dx, dy);
      const acceleration = nextSpeed - cursor.speed;
      const now = performance.now();

      cursor.x = event.clientX;
      cursor.y = event.clientY;
      cursor.speed = nextSpeed;
      cursor.active = true;

      if (acceleration > 18 && now - lastSparkAt > 80) {
        const sparkCount = Math.random() > 0.55 ? 2 : 1;

        for (let i = 0; i < sparkCount; i += 1) {
          const angle = Math.atan2(dy, dx) + Math.PI + (Math.random() - 0.5) * 1.2;
          const velocity = Math.random() * 1.8 + 1.2;

          sparks.push({
            x: cursor.x,
            y: cursor.y,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity,
            life: 1,
            size: Math.random() * 1.2 + 0.5,
          });
        }

        lastSparkAt = now;
      }
    };

    const handlePointerLeave = () => {
      cursor.active = false;
      cursor.speed = 0;
    };

    const animate = (time) => {
      ctx.clearRect(0, 0, width, height);
      cursor.speed *= 0.92;
      const visibleCometLength = cursor.active
        ? Math.min(14, Math.max(8, Math.floor(8 + cursor.speed / 7)))
        : 0;

      for (let i = 0; i < comet.length; i += 1) {
        const c = comet[i];
        const leader = i === 0 ? cursor : comet[i - 1];
        const lag = 0.16 - Math.min(i * 0.006, 0.07);
        const pull = i === 0 ? 0.28 : lag;

        c.vx += (leader.x - c.x) * pull;
        c.vy += (leader.y - c.y) * pull;
        c.vx *= 0.62;
        c.vy *= 0.62;
        c.x += c.vx;
        c.y += c.vy;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        const driftX = Math.cos(time * 0.00025 + p.phase) * 0.045;
        const driftY = Math.sin(time * 0.00022 + p.phase) * 0.045;

        for (let j = 0; j < visibleCometLength; j += 1) {
          const c = comet[j];
          const dx = p.x - c.x;
          const dy = p.y - c.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 90 && distance > 0.01) {
            const force = (1 - distance / 90) * 0.035 * (1 - j / comet.length);
            p.vx += (dx / distance) * force;
            p.vy += (dy / distance) * force;
          }
        }

        p.vx *= 0.965;
        p.vy *= 0.965;
        p.x += p.vx + driftX;
        p.y += p.vy + driftY;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.beginPath();
        ctx.fillStyle = `rgba(190, 184, 255, ${p.alpha})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);

          if (distance < 115 && Math.random() > 0.58) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(126, 214, 255, ${(1 - distance / 115) * 0.08})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let i = visibleCometLength - 1; i >= 0; i -= 1) {
        const c = comet[i];
        const fade = 1 - i / visibleCometLength;
        const speedGlow = Math.min(cursor.speed / 80, 1);

        ctx.beginPath();
        ctx.fillStyle = `rgba(170, 160, 255, ${0.035 + fade * 0.12 + speedGlow * 0.04})`;
        ctx.arc(c.x, c.y, Math.max(0.8, c.size * fade), 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const spark = sparks[i];
        spark.life -= 0.055;
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vx *= 0.94;
        spark.vy *= 0.94;

        if (spark.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(126, 214, 255, ${spark.life * 0.22})`;
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" aria-hidden="true" />;
}
