import { useState } from 'react';
import '../styles/MainWebsite.css';
import BeyondSection from './BeyondSection';
import GallerySection from './GallerySection';
import { useEffect } from 'react';



export default function MainWebsite() {
  const [aboutTab, setAboutTab] = useState('education');
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


  return (
    <div>
  <div className="fade-in">
      {/*Top Navigation*/}
      <nav className="top-nav">
      <div className="nav-left">
        <a href="#intro" className="nav-name">Arsh Mobeen</a>
      </div>
        <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#initiatives">Initiatives & Ventures</a></li>
        <li><a href="#workshops">Workshops & Research</a></li>
        <li><a href="#beyond">Beyond Engineering</a></li>
        <li><a href="#gallery">Gallery</a></li>
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
        <div class="clear-fix"></div>

        {/*About Me Section*/}
<section className="about" id="about">
  <h2>About Me</h2>

  <p className="about-blurb">
    I'm a passionate engineer who thrives at the intersection of code and creativity — whether that's through leading a team, building embedded systems, or simply learning something new.
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
          className={aboutTab === 'experience' ? 'active' : ''}
          onClick={() => setAboutTab('experience')}
        >
          Experience
        </button>
      </div>

      <div className="about-info">
        {aboutTab === 'education' ? (
          <div>
            <h3>Western University</h3>
            <p>B.E.Sc. in Software Engineering (2022 – 2026)</p>
            <p>Coursework includes Algorithms, Data Structures, Embedded Systems, Software Design, Logic Circuits</p>
          </div>
        ) : (
          <div>
            <h3>Western Formula Racing — Electronics Design Engineer</h3>
            <p>Developed embedded systems for vehicle telemetry and performance analysis.</p>
            <h3>Event Organizer — Engineering Society</h3>
            <p>Led student workshops and engineering hack events with 100+ attendees.</p>
          </div>
        )}
      </div>
    </div>

    <div className="about-image">
      <img src="/profile2.png" alt="About Arsh Mobeen" />
    </div>
  </div>
</section>


<section className="skills" id="skills">
  <h2>Skills</h2>
  <div className="skills-container">
  <div className="skill-category">
  <h3>Languages</h3>
  <ul>
    <li><i className="devicon-python-plain colored"></i> Python (FastAPI)</li>
    <li><i className="devicon-java-plain colored"></i> Java</li>
    <li><i className="devicon-cplusplus-plain colored"></i> C++</li>
    <li><i className="devicon-javascript-plain colored"></i> JavaScript</li>
    <li><i className="devicon-typescript-plain colored"></i> TypeScript</li>
    <li><i className="devicon-csharp-plain colored"></i> C#</li>
  </ul>
</div>


    <div className="skill-category">
      <h3>Web & Frameworks</h3>
      <ul>
        <li><i className="devicon-react-original colored"></i> React</li>
        <li><i className="devicon-nodejs-plain colored"></i> Node.js</li>
        <li><i className="devicon-html5-plain colored"></i> HTML</li>
        <li><i className="devicon-css3-plain colored"></i> CSS</li>
        <li><i className="devicon-chrome-plain colored"></i> Frontend & Backend Development</li>
        <li><i className="devicon-amazonwebservices-original colored"></i> Amazon Web Services</li>
        <li><i className="devicon-docker-plain colored"></i> Docker</li>
        <li><i className="devicon-kubernetes-plain colored"></i> Kubernetes</li>
      </ul>
    </div>

    <div className="skill-category">
      <h3>Mechanical & Hardware Design</h3>
      <ul>
        <li>
        <img src="/autocad-logo.png" alt="AutoCAD" className="skill-icon" />
          AutoCAD
        </li>
        <li>
        <img src="/solidworks-logo.png" alt="SolidWorks" className="skill-icon" />
          SolidWorks
        </li>
        <li><i className="devicon-matlab-plain colored"></i> Simulink</li>
        <li><i className="devicon-vscode-plain colored"></i> Intel Quartus</li>
        <li><i className="devicon-matlab-plain colored"></i> MATLAB</li>
        <li><i className="devicon-postgresql-plain colored"></i> PostgreSQL</li>
        <li><i className="devicon-redis-plain colored"></i> Redis</li>
        <li><i className="devicon-ubuntu-plain colored"></i> Gazebo</li>
        <li><i className="devicon-linux-plain colored"></i> PX4</li>
        <li><i className="devicon-python-plain colored"></i> ROS 2</li>
      </ul>
    </div>

    <div className="skill-category">
      <h3>Development Workflow</h3>
      <ul>
        <li><i className="devicon-jira-plain colored"></i> Agile Development</li>
        <li><i className="devicon-git-plain colored"></i> Iterative Development</li>
        <li><i className="devicon-docker-plain colored"></i> Microservices Architecture</li>
        <li><i className="devicon-git-plain colored"></i> Git</li>
        <li><i className="devicon-gitlab-plain colored"></i> GitLab</li>
        <li><i className="devicon-github-original colored"></i> GitHub</li>
        <li><i className="devicon-jira-plain colored"></i> Jira</li>
        <li>
        <img src="/notion-logo.png" alt="Notion" className="skill-icon" />
          Notion
        </li>
        <li><i className="devicon-slack-plain colored"></i> Slack</li>
      </ul>
    </div>

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

    <div className="skill-category">
      <h3>Office Suite</h3>
      <ul>
      <li>
        <img src="/word-logo.png" alt="Word" className="skill-icon" />
          Word
        </li>
        <li>
        <img src="/excel-logo.png" alt="Excel" className="skill-icon" />
          Excel
        </li>
        <li>
        <img src="/powerpoint-logo.png" alt="PowerPoint" className="skill-icon" />
          PowerPoint
        </li>
        <li>
        <img src="/sharepoint-logo.png" alt="Sharepoint" className="skill-icon" />
          Sharepoint
        </li>
        <li>
        <img src="/teams-logo.png" alt="Teams" className="skill-icon" />
          Teams
        </li>
        <li>
        <img src="/onenote-logo.png" alt="Onenote" className="skill-icon" />
          Onenote
        </li>
      </ul>
    </div>

    <div className="skill-category">
      <h3>Embedded & Automotive Systems</h3>
      <ul>
        <li><i className="devicon-arduino-plain colored"></i> Arduino</li>
        <li><i className="devicon-raspberrypi-line colored"></i> Raspberry Pi</li>
        <li><i className="devicon-embeddedc-plain colored"></i> CAN Bus Protocol</li>
        <li><i className="devicon-embeddedc-plain colored"></i> Sensor Integration</li>
        <li><i className="devicon-embeddedc-plain colored"></i> Motor Control Systems</li>
        <li><i className="devicon-embeddedc-plain colored"></i> Power Electronics Basics</li>
      </ul>
    </div>



  </div>
</section>


 <section className="projects" id="projects">
  <h2 className="section-title">Projects</h2>

  <div className="projects-grid">
    {/* Project 1 */}
    <a href="/projects/plant-watering" className="project-link">
      <div className="project-card">
        <div className="project-image" style={{ backgroundImage: "url('/images/plant-system.jpg')" }} />
        <div className="project-content">
          <h3>Autonomous Plant Watering System</h3>
          <p>Built for accessibility using Raspberry Pi, sensors, and Python.</p>
          <p className="tech">Tech: Python, GPIO, IoT</p>
          <span className="hover-overlay">→ Click to see more</span>
        </div>
      </div>
    </a>

    {/* Project 2 */}
    <a href="/projects/portfolio" className="project-link">
      <div className="project-card">
        <div className="project-image" style={{ backgroundImage: "url('/images/portfolio.jpg')" }} />
        <div className="project-content">
          <h3>Portfolio Website</h3>
          <p>This very website — React-based, fully animated, and custom-built.</p>
          <p className="tech">Tech: React, CSS, TypewriterJS</p>
          <span className="hover-overlay">→ Click to see more</span>
        </div>
      </div>
    </a>

    {/* Project 3 */}
    <a href="/projects/f1-telemetry" className="project-link">
      <div className="project-card">
        <div className="project-image" style={{ backgroundImage: "url('/images/telemetry.jpg')" }} />
        <div className="project-content">
          <h3>F1 Telemetry System</h3>
          <p>Embedded system for live data collection on a Formula-style race car.</p>
          <p className="tech">Tech: C++, CAN, STM32</p>
          <span className="hover-overlay">→ Click to see more</span>
        </div>
      </div>
    </a>
  </div>
</section>

{/*Initiatives Section */}
<section className="initiatives" id="initiatives">
  <h2>Initiatives & Ventures</h2>

  <div className="initiatives-grid">
    <div className="initiative-card">
      <h3>Custom Car Refurbishment</h3>
      <p>A growing side business focused on aesthetic upgrades and refinishing for luxury and sport vehicles. Built a local client base through word-of-mouth and Instagram marketing.</p>
      <span className="initiative-type">Side Venture</span>
    </div>

    <div className="initiative-card">
      <h3>Startup Pitch: "ParkSight"</h3>
      <p>Pitched a real-time parking availability system using camera feeds and ML to optimize city traffic. Advanced to finalist round at the Western Entrepreneurship Challenge 2023.</p>
      <span className="initiative-type">Startup Pitch</span>
    </div>

    <div className="initiative-card">
      <h3>Creative Studio Concept</h3>
      <p>Developing a long-term business idea to merge engineering with design for custom watches, apparel, and architecture with high-end aesthetic branding.</p>
      <span className="initiative-type">Venture Concept</span>
    </div>
  </div>
</section>

{/*Workshops Section*/}       
<section className="workshops" id="workshops">
  <h2>Workshops & Research</h2>

  <div className="workshop-grid">
    <div className="workshop-card">
      <div className="card-content">
        <h3>Intro to Embedded Systems Workshop</h3>
        <p>A hands-on session teaching Raspberry Pi, GPIO, and real-time coding to 50+ engineering students.</p>
        <span className="tag workshop">Workshop</span>
      </div>
    </div>

    <div className="workshop-card">
      <div className="card-content">
        <h3>Research Poster: Sensor Networks for Smart Agriculture</h3>
        <p>Investigated wireless data transmission and sensor calibration in harsh outdoor environments.</p>
        <span className="tag research">Research</span>
        <a href="/poster.pdf" target="_blank" rel="noopener noreferrer" className="view-link">📄 View Poster</a>
      </div>
    </div>
  </div>
</section>

    {/*Beyond Section*/}
 <BeyondSection />


{/* Gallery Section */}
<GallerySection />


  {/*Contact Section*/}
<section className="contact" id="contact">
  <h2>Contact Me</h2>
  <p className="contact-subtext">I'd love to hear from you — let's connect and create something great together.</p>

  <form
    className="contact-form"
    action="https://formspree.io/f/mjkwdjpr"
    method="POST"
  >
    <div className="form-row">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
    </div>

    <div className="form-row">
      <input type="tel" name="phone" placeholder="Phone Number (Optional)" />
    </div>

    <textarea name="message" placeholder="Your Message" rows="6" required></textarea>

    <button type="submit" className="submit-button">Send Message</button>
  </form>

  <div className="social-links">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i> GitHub
    </a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i> LinkedIn
    </a>
    <a href="mailto:your.email@example.com">
      <i className="fas fa-envelope"></i> Email Me
    </a>
  </div>
</section>


      </div>
    </div>
    </div>
  );
}
