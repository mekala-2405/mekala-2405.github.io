// import type { PortfolioData } from './types';

// /* ============================================================
//    EDIT EVERYTHING HERE. Add a project / skill / job / cert by
//    adding an entry to the arrays below. Array order = display
//    order (first project becomes _01., etc.).

//    Project previews: set `image: '/projects/<slug>.webp'` to show a static
//    thumbnail instead of a live frame. Otherwise `preview: true` embeds
//    `live` in an iframe on hover (only works when the site allows embedding),
//    and `preview: false` shows a lettered placeholder.
//    ============================================================ */
// export const DATA: PortfolioData = {
//   name: 'Harsh Vardhan Reddy',
//   lastName: 'MEKALA',
//   role: 'ML/AI Engineer & Robotics Developer',
//   tagline:
//     'An ML/AI engineer and robotics developer building intelligent systems across <strong>perception, planning, and execution</strong>, from production robotics pipelines to AI-powered applications.',
//   email: 'mekalaharshvardhanreddy@gmail.com',
//   website: 'https://mharsh.me',
//   socials: {
//     github: 'https://github.com/mekala-2405',
//     linkedin: 'https://www.linkedin.com/in/harsh-vardhan-reddy-mekala-982144307/',
//     discord: 'https://discord.com/users/1366803776580751491',
//   },
//   stats: [
//     { value: 5, suffix: '+', label: 'Projects' },
//     { value: 1, suffix: '', label: 'Publication' },
//     { value: 1, suffix: '', label: 'Internship' },
//   ],
//   about: [
//     "I'm <strong>Mekala Harshvardhan Reddy</strong> (Harsh Vardhan Reddy Mekala), an ML/AI engineer focused on agentic systems, robotics, and intelligent automation. I build things that work in the real world, from production robotics pipelines to ML-driven applications.",
//     'Currently interning at <strong>Roboparadigm (Teleparadigm)</strong>, where I designed and deployed a production-grade agentic robotics system for laboratory automation. CS50P certified. Always building.',
//     'Find me at <strong>mharsh.me</strong>.',
//   ],
//   skills: [
//     { group: 'Robotics & AI', items: ['ROS 2', 'MoveIt 2', 'LangGraph', 'YOLO', 'WAMs', 'ACT', 'LeRobot'] },
//     { group: 'Backend & Infra', items: ['Python', 'Docker', 'AWS','linux'] },
   
//   ],
//   experience: [
//     {
//       company: 'Roboparadigm',
//       period: '2025 to Present',
//       role: 'Agentic Robotics Pipeline for Lab Automation',
//       desc: "Designed and deployed a production-grade agentic robotics system for laboratory automation, built around a modular perception-planning-execution stack. Integrated RealSense and webcam-based perception with YOLO instance segmentation and a VLM-driven world state module.<br><br>Task planning via a LangGraph-based dispatcher coordinating parallel async execution: world state inference, RAG-based skill retrieval, and sub-policy loading run concurrently via asyncio. Communication managed through a Redis event bus. Execution over ROS 2 and MoveIt 2, with learned motor skills as ACT and Diffusion Policy sub-policies trained using LeRobot.Currently exploring World Action Models like Dreamzero and Fast-WAM",
//       tags: ['ROS 2', 'LangGraph', 'YOLO', 'Redis', 'LeRobot', 'AWS', 'MoveIt 2','Docker', 'Issac Lab','Cosmos by NVIDIA'],
//       image: '/internship.jpeg',
//     },
//   ],
//   projects: [
//     {
//       name: 'Punch.io',
//       slug: 'punchio',
//       desc: "Punch.io turns a team's Discord conversations into a searchable project record. It stores messages locally, builds a semantic search index, and uses Groq to answer questions with source messages attached.",
//       tech: ['Python', 'Langchain' , 'RAG','Discord bots','LLM'],
//       live: 'https://punchio.mharsh.me',
//       github: 'https://github.com/mekala-2405/Punch.io',
//       preview: true,
//     },
//     {
//       name: 'Gesture Recognition',
//       slug: 'gesture-recognition',
//       desc: 'Computer vision system for real-time gesture recognition for accessing computers in difficult to navigate environments.',
//       tech: ['Computer Vision', 'Python','media-pipe','Open-cv',''],
//       live: 'https://github.com/Talos-Sentries101/Gesture-Recongnition',
//       github: 'https://github.com/Talos-Sentries101/Gesture-Recongnition',
//       preview: true,
//     },
//     {
//       name: 'Personal Project',
//       slug: 'personal-project',
//       desc: 'A personal project for tracking workouts, weight and PRs in the gym locally in the browser, with AI insight support to analyse your health and overall workout progression. Live deployment.',
//       tech: ['Web'],
//       live: 'https://personal.health.mharsh.me',
//       github: 'https://github.com/mekala-2405/ideal-octo-adventure',
//       preview: true,
//     },
//     {
//       name: 'Airline Review Analyzer',
//       slug: 'airline-review-analyzer',
//       desc: 'Analyzes airline reviews to surface insights and sentiment patterns.',
//       tech: ['AI', 'NLP', 'Vercel'],
//       live: 'https://v0-airline-review-analyzer.vercel.app/analyzer',
//       github: '',
//       preview: true,
//     },
//     {
//       name: 'Vakil Legal Bot',
//       slug: 'vakil-legal-bot',
//       desc: 'A hackathon project: a legal bot that helps users navigate and understand complex legal jargon.',
//       tech: ['NLP', 'Python'],
//       live: '',
//       github: '',
//       preview: false,
//     },
//   ],
//   publications: [
//     { title: 'Research Publication', meta: 'Zenodo · DOI: 10.5281/zenodo.21369544', link: 'https://doi.org/10.5281/zenodo.21369544', cta: 'View' },
//   ],
//   certifications: [
//     { title: 'CS50P: Introduction to Programming with Python', meta: 'Harvard University / CS50', link: 'https://certificates.cs50.io/92b6ce75-ee30-4334-a4db-5da1b067a2cb.pdf?size=letter', cta: 'View certificate' },
//   ],
// };

