import { FaServer, FaCode, FaTools } from 'react-icons/fa'; 

export const skillsData = [
  {
    id: 'backend',
    title: 'Backend Engineering',
    icon: FaServer,
    skills: [
      { name: 'Node.js', percent: 85 },
      { name: 'Express.js', percent: 85 },
      { name: 'RESTful APIs', percent: 80 },
      { name: 'SQL & NoSQL (MySQL, PostgreSQL, MongoDB)', percent: 75 },
      { name: 'Authentication & Security', percent: 75 },
      { name: 'FastAPI', percent: 60 },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    icon: FaCode,
    skills: [
      { name: 'React', percent: 75 },
      { name: 'Next.js', percent: 65 },
      { name: 'JavaScript', percent: 80 },
      { name: 'TypeScript', percent: 65 },
      { name: 'TailwindCSS', percent: 75 },
      { name: 'Framer Motion', percent: 65 },
    ],
  },
  {
    id: 'tools',
    title: 'Engineering Practices',
    icon: FaTools,
    skills: [
      { name: 'Git & GitHub', percent: 85 },
      { name: 'Docker', percent: 65 },
      { name: 'CI/CD', percent: 70 },
      { name: 'Cloud (AWS)', percent: 65 },
      { name: 'Software Architecture & Engineering', percent: 85 },
      { name: 'Testing & Debugging', percent: 75 },
    ],
  },
];