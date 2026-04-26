const unknownAnswer =
  "I don't have that information from Arsh's portfolio yet, but you can contact him directly.";

const portfolioKnowledge = {
  identity: {
    name: 'Arsh Mobeen',
    summary:
      'Arsh Mobeen is a Software Engineering student at Western University who builds at the intersection of software systems, automotive engineering, embedded systems, AI/data, cloud, and interactive design.',
    interests: [
      'software engineering',
      'automotive engineering',
      'embedded systems',
      'AI and data',
      'cloud systems',
      'interactive design',
    ],
  },
  education: [
    {
      school: 'Western University',
      program: 'B.E.Sc. in Software Engineering',
      dates: '2023-2027',
      details:
        'Coursework and interests include algorithms, data structures, software design, embedded systems, digital logic, and object-oriented development.',
    },
    {
      school: 'White Oaks Secondary School',
      program: 'International Baccalaureate Diploma Programme',
      details: 'IB Score: 40/45. Built a foundation in analytical thinking, research, mathematics, and interdisciplinary problem solving.',
    },
  ],
  certifications: [
    'AWS Certification: foundational cloud architecture, deployment, and infrastructure concepts.',
    'Machine Learning Certification: applied machine learning concepts for data-driven problem solving and intelligent systems.',
    'First Aid & CPR/C Certification: emergency response training for practical readiness in team environments.',
  ],
  experience: [
    {
      role: 'HR Technologist Intern',
      organization: 'i3 Institute',
      details:
        'Built HR operations tooling around a React/FastAPI dashboard, onboarding workflows, and Python/JavaScript automation. Implemented dashboard views for onboarding status, task progress, and bottlenecks. Automated HR data updates and validation paths.',
    },
    {
      role: 'Software Engineering Intern',
      organization: 'Elite Life Financial',
      details:
        'Developed backend automation and data validation tooling for internal financial workflows. Created Python checks for input validation, exception handling, cleaner data processing, and automated review/reporting steps.',
    },
    {
      role: 'Automotive Systems & Software Specialist',
      organization: 'Pro Color Collision',
      details:
        'Built workflow tooling for automotive repair operations, including Python job tracking, active repair stage monitoring, delay risk alerts, parts shortage notifications, and workflow blocker visibility.',
    },
    {
      role: 'Electronic Design Engineer',
      organization: 'Western Formula Racing',
      details:
        'Supported telemetry and data acquisition for a Formula-style EV platform. Worked with sensor signals, microcontroller workflows, vehicle diagnostics, data logging, track-side checks, and post-run analysis.',
    },
    {
      role: 'Strategic Partnerships & Engagement Associate',
      organization: 'Amity Global Foundation',
      details:
        'Structured partnership outreach as a lightweight pipeline system, organizing stakeholder data, priorities, follow-up paths, and data-informed partner communication.',
    },
  ],
  projects: [
    'AbyssGPT: deep-sea exploration assistant using Python, Streamlit, Plotly, Pandas, NetworkX, and NLP-style querying.',
    'Personal Portfolio Website: custom React portfolio with motion, responsive layouts, particles, and dark UI.',
    'Flood-Responsive Traffic Light: Arduino/C++ signal system that detects flooding and redirects traffic.',
    'Autonomous Plant Watering System: accessible irrigation cart using Python, GPIO, Raspberry Pi, and IoT concepts.',
    'Sprite Adventure RPG: Unity/C# pixel-art adventure game with exploration, combat, puzzles, tilemaps, and sprite animation.',
    'Artifact of Salvation: Unity/C# 3D stealth-action RPG with puzzles, combat, story progression, Blender, and Photoshop assets.',
    'Conquest Strategy Game: JavaScript/HTML/CSS choice-driven strategy game.',
    'Custom BMW F30 Build: automotive performance and aesthetic build with tuning and hardware upgrades.',
    'Custom PC Build: high-performance workstation with RTX 3070, Ryzen 5800X, and 32GB RAM.',
  ],
  skills: [
    'Python',
    'Java',
    'C++',
    'JavaScript',
    'TypeScript',
    'C#',
    'React',
    'Node.js',
    'FastAPI',
    'AWS',
    'Docker',
    'Kubernetes',
    'ROS 2',
    'MATLAB',
    'Simulink',
    'Intel FPGA',
    'Arduino',
    'Raspberry Pi',
    'CAN Bus',
    'Machine Learning',
    'Computer Vision',
    'OpenCV',
    'TensorFlow',
    'PyTorch',
  ],
  beyondEngineering: [
    'Pakistani Students’ Association President: leads cultural/community initiatives, manages event teams, represents students, and builds campus programming.',
    'Vice President of Hemoglobal: supports healthcare advocacy, charity initiatives, awareness programming, and campus engagement.',
    'Swab the World: organizes swab drives, recruits students to register and swab, builds awareness, and supports donor outreach for life-saving stem cell matches.',
    'WICSA cultural performance: dance, creative expression, stage presence, and collaborative event production.',
    'Car refurbishment: restoration, detailing, visual upgrades, and a hands-on venture mindset.',
    'Mock Trial President: competitive case preparation, team coaching, argument strategy, public speaking, and advocacy.',
  ],
  contact: {
    github: 'https://github.com/Smokey878',
    linkedin: 'https://www.linkedin.com/in/arsh-mobeen/',
    email: 'arshmobeen87817@gmail.com',
  },
  internshipInterests:
    'Arsh is interested in software engineering internships, especially full-stack/backend systems, automation, AI/data, embedded systems, automotive software, and cloud.',
};

