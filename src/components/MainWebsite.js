import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import '../styles/MainWebsite.css';
import BeyondSection from './BeyondSection';
import PortfolioChatbot from './PortfolioChatbot';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.31 9.31 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.35 8.02h4.3V23H.35V8.02ZM7.5 8.02h4.12v2.05h.06c.57-1.08 1.97-2.22 4.06-2.22 4.35 0 5.15 2.86 5.15 6.58V23h-4.3v-7.6c0-1.81-.03-4.15-2.53-4.15-2.54 0-2.93 1.98-2.93 4.02V23H7.5V8.02Z" />
  </svg>
);

const emailAddress = 'arshmobeen87817@gmail.com';


function ParticleBackground() {
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
      lastX: width / 2,
      lastY: height / 2,
      speed: 0,
      lastSpeed: 0,
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
      index,
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
      cursor.lastX = cursor.x;
      cursor.lastY = cursor.y;
      cursor.x = event.clientX;
      cursor.y = event.clientY;
      cursor.lastSpeed = cursor.speed;
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

const experienceItems = [
  {
    role: 'HR Technologist Intern',
    organization: 'i3 Institute',
    location: 'Mississauga, ON',
    date: 'June 2025 - October 2025',
    description:
      'Built HR operations tooling around a React/FastAPI dashboard, onboarding workflows, and Python/JavaScript automation for cleaner internal process tracking.',
    highlights: [
      'Implemented dashboard views for onboarding status, task progress, and process bottlenecks.',
      'Automated HR data updates and validation paths to reduce manual handoffs.',
    ],
    tags: ['Python', 'React', 'FastAPI', 'Automation', 'Internal Tools'],
  },
  {
    role: 'Software Engineering Intern',
    organization: 'Elite Life Financial',
    location: 'Mississauga, ON',
    date: 'April 2024 - August 2024',
    description:
      'Developed backend automation and data validation tooling for internal financial workflows, helping operational data move through pipelines with fewer errors.',
    highlights: [
      'Created Python checks for input validation, exception handling, and cleaner data processing.',
      'Automated repetitive review and reporting steps with scripts tied to internal workflow needs.',
    ],
    tags: ['Python', 'Automation', 'Data Engineering', 'JavaScript', 'Backend'],
  },
  {
    role: 'Automotive Systems & Software Specialist',
    organization: 'Pro Color Collision',
    location: 'Burlington, ON',
    date: 'June 2023 - September 2023',
    description:
      'Built practical workflow tooling for automotive repair operations, connecting job tracking, delay alerts, and parts availability into clearer day-to-day visibility.',
    highlights: [
      'Built a Python job tracker to monitor active repair stages and surface stalled work.',
      'Created automated notifications for delay risks, parts shortages, and workflow blockers.',
    ],
    tags: ['Automotive Systems', 'Python', 'Workflow Systems', 'Operations', 'Diagnostics'],
  },
  {
    role: 'Electronic Design Engineer',
    organization: 'Western Formula Racing',
    location: 'London, ON',
    date: 'September 2024 - April 2025',
    description:
      'Supported telemetry and data acquisition work for a Formula-style EV platform, connecting sensor signals, embedded hardware, and testing feedback loops.',
    highlights: [
      'Integrated sensor and microcontroller workflows for vehicle telemetry and diagnostic data.',
      'Supported data logging used for track-side checks and post-run engineering analysis.',
    ],
    tags: ['Embedded', 'Telemetry', 'Sensors', 'Data Acquisition', 'Motorsport'],
  },
  {
    role: 'Strategic Partnerships & Engagement Associate',
    organization: 'Amity Global Foundation',
    location: 'Oakville, ON',
    date: 'May 2024 - August 2024',
    description:
      'Structured partnership outreach like a lightweight pipeline system, organizing stakeholder data, priorities, and follow-up paths for clearer engagement.',
    highlights: [
      'Mapped stakeholder needs into a tracked partnership pipeline for targeted outreach.',
      'Used data-informed prioritization to support clearer partner communication and follow-up.',
    ],
    tags: ['Strategy', 'Analytics', 'Partnerships', 'Stakeholder Engagement'],
  },
];

const experienceCardVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -180,
    y: 40,
  },
  hiddenRight: {
    opacity: 0,
    x: 180,
    y: 40,
  },
  hiddenMobile: {
    opacity: 0,
    x: 0,
    y: 48,
  },
  reduced: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.35,
      delay: 0,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const projectItems = [
  {
    href: '/projects/plant-watering',
    image: './plant-watering1.png',
    title: 'Autonomous Plant Watering System',
    description: 'Accessible irrigation cart designed for independent garden watering.',
    tech: 'Python, GPIO, Raspberry Pi, IoT',
    cta: 'View case study',
  },
  {
    href: '/projects/portfolio',
    image: './portfolio.png',
    title: 'Personal Portfolio Website',
    description: 'Custom React portfolio with motion, responsive layouts, and dark UI.',
    tech: 'React, JavaScript, CSS, Framer Motion',
    cta: 'View build',
  },
  {
    href: '/projects/AbyssGPT',
    image: './abyss-gpt.png',
    title: 'AbyssGPT',
    description: 'Deep-sea exploration assistant with mapping and risk-aware routing.',
    tech: 'Python, Streamlit, Plotly, NLP, NetworkX',
    cta: 'View prototype',
  },
  {
    href: '/projects/SpriteAdventureGame',
    image: './sprite-adventure.png',
    title: 'Sprite Adventure RPG',
    description: 'Pixel-art adventure game with exploration, combat, and puzzles.',
    tech: 'Unity, C#, Tilemaps, Sprite Animation',
    cta: 'In development',
  },
  {
    href: '/projects/PCBuild',
    image: './pcbuild.png',
    title: 'Custom PC Build',
    description: 'High-performance workstation tuned for development and rendering.',
    tech: 'RTX 3070, Ryzen 5800X, 32GB RAM',
    cta: 'View build',
  },
  {
    href: '/projects/ConquestGame',
    image: './conquest-banner.png',
    title: 'Conquest Strategy Game',
    description: 'Choice-driven strategy game shaped by branching decisions.',
    tech: 'JavaScript, HTML, CSS',
    cta: 'View game',
  },
  {
    href: '/projects/ArtifactOfSalvation',
    image: './artifactbanner.png',
    imageClassName: 'project-image-artifact',
    title: 'Artifact of Salvation',
    description: '3D stealth-action RPG with puzzles, combat, and story progression.',
    tech: 'Unity, C#, Blender, Photoshop',
    cta: 'View project',
  },
  {
    href: '/projects/FloodTrafficAI',
    image: './flood-sensor.png',
    title: 'Flood-Responsive Traffic Light',
    description: 'Arduino signal system that detects flooding and redirects traffic.',
    tech: 'Arduino, C++, Sensors, LED Matrix',
    cta: 'View system',
  },
  {
    href: '/projects/CarBuild',
    image: './bmw.jpg',
    imageClassName: 'project-image-car-build',
    title: 'Custom BMW F30 Build',
    description: 'Performance and aesthetic build with tuning and hardware upgrades.',
    tech: 'ECU Tune, Intercooler, Intake, Body Kit',
    cta: 'View build',
  },
];


