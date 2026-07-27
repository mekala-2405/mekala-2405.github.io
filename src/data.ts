import type { PortfolioData } from './types';

/* ============================================================
   EDIT EVERYTHING HERE. Add a project / skill / job / cert by
   adding an entry to the arrays below. Array order = display
   order (first project becomes _01., etc.).

   Project previews: set `preview: true` only when `live` points
   to a site that allows being embedded in an iframe (your own
   sites usually do). GitHub repo pages and many hosts block
   embedding, so use `preview: false` there — the card shows a
   lettered placeholder instead of a blank frame.
   ============================================================ */
export const DATA: PortfolioData = {
  name: 'Harsh Vardhan Reddy',
  lastName: 'MEKALA',
  role: 'Robotics & Full-Stack Developer',
  tagline:
    'A developer and robotics engineer building intelligent systems across <strong>perception, planning, and execution</strong>, from production robotics pipelines to full-stack web apps.',
  email: 'mekalaharshvardhanreddy@gmail.com',
  website: 'https://mharsh.me',
  socials: {
    github: 'https://github.com/mekala-2405',
    linkedin: 'https://www.linkedin.com/in/harsh-vardhan-reddy-mekala-982144307/',
  },
  stats: [
    { value: 5, suffix: '+', label: 'Projects' },
    { value: 1, suffix: '', label: 'Publication' },
    { value: 1, suffix: '', label: 'Internship' },
  ],
  about: [
    "I'm <strong>Harsh Vardhan Reddy Mekala</strong>, a developer focused on agentic systems, robotics, and full-stack engineering. I build things that work in the real world, from production robotics pipelines to web applications.",
    'Currently interning at <strong>Roboparadigm (Teleparadigm)</strong>, where I designed and deployed a production-grade agentic robotics system for laboratory automation. CS50P certified. Always building.',
    'Find me at <strong>mharsh.me</strong>.',
  ],
  skills: [
    { group: 'Robotics & AI', items: ['ROS 2', 'MoveIt 2', 'LangGraph', 'YOLO', 'Diffusion Policy', 'ACT', 'LeRobot', 'DPVO', 'COLMAP'] },
    { group: 'Backend & Infra', items: ['Python', 'asyncio', 'Redis', 'AWS', 'FastAPI'] },
    { group: 'Frontend', items: ['React', 'TypeScript', 'Streamlit'] },
  ],
  experience: [
    {
      company: 'Roboparadigm',
      period: '2026 to Present',
      role: 'Agentic Robotics Pipeline for Lab Automation',
      desc: "Designed and deployed a production-grade agentic robotics system for laboratory automation, built around a modular perception-planning-execution stack. Integrated RealSense and webcam-based perception with YOLO instance segmentation and a VLM-driven world state module.<br><br>Task planning via a LangGraph-based dispatcher coordinating parallel async execution: world state inference, RAG-based skill retrieval, and sub-policy loading run concurrently via asyncio. Communication managed through a Redis event bus. Execution over ROS 2 and MoveIt 2, with learned motor skills as ACT and Diffusion Policy sub-policies trained using LeRobot. Trajectory generation leverages DPVO and COLMAP on AWS.",
      tags: ['ROS 2', 'LangGraph', 'YOLO', 'Redis', 'asyncio', 'LeRobot', 'AWS', 'MoveIt 2'],
    },
  ],
  projects: [
    {
      name: 'Punch.io',
      desc: "Punch.io turns a team's Discord conversations into a searchable project record. It stores messages locally, builds a semantic search index, and uses Groq to answer questions with source messages attached.",
      tech: ['Python', 'Streamlit'],
      live: 'https://punchio.mharsh.me',
      github: 'https://github.com/mekala-2405/Punch.io',
      preview: true,
    },
    {
      name: 'Gesture Recognition',
      desc: 'Computer vision system for real-time gesture recognition for accessing computers in difficult to navigate environments.',
      tech: ['Computer Vision', 'Python'],
      live: '',
      github: 'https://github.com/Talos-Sentries101/Gesture-Recongnition',
      preview: false,
    },
    {
      name: 'Personal Project',
      desc: 'A personal project for tracking workouts, weight and PRs in the gym locally in the browser, with AI insight support to analyse your health and overall workout progression. Live deployment.',
      tech: ['Web'],
      live: 'https://personal.health.mharsh.me',
      github: 'https://github.com/mekala-2405/ideal-octo-adventure',
      preview: true,
    },
    {
      name: 'Airline Review Analyzer',
      desc: 'Analyzes airline reviews to surface insights and sentiment patterns.',
      tech: ['AI', 'NLP', 'Vercel'],
      live: 'https://v0-airline-review-analyzer.vercel.app/analyzer',
      github: '',
      preview: true,
    },
    {
      name: 'Vakil Legal Bot',
      desc: 'A hackathon project: a legal bot that helps users navigate and understand complex legal jargon.',
      tech: ['NLP', 'Python'],
      live: '',
      github: '',
      preview: false,
    },
  ],
  publications: [
    { title: 'Research Publication', meta: 'Zenodo · DOI: 10.5281/zenodo.21369544', link: 'https://doi.org/10.5281/zenodo.21369544', cta: 'View' },
  ],
  certifications: [
    { title: 'CS50P: Introduction to Programming with Python', meta: 'Harvard University / CS50', link: 'https://certificates.cs50.io/92b6ce75-ee30-4334-a4db-5da1b067a2cb.pdf?size=letter', cta: 'View certificate' },
  ],
};