import type { PortfolioData } from './types';

export const DATA: PortfolioData = {
  name: 'Harsh Vardhan Reddy',
  lastName: 'MEKALA',
  role: 'ML/AI Engineer & Robotics Developer',
  tagline:
    'An ML/AI engineer and robotics developer building intelligent systems across <strong>perception, planning, and execution</strong>, from production robotics pipelines to AI-powered applications.',
  email: 'mekalaharshvardhanreddy@gmail.com',
  website: 'https://mharsh.me',
  socials: {
    github: 'https://github.com/mekala-2405',
    linkedin: 'https://www.linkedin.com/in/harsh-vardhan-reddy-mekala-982144307/',
    discord: 'https://discord.com/users/1366803776580751491',
  },
  stats: [
    { value: 5, suffix: '+', label: 'Projects' },
    { value: 1, suffix: '', label: 'Publication' },
    { value: 1, suffix: '', label: 'Internship' },
  ],
  about: [
    "I'm <strong>Mekala Harshvardhan Reddy</strong> (Harsh Vardhan Reddy Mekala), an ML/AI engineer focused on agentic systems, robotics, and intelligent automation. I build things that work in the real world, from production robotics pipelines to ML-driven applications.",
    'Currently interning at <strong>Roboparadigm (Teleparadigm)</strong>, where I designed and deployed a production-grade agentic robotics system for laboratory automation. CS50P certified. Always building.',
    'Find me at <strong>mharsh.me</strong>.',
  ],
  skills: [
    {
      group: 'Languages',
      items: ['Python', 'JavaScript', 'SQL'],
    },
    {
      group: 'AI & ML',
      items: ['LangChain', 'LangGraph', 'FAISS', 'HuggingFace', 'Groq', 'RAG', 'NLP'],
    },
    {
      group: 'Robotics & Vision',
      items: ['ROS 2', 'MoveIt 2', 'YOLO', 'OpenCV', 'MediaPipe', 'ACT', 'Diffusion Policy', 'LeRobot', 'Intel RealSense'],
    },
    {
      group: 'Infra & DevOps',
      items: ['Docker', 'AWS', 'Redis', 'Linux', 'Railway'],
    },
    {
      group: 'Databases',
      items: ['SQLite', 'FAISS (vector store)'],
    },
    {
      group: 'Simulation',
      items: ['Isaac Lab', 'Cosmos by NVIDIA'],
    },
  ],
  experience: [
    {
      company: 'Roboparadigm',
      period: '2025 to Present',
      role: 'Agentic Robotics Pipeline for Lab Automation',
      desc: "Designed and deployed a production-grade agentic robotics system for laboratory automation, built around a modular perception-planning-execution stack. Integrated RealSense and webcam-based perception with YOLO instance segmentation and a VLM-driven world state module.<br><br>Task planning via a LangGraph-based dispatcher coordinating parallel async execution: world state inference, RAG-based skill retrieval, and sub-policy loading run concurrently via asyncio. Communication managed through a Redis event bus. Execution over ROS 2 and MoveIt 2, with learned motor skills as ACT and Diffusion Policy sub-policies trained using LeRobot. Currently exploring World Action Models like DreamZero and Fast-WAM.",
      tags: ['ROS 2', 'LangGraph', 'YOLO', 'Redis', 'LeRobot', 'AWS', 'MoveIt 2', 'Docker', 'Isaac Lab', 'Cosmos by NVIDIA'],
      image: '/internship.webp',
    },
  ],
  projects: [
    {
      name: 'Dataset Assembly Studio',
      slug: 'dataset-assembly-studio',
      desc: 'Pipeline for downloading raw LeRobot datasets from Hugging Face, curating and balancing them locally, and exporting verified LeRobot v2.1 datasets. Includes Dataset Assembly Studio — a FastAPI web app that validates datasets, maps cameras and joints, curates episodes into versioned checkpoints, and exports normalized datasets without ever modifying the source.',
      tech: ['Python', 'FastAPI', 'Hugging Face', 'NumPy', 'LeRobot'],
      live: 'https://projects.mharsh.me/data_assembly_studio',
      github: 'https://github.com/mekala-2405/dataset-assembly-studio',
      preview: false,
      image: '/projects/dataset-assembly-studio.webp',
    },
    {
      name: 'Punch.io',
      slug: 'punchio',
      desc: "Turns a team's Discord conversations into a searchable project record. Syncs messages incrementally, builds a local FAISS semantic index, and uses Groq-powered RAG to answer questions with source messages attached. Self-hosted React + FastAPI frontend with a SQLite message store.",
      tech: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'SQLite', 'Groq', 'Discord API', 'Docker'],
      live: 'https://punchio.mharsh.me',
      github: 'https://github.com/mekala-2405/Punch.io',
      preview: false,
      image: '/projects/punchio.webp',
    },
    {
      name: 'Gesture Recognition',
      slug: 'gesture-recognition',
      desc: 'Real-time hand gesture recognition system for controlling a PC without a mouse or keyboard. Supports scroll, volume, brightness, screenshot, and freehand drawing modes — entirely via webcam using hand landmark detection.',
      tech: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI'],
      live: 'https://github.com/Talos-Sentries101/Gesture-Recongnition',
      github: 'https://github.com/Talos-Sentries101/Gesture-Recongnition',
      preview: false,
    },
    {
      name: 'Personal Health Tracker',
      slug: 'personal-health-tracker',
      desc: 'Offline-capable PWA for tracking workouts, body metrics, and progress photos. AI insights via Groq (Llama 3), auto-backup to Google Drive, and installable on iOS. Fully static — no backend required.',
      tech: ['Groq', 'Google Drive API', 'LLM'],
      live: 'https://personal.health.mharsh.me',
      github: 'https://github.com/mekala-2405/ideal-octo-adventure',
      preview: false,
      image: '/projects/personal-health.webp',
    },
    {
      name: 'Airline Review Analyzer',
      slug: 'airline-review-analyzer',
      desc: 'Analyzes airline reviews to surface insights and sentiment patterns.',
      tech: ['AI', 'NLP', 'Vercel'],
      live: 'https://v0-airline-review-analyzer.vercel.app/analyzer',
      github: '',
      preview: false,
    },
    {
      name: 'Vakil Legal Bot',
      slug: 'vakil-legal-bot',
      desc: 'A hackathon project: a legal bot that helps users navigate and understand complex legal jargon.',
      tech: ['NLP', 'Python'],
      live: '',
      github: '',
      preview: false,
    },
  ],
  publications: [
    {
      title: 'Less Real is More: Synthetic Data Dominance in Transparent Object Segmentation with YOLOv26',
      meta: 'Zenodo · DOI: 10.5281/zenodo.21369544 · Keshav Memorial College of Engineering · July 2026',
      link: 'https://doi.org/10.5281/zenodo.21369544',
      cta: 'View',
    },
  ],
  certifications: [
    // Add more certificates here. Drop an image of the certificate into
    // public/certs/ and set `image: '/certs/<file>.png'` — it shows in the
    // stacked card deck. If `image` is omitted, the card falls back to a
    // lettered placeholder.
    {
      title: 'CS50P: Introduction to Programming with Python',
      meta: 'Harvard University / CS50',
      link: 'https://certificates.cs50.io/92b6ce75-ee30-4334-a4db-5da1b067a2cb.pdf?size=letter',
      cta: 'View certificate',
      image: '/certs/cs50p.webp',
    },
    // {
    //   title: 'CS50P: Introduction to Programming with Python',
    //   meta: 'Harvard University / CS50',
    //   link: 'https://certificates.cs50.io/92b6ce75-ee30-4334-a4db-5da1b067a2cb.pdf?size=letter',
    //   cta: 'View certificate',
    //   image: '/certs/cs50p.png',
    // },
  ],
  blogs: [
    // Add blog posts here as they're published. Each entry shows in the
    // Blogs section. Example:
    // { title: 'My first post', meta: 'July 2026 · 5 min read', link: 'https://blog.example.com/post', cta: 'Read' },
  ],
};