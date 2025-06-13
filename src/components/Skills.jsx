import { motion } from 'framer-motion';
import { IoLanguage } from 'react-icons/io5';
import { PiDetectiveLight } from 'react-icons/pi';
import { MdOutlineWeb } from 'react-icons/md';

// Data structure with proficiency
const skillsData = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: MdOutlineWeb,
    skills: [
      { name: 'React.js', percent: 90 },
      { name: 'Next.js', percent: 85 },
      { name: 'Node.js', percent: 80 },
      { name: 'UI/UX', percent: 75 },
      { name: 'SEO', percent: 70 },
    ],
  },
  {
    id: 'cyber-sec',
    title: 'Cybersecurity',
    icon: PiDetectiveLight,
    skills: [
      { name: 'Network Security', percent: 85 },
      { name: 'Ethical Hacking', percent: 80 },
      { name: 'Security Engineering', percent: 75 },
      { name: 'Web Security', percent: 70 },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: IoLanguage,
    skills: [
      { name: 'Spanish', percent: 100 },
      { name: 'English', percent: 90 },
      { name: 'Chinese', percent: 40 },
    ],
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: 'beforeChildren' },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60 } },
};

// Circular progress component
const CircularProgress = ({ percent }) => {
  const radius = 30;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2} className="mx-auto">
      <circle
        stroke="#E5E7EB"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <motion.circle
        stroke="#8B5CF6"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeDasharray={circumference + ' ' + circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        strokeLinecap="round"
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className="text-sm font-semibold text-gray-700"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="h-screen snap-start flex flex-col items-center justify-center px-6"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        My Expertise
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillsData.map(({ id, title, icon: Icon, skills }) => (
          <motion.div
            key={id}
            className="bg-secondary p-8 rounded-3xl shadow-2xl flex flex-col items-center text-center"
            variants={cardVariants}
          >
            <Icon className="text-purple-600 text-5xl mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map(({ name, percent }) => (
                <div key={name} className="flex flex-col items-center">
                  <CircularProgress percent={percent} />
                  <span className="mt-2 text-gray-700 font-medium text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