export default function MainWebsite() {
  const [aboutTab, setAboutTab] = useState('education');
  const [isCompactTimeline, setIsCompactTimeline] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [formStatusType, setFormStatusType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

const handleContactSubmit = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);

  setIsSubmitting(true);
  setFormStatus('');
  setFormStatusType('');

  try {
    const response = await fetch('https://formspree.io/f/mjkwdjpr', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    form.reset();
    setFormStatus('Thanks. Your message has been sent.');
    setFormStatusType('success');
  } catch {
    setFormStatus('Something went wrong. Please try again or email me directly.');
    setFormStatusType('error');
  } finally {
    setIsSubmitting(false);
  }
};
useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    // Scroll immediately to section after render
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'auto' }); // 👈 instant scroll
      }
    }, 50);
  }
}, []);

useEffect(() => {
  const timelineQuery = window.matchMedia('(max-width: 820px)');
  const updateTimelineMode = () => setIsCompactTimeline(timelineQuery.matches);

  updateTimelineMode();
  timelineQuery.addEventListener('change', updateTimelineMode);

  return () => timelineQuery.removeEventListener('change', updateTimelineMode);
}, []);


  return (
 <div
  className="main-website"
>
  <ParticleBackground />
  <PortfolioChatbot />
  <div className="fade-in">
      {/*Top Navigation*/}
      <nav className="top-nav">
      <div className="nav-left">
        <a href="#intro" className="nav-name">Arsh Mobeen</a>
      </div>
        <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#beyond">Beyond Engineering</a></li>
        <li><a href="#contact">Contact</a></li>
      
        
      </ul>
    </nav>


      <div className="main-container">
        {/*Intro Section*/}
        <section className= "intro" id="intro">
          <img
            src="/profile.png"
            alt="Arsh Mobeen."
            className="profile-img"
          />
        
          <div className="intro-text2" id="intro-text2">
            <h1>Arsh Mobeen</h1>
            <h3>Software Engineering Student at Western University</h3>
            <p>Building systems, solving problems, and crafting experiences through code and design.</p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
              View Resume
            </a>
          </div>
        </section>
        <div className="clear-fix"></div>

        {/*About Me Section*/}
<section className="about" id="about">
  <h2>About Me</h2>
     <p className="quote">
      <em>“The best way to predict the future is to engineer it.”</em>
    </p>

  <p className="about-blurb">
    I'm Arsh Mobeen, a driven Software Engineering student at Western University with a deep-rooted passion for both digital systems and dynamic machines. Whether I’m refining low-level embedded code, analyzing sensor feedback in real-time, or designing user experiences that feel intuitive and elegant, I live at the intersection of logic and creativity.
    <br /><br />
    My journey is shaped by two worlds: <strong>software development</strong> and <strong>automotive engineering</strong>. I find joy in transforming abstract concepts into functional, elegant solutions, from crafting responsive UIs to wiring circuits on a telemetry board for a Formula-style electric car. I thrive in fast-paced environments, constantly learning, building, and pushing the boundary of what’s possible.
  </p>

  <div className="about-layout">
    <div className="about-content">
      <div className="about-tabs">
        <button
          className={aboutTab === 'education' ? 'active' : ''}
          onClick={() => setAboutTab('education')}
        >
          Education
        </button>
        <button
          className={aboutTab === 'certifications' ? 'active' : ''}
          onClick={() => setAboutTab('certifications')}
        >
          Certifications
        </button>
      </div>

 <div className="about-info">
  {aboutTab === 'education' ? (
    <div>

      <h3>Western University</h3>
      <p>
        <strong>B.E.Sc. in Software Engineering (2023 – 2027)</strong>
      </p>
      <p>
        Exploring systems and innovation through courses in Algorithms,
        Data Structures, Software Design, Embedded Systems,
        Digital Logic, and Object-Oriented Development.
      </p>
      
      <h3>White Oaks Secondary School</h3>
      <p>
        <strong>
          International Baccalaureate Diploma Programme | IB Score: 40/45
        </strong>
      </p>
      <p>
        Developed a strong foundation in analytical thinking, research,
        mathematics, and interdisciplinary problem solving through the
        International Baccalaureate curriculum.
      </p>

      <br />


    </div>
        ) : aboutTab === 'certifications' ? (
          <div>
            <h3>AWS Certification</h3>
            <p><strong>Cloud Foundations</strong></p>
            <p>
              Foundational cloud architecture, deployment, and infrastructure concepts
              for modern software systems.
            </p>

            <h3>Machine Learning Certification</h3>
            <p><strong>AI &amp; Data Foundations</strong></p>
            <p>
              Applied machine learning concepts for data-driven problem solving,
              model thinking, and intelligent systems.
            </p>

            <h3>First Aid &amp; CPR/C Certification</h3>
            <p><strong>Practical Readiness</strong></p>
            <p>
              Emergency response training that supports safety, responsibility, and
              readiness in team environments.
            </p>
          </div>
        ) : null}
      </div>
    </div>

    <div className="about-image">
      <img src="/profile2.png" alt="About Arsh Mobeen" />
    </div>
  </div>
</section>

<section className="experience" id="experience">
  <h2 className="section-title">Experience</h2>

  <div className="experience-timeline">
    {experienceItems.map((item, index) => {
      const isLeft = index % 2 === 0;

      return (
        <motion.article
          key={`${item.organization}-${item.role}`}
          className={`experience-card ${isLeft ? 'left' : 'right'}`}
          variants={experienceCardVariants}
          initial={
            shouldReduceMotion
              ? 'reduced'
              : isCompactTimeline
                ? 'hiddenMobile'
                : isLeft
                  ? 'hiddenLeft'
                  : 'hiddenRight'
          }
          whileInView={shouldReduceMotion ? 'reduced' : 'visible'}
          viewport={{ once: false, amount: 0.05, margin: '0px 0px -10% 0px' }}
        >
          <div className="experience-card-inner">
            <div className="experience-meta">
              <span>{item.date}</span>
            </div>
            <h3>{item.role}</h3>
            <p className="experience-organization">{item.organization}</p>
            <p className="experience-location">{item.location}</p>
            <p className="experience-description">{item.description}</p>
            <div className="experience-achievements" aria-label="Impact highlights">
              {item.highlights.map((highlight) => (
                <p key={highlight}>{highlight}</p>
              ))}
            </div>
            <div className="experience-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </motion.article>
      );
    })}
  </div>
</section>


<section className="skills" id="skills">
<h2>Skills</h2>

<div className="skills-container">

{/* LANGUAGES */}
<div className="skill-category">
<h3>Languages</h3>
<ul>
<li><i className="devicon-python-plain colored"></i> Python</li>
<li><i className="devicon-java-plain colored"></i> Java</li>
<li><i className="devicon-cplusplus-plain colored"></i> C++</li>
<li><i className="devicon-javascript-plain colored"></i> JavaScript</li>
<li><i className="devicon-typescript-plain colored"></i> TypeScript</li>
<li><i className="devicon-csharp-plain colored"></i> C#</li>
<li><i className="devicon-c-plain colored"></i> Embedded C</li>
</ul>
</div>


{/* WEB */}
<div className="skill-category">
<h3>Web & Frameworks</h3>
<ul>
<li><i className="devicon-react-original colored"></i> React</li>
<li><i className="devicon-nodejs-plain colored"></i> Node.js</li>
<li><i className="devicon-html5-plain colored"></i> HTML</li>
<li><i className="devicon-css3-plain colored"></i> CSS</li>
<li><i className="devicon-chrome-plain colored"></i> Frontend & Backend</li>
<li><i className="devicon-amazonwebservices-original colored"></i> AWS</li>
<li><i className="devicon-docker-plain colored"></i> Docker</li>
<li><i className="devicon-kubernetes-plain colored"></i> Kubernetes</li>
<li><i className="devicon-fastapi-plain colored"></i> REST APIs</li>
<li><i className="devicon-postgresql-plain colored"></i> SQL</li>
</ul>
</div>


{/* MECHANICAL / ROBOTICS */}
<div className="skill-category">
<h3>Mechanical, Robotics & Hardware</h3>
<ul>
<li><img src="/autocad-logo.png" alt="AutoCAD" className="skill-icon" /> AutoCAD</li>
<li><img src="/solidworks-logo.png" alt="SolidWorks" className="skill-icon" /> SolidWorks</li>
<li><i className="devicon-matlab-plain colored"></i> MATLAB</li>
<li><i className="devicon-matlab-plain colored"></i> Simulink</li>
<li><i className="devicon-vscode-plain colored"></i> Intel Quartus</li>
<li><i className="devicon-linux-plain colored"></i> Intel FPGA</li>
<li><i className="devicon-ubuntu-plain colored"></i> Gazebo</li>
<li><i className="devicon-linux-plain colored"></i> PX4</li>
<li><i className="devicon-python-plain colored"></i> ROS 2</li>
<li><i className="devicon-linux-plain colored"></i> System Modeling</li>
</ul>
</div>


{/* AI */}
<div className="skill-category">
<h3>AI & Intelligent Systems</h3>
<ul>
<li><i className="devicon-python-plain colored"></i> Machine Learning</li>
<li><i className="devicon-opencv-plain colored"></i> Computer Vision</li>
<li><i className="devicon-tensorflow-original colored"></i> Neural Networks</li>
<li><i className="devicon-opencv-plain colored"></i> OpenCV</li>
<li><i className="devicon-tensorflow-original colored"></i> TensorFlow</li>
<li><i className="devicon-pytorch-original colored"></i> PyTorch</li>
<li><i className="devicon-cplusplus-plain colored"></i> Sensor Fusion</li>
<li><i className="devicon-linux-plain colored"></i> Path Planning</li>
<li><i className="devicon-python-plain colored"></i> ROS Perception</li>
<li><i className="devicon-python-plain colored"></i> Data Visualization</li>
</ul>
</div>


{/* DEVELOPMENT */}
<div className="skill-category">
<h3>Development Workflow</h3>
<ul>
<li><i className="devicon-jira-plain colored"></i> Agile Development</li>
<li><i className="devicon-git-plain colored"></i> Git</li>
<li><i className="devicon-gitlab-plain colored"></i> GitLab</li>
<li><i className="devicon-github-original colored"></i> GitHub</li>
<li><i className="devicon-jira-plain colored"></i> Jira</li>
<li><i className="devicon-docker-plain colored"></i> Microservices</li>
<li><i className="devicon-git-plain colored"></i> CI/CD</li>
<li><img src="/notion-logo.png" alt="Notion" className="skill-icon" /> Notion</li>
<li><i className="devicon-slack-plain colored"></i> Slack</li>
</ul>
</div>


{/* EMBEDDED */}
<div className="skill-category">
<h3>Embedded & Automotive Systems</h3>
<ul>
<li><i className="devicon-arduino-plain colored"></i> Arduino</li>
<li><i className="devicon-raspberrypi-line colored"></i> Raspberry Pi</li>
<li><i className="devicon-c-plain colored"></i> CAN Bus Communication</li>
<li><i className="devicon-c-plain colored"></i> Sensor Integration</li>
<li><i className="devicon-c-plain colored"></i> Motor Control</li>
<li><i className="devicon-c-plain colored"></i> RTOS Basics</li>
<li><i className="devicon-c-plain colored"></i> Power Electronics</li>
</ul>
</div>


{/* NETWORKING */}
<div className="skill-category">
<h3>Networking & Systems</h3>
<ul>
<li><i className="devicon-cisco-plain colored"></i> Cisco Packet Tracer</li>
<li><i className="devicon-linux-plain colored"></i> Linux</li>
<li><i className="devicon-cisco-plain colored"></i> TCP/IP Fundamentals</li>
<li><i className="devicon-cisco-plain colored"></i> Routing & Switching</li>
<li><i className="devicon-linux-plain colored"></i> System Architecture</li>
</ul>
</div>


{/* TOOLS */}
<div className="skill-category">
<h3>Cloud & Tools</h3>
<ul>
<li><i className="devicon-amazonwebservices-original colored"></i> AWS</li>
<li><i className="devicon-google-plain colored"></i> Amplitude</li>
<li><i className="devicon-pytest-plain colored"></i> Experimentation Frameworks</li>
<li><i className="devicon-python-plain colored"></i> Data Analytics</li>
<li><i className="devicon-markdown-original"></i> UML Diagrams</li>
</ul>
</div>

</div>
</section>

 <section className="projects" id="projects">
  <h2 className="section-title">Projects</h2>

  <div className="projects-grid">
    {projectItems.map((project) => (
      <a href={project.href} className="project-link" key={project.title}>
        <article className="project-card">
          <div
            className={`project-image ${project.imageClassName || ''}`}
            style={{ backgroundImage: `url('${project.image}')` }}
          >
            <span className="project-image-overlay">{project.cta}</span>
          </div>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech">Tech: {project.tech}</p>
            <span className="hover-overlay">
              {project.cta}
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </article>
      </a>
    ))}
  </div>
</section>



    {/*Beyond Section*/}
 <BeyondSection />


  {/*Contact Section*/}
<section className="contact" id="contact">
  <h2>Contact Me</h2>
  <p className="contact-subtext">I'd love to hear from you. Let's connect and create something great together.</p>

  <form
    className="contact-form"
    onSubmit={handleContactSubmit}
  >
    <div className="form-row">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
    </div>

    <div className="form-row">
      <input type="tel" name="phone" placeholder="Phone Number (Optional)" />
    </div>

    <textarea name="message" placeholder="Your Message" rows="6" required></textarea>

    <button type="submit" className="submit-button" disabled={isSubmitting}>
      {isSubmitting ? 'Sending...' : 'Send Message'}
    </button>
    {formStatus && (
      <p className={`form-status ${formStatusType}`} role="status" aria-live="polite">
        {formStatus}
      </p>
    )}
  </form>

  <div className="social-links">
    <a
      className="social-icon-button"
      href="https://github.com/Smokey878"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      title="GitHub"
    >
      <GithubIcon />
      <span className="sr-only">GitHub</span>
    </a>
    <a
      className="social-icon-button"
      href="https://www.linkedin.com/in/arsh-mobeen/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <LinkedinIcon />
      <span className="sr-only">LinkedIn</span>
    </a>
    <a className="social-email-link" href={`mailto:${emailAddress}`}>
      {emailAddress}
    </a>
  </div>
</section>

<footer className="site-footer">
  <p>© 2026 Arsh Mobeen</p>
</footer>

      </div>
    </div>
    </div>
  );
}
