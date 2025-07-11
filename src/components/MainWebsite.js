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
            <p><strong>B.E.Sc. in Software Engineering (2023 – 2027)</strong></p>
            <p>
              Exploring systems and innovation through courses in Algorithms, Data Structures,
              Software Design, Embedded Systems, Digital Logic, and Object-Oriented Development.
            </p>
          </div>
        ) : (
          <div>
            <h3>Western Formula Racing — Electronics Design Engineer</h3>
            <p>
              Engineered embedded systems for real-time vehicle telemetry, sensor calibration, and power distribution across a competitive EV platform.
            </p>
            <h3>Engineering Society — Event Organizer</h3>
            <p>
              Led 100+ student events, technical workshops, and hardware hackathons focused on practical innovation and collaborative learning.
            </p>
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
      <div
        className="project-image"
        style={{ backgroundImage: "url('./plant-watering1.png')" }}
      />
      <div className="project-content">
        <h3>Autonomous Plant Watering System</h3>
        <p>
          Designed an accessible, portable irrigation solution using a
          mechanically powered cart that empowers differently abled volunteers to water garden beds independently.
        </p>
        <p className="tech">Tech: Python, GPIO, Raspberry Pi, IoT</p>
        <span className="hover-overlay">→ Click to see more</span>
      </div>
    </div>
  </a>

    {/* Project 2 */}
 <a href="/projects/portfolio" className="project-link">
  <div className="project-card">
    <div className="project-image" style={{ backgroundImage: "url('./portfolio.png')" }} />
    <div className="project-content">
      <h3>Personal Portfolio Website</h3>
      <p>My fully custom-built personal website, showcasing my projects, experience, and personal brand with smooth animations, modern UI, and responsive design.</p>
      <p className="tech">Tech: React, JavaScript, CSS3, HTML5, Framer Motion</p>
      <span className="hover-overlay">→ Click to see more</span>
    </div>
  </div>
</a>


    <a href="/projects/PCBuild" className="project-link">
  <div className="project-card">
    <div
      className="project-image"
      style={{ backgroundImage: "url('./pcbuild.png')" }} // replace with thumbnail
    />
    <div className="project-content">
      <h3>Custom PC Build</h3>
      <p>Built a high-performance PC for development, gaming, and rendering tasks.</p>
      <p className="tech">Tech: RTX 3070, Ryzen 5800X, 32GB RAM</p>
      <span className="hover-overlay">→ Click to see more</span>
    </div>
  </div>
</a>


    {/* Project 3 */}
    <a href="/projects/ConquestGame" className="project-link">
  <div className="project-card">
    <div
      className="project-image"
      style={{ backgroundImage: "url('./conquest-banner.png')" }} // Replace with actual image
    />
    <div className="project-content">
      <h3>Conquest Strategy Game</h3>
      <p>Text-based decision game where player choices shape the fate of warring nations.</p>
      <p className="tech">Tech: JavaScript, HTML, CSS</p>
      <span className="hover-overlay">→ Click to see more</span>
    </div>
  </div>
</a>


{/* Project 4 */}
<a href="/projects/ArtifactOfSalvation" className="project-link">
  <div className="project-card">
    <div
      className="project-image"
      style={{ backgroundImage: "url('./artifactbanner.png')" }} // Replace with your actual image
    />
    <div className="project-content">
      <h3>Artifact of Salvation</h3>
      <p>3D stealth-action RPG where an archaeologist races to retrieve a relic before a greedy villain.</p>
      <p className="tech">Tech: Unity, C#, Blender, Photoshop</p>
      <span className="hover-overlay">→ Click to see more</span>
    </div>
  </div>
</a>

{/* Project 5 */}
<a href="/projects/FloodTrafficAI" className="project-link">
  <div className="project-card">
    <div
      className="project-image"
      style={{ backgroundImage: "url('./flood-sensor.png')" }} // Replace with your actual image
    />
    <div className="project-content">
      <h3>Flood-Responsive Traffic Light System</h3>
      <p>AI-integrated Arduino stoplight that detects flooding and redirects traffic to safety.</p>
      <p className="tech">Tech: Arduino, C++, AI Logic, Water Sensors, LED Matrix</p>
      <span className="hover-overlay">→ Click to see more</span>
    </div>
  </div>
</a>

<a href="/projects/CarBuild.js" className="project-link">
  <div className="project-card">
    <div
      className="project-image"
      style={{ backgroundImage: "url('./bmw.jpg')" }} 
    />
    <div className="project-content">
      <h3>Custom BMW F30 Build</h3>
      <p>A self-tuned BMW 3 series F30 featuring a full body kit, upgraded intercooler, performance air intake, and ambient starlight roof.</p>
      <p className="tech">Mods: ECU Tune, Front Lip, Rear Diffuser, Intercooler, Cold Air Intake, Starlights</p>
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
      <p>A growing side business focused on aesthetic upgrades and refinishing for luxury and sport vehicles. Built a local client base through word-of-mouth and online marketing.</p>
      <span className="initiative-type">Side Venture</span>
    </div>

    <div className="initiative-card">
      <h3>Startup Pitch: "Pharmadrop"</h3>
      <p>Developed and pitched "Pharmadrop," an on-demand platform for real-time prescription delivery, optimizing pharmacy logistics and improving patient accessibility to medication.</p>
      <span className="initiative-type">Startup Pitch</span>
    </div>

    <div className="initiative-card">
      <h3>Creative Studio Concept - To be launched</h3>
      <p>Developing a long-term business idea to merge engineering with design for custom watches, custom automotive tunes, apparel, and architecture with high-end aesthetic branding.</p>
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
        <h3>Build-A-Thon: Smith Commerce & Beta-Camp</h3>
        <p>Presented and pitched an app concept providing senior citizens with prescription medication reminders and delivery through a monthly membership subscription model.</p>
        <span className="tag research">Startup Pitch</span>
        <a href="./PharmaDrop - Pharmacist Business.pdf" target="_blank" rel="noopener noreferrer" className="view-link">📄 Learn More</a>
      </div>
    </div>

    <div className="workshop-card">
      <div className="card-content">
        <h3>Effect of Viscosity on Impact Time</h3>
        <p>Investigated how different fluid viscosities affect the time taken for a ball bearing to descend through them using projectile motion and Stokes’ Law.</p>
        <span className="tag research">Research</span>
        <a href="./How Does Viscosity of a Fluid Affect the Time Taken to Impact the Surface.docx" target="_blank" rel="noopener noreferrer" className="view-link">📄 View Research</a>
      </div>
    </div>

    <div className="workshop-card">
      <div className="card-content">
        <h3>Boiling Points of Hydrocarbons</h3>
        <p>Analyzed how molar mass, chain structure, and double bond positions affect boiling points in alkanes and alkenes through a chemistry database study.</p>
        <span className="tag research">Research</span>
        <a href="./Chemistry IA ~ Arsh Mobeen.docx" target="_blank" rel="noopener noreferrer" className="view-link">📄 View Research</a>
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
    <a href="https://github.com/Smokey878" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i> GitHub
    </a>
    <a href="https://www.linkedin.com/in/arsh-mobeen/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i> LinkedIn
    </a>
    <a href="mailto:arshmobeen87817@gmail.com">
      <i className="fas fa-envelope"></i> Email Me
    </a>
  </div>
</section>


      </div>
    </div>
    </div>
  );
}