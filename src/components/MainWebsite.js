import { useState } from 'react';
import '../styles/MainWebsite.css';

export default function MainWebsite() {
  const [aboutTab, setAboutTab] = useState('education');

  return (
    <div>
      {/*Top Navigation*/}
      <nav className="top-nav">
      <div className="nav-left">
        <a href="#intro" className="nav-name">Arsh Mobeen</a>
      </div>
        <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
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


        {/*Projects Section*/}
         <section className= "projects" id="projects">
  <h2>Projects</h2>

  <div className="projects-grid">
    <div className="project-card">
      <h3>Autonomous Plant Watering System</h3>
      <p>Built for accessibility using Raspberry Pi, sensors, and Python.</p>
      <p className="tech">Tech: Python, GPIO, IoT</p>
      <a href="https://github.com/yourname/project1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>

    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>This very website — React-based, fully animated, and custom-built.</p>
      <p className="tech">Tech: React, CSS, TypewriterJS</p>
      <a href="https://github.com/yourname/portfolio" target="_blank" rel="noopener noreferrer">View on GitHub</a>
    </div>

    <div className="project-card">
      <h3>F1 Telemetry System</h3>
      <p>Embedded system for live data collection on a Formula-style race car.</p>
      <p className="tech">Tech: C++, CAN, STM32</p>
      <a href="#project">Private Project</a>
    </div>
  </div>
</section>
      {/*Workshops Section*/}       
 <section className= "workshops" id="workshops">
  <h2>Workshops & Research</h2>

  <div className="workshop-list">
    <div className="workshop-item">
      <h3>Intro to Embedded Systems Workshop</h3>
      <p>A hands-on session teaching Raspberry Pi, GPIO, and real-time coding to 50+ engineering students.</p>
      <span className="type">Workshop</span>
    </div>

    <div className="workshop-item">
      <h3>Research Poster: Sensor Networks for Smart Agriculture</h3>
      <p>Investigated wireless data transmission and sensor calibration in harsh outdoor environments.</p>
      <span className="type">Research</span>
      <a href="/poster.pdf" target="_blank" rel="noopener noreferrer">View Poster</a>
    </div>
  </div>
</section>
    {/*Beyond Section*/}
 <section className= "beyond" id="beyond">
  <h2>Beyond Engineering</h2>

  <div className="beyond-category">
    <h3>🏀 Sports & Extracurriculars</h3>
    <p>I actively play basketball and soccer, and am a consistent gym-goer. These experiences shape my discipline and team mentality. I'm also involved in engineering student clubs that promote hands-on learning and collaboration.</p>
  </div>

  <div className="beyond-category">
    <h3>🎉 Events & Leadership</h3>
    <p>As a member of Western's Engineering Society and F1 Racing Team, I've helped coordinate hackathons, tech nights, and team showcases — balancing creativity with execution under tight timelines.</p>
  </div>

  <div className="beyond-category">
    <h3>🚗 Side Hustle: Car Refurbishment</h3>
    <p>I run a passion project refurbishing and customizing vehicles — with a focus on luxury cars and personalized aesthetic upgrades. My aim is to bring high-end visual identity to both machines and the people who own them.</p>
  </div>
</section>

    {/*Gallery Section*/}
 <section className= "gallery" id="gallery">
  <h2>Engineering Gallery</h2>

  <div className="gallery-grid">
    <div className="gallery-item">
      <img src="/images/f1-car.jpg" alt="F1 electronics" />
      <p>Wiring sensors in our Formula-style race car during the 2024 design cycle.</p>
    </div>

    <div className="gallery-item">
      <img src="/images/lab-work.jpg" alt="Soldering in lab" />
      <p>Late-night soldering session for our smart irrigation controller prototype.</p>
    </div>

    <div className="gallery-item">
      <img src="/images/hackathon.jpg" alt="Hackathon team" />
      <p>Presenting our Hack the North submission: a Python-powered emergency alert system.</p>
    </div>
  </div>
</section>

  {/*Contact Section*/}
 <section className= "contact" id="contact">
  <h2>Contact Me</h2>

  <form
  className="contact-form"
  action="https://formspree.io/f/mjkwdjpr" 
  method="POST"
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>


  <div className="social-links">
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="mailto:your.email@example.com">Email Me</a>
  </div>
</section>

      </div>
    </div>
  );
}