const systemInstructions = `
You are Arsh's Chatbot, a concise portfolio assistant.
Answer only using the provided portfolio context.
If information is missing, say exactly: "${unknownAnswer}"
Do not make up personal details, dates, awards, links, or claims.
Keep answers concise, recruiter-friendly, professional, and natural. Avoid long essays unless the user asks for detail.
`;

function getRequestBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body;
  }

  if (typeof req.body === 'string') {
    return JSON.parse(req.body);
  }

  return {};
}

function buildUserPrompt(messages) {
  const recentMessages = Array.isArray(messages) ? messages.slice(-8) : [];
  return recentMessages
    .map((message) => {
      const role = message.role === 'assistant' ? 'Assistant' : 'User';
      return `${role}: ${String(message.content || '').slice(0, 800)}`;
    })
    .join('\n');
}

function extractResponseText(data) {
  if (data.output_text) return data.output_text;

  const outputText = data.output
    ?.flatMap((item) => item.content || [])
    ?.find((content) => content.type === 'output_text')?.text;

  return outputText || unknownAnswer;
}

function getLatestUserQuestion(messages) {
  const latestUserMessage = Array.isArray(messages)
    ? [...messages].reverse().find((message) => message.role === 'user')
    : null;

  return String(latestUserMessage?.content || '').toLowerCase();
}

function buildFallbackAnswer(messages) {
  const question = getLatestUserQuestion(messages);

  if (!question.trim()) {
    return unknownAnswer;
  }

  if (question.includes('project') || question.includes('built') || question.includes('work')) {
    return `Arsh has built projects including AbyssGPT, his React portfolio website, a Flood-Responsive Traffic Light, an Autonomous Plant Watering System, Sprite Adventure RPG, Artifact of Salvation, Conquest Strategy Game, a Custom BMW F30 Build, and a Custom PC Build.`;
  }

  if (
    question.includes('intern') ||
    question.includes('looking for') ||
    question.includes('role') ||
    question.includes('job')
  ) {
    return portfolioKnowledge.internshipInterests;
  }

  if (
    question.includes('experience') ||
    question.includes('i3') ||
    question.includes('elite') ||
    question.includes('pro color') ||
    question.includes('formula') ||
    question.includes('amity')
  ) {
    return `Arsh's experience includes i3 Institute as an HR Technologist Intern, Elite Life Financial as a Software Engineering Intern, Pro Color Collision as an Automotive Systems & Software Specialist, Western Formula Racing as an Electronic Design Engineer, and Amity Global Foundation as a Strategic Partnerships & Engagement Associate. His work spans dashboards, automation, validation tooling, telemetry, data acquisition, and workflow systems.`;
  }

  if (question.includes('skill') || question.includes('tech') || question.includes('stack')) {
    return `Arsh's skills include ${portfolioKnowledge.skills.join(', ')}.`;
  }

  if (question.includes('education') || question.includes('school') || question.includes('western') || question.includes('ib')) {
    return portfolioKnowledge.education
      .map((item) => `${item.school}: ${item.program}${item.dates ? ` (${item.dates})` : ''}. ${item.details}`)
      .join(' ');
  }

  if (question.includes('certification') || question.includes('certificate') || question.includes('aws') || question.includes('cpr')) {
    return `Arsh's certifications include ${portfolioKnowledge.certifications.join(' ')}`;
  }

  if (
    question.includes('beyond') ||
    question.includes('extracurricular') ||
    question.includes('leadership') ||
    question.includes('psa') ||
    question.includes('hemoglobal') ||
    question.includes('swab') ||
    question.includes('wicsa')
  ) {
    return portfolioKnowledge.beyondEngineering.join(' ');
  }

  if (question.includes('contact') || question.includes('email') || question.includes('linkedin') || question.includes('github')) {
    return `You can contact Arsh by email at ${portfolioKnowledge.contact.email}, LinkedIn at ${portfolioKnowledge.contact.linkedin}, or GitHub at ${portfolioKnowledge.contact.github}.`;
  }

  if (question.includes('about') || question.includes('who is') || question.includes('arsh')) {
    return portfolioKnowledge.identity.summary;
  }

  return unknownAnswer;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = getRequestBody(req);
    const userPrompt = buildUserPrompt(body.messages);

    if (!userPrompt.trim()) {
      return res.status(400).json({ error: 'Missing messages' });
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error('Portfolio chatbot error: missing OPENAI_API_KEY. Returning local portfolio fallback.');
      return res.status(200).json({ answer: buildFallbackAnswer(body.messages), source: 'local-fallback' });
    }

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4.1-mini',
        instructions: `${systemInstructions}\nPortfolio context:\n${JSON.stringify(portfolioKnowledge, null, 2)}`,
        input: userPrompt,
        max_output_tokens: 220,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Portfolio chatbot OpenAI error:', response.status, errorText);
      return res.status(200).json({ answer: buildFallbackAnswer(body.messages), source: 'local-fallback' });
    }

    const data = await response.json();
    return res.status(200).json({ answer: extractResponseText(data) });
  } catch (error) {
    console.error('Portfolio chatbot server error:', error);
    return res.status(200).json({ answer: unknownAnswer, source: 'local-fallback' });
  }
};
