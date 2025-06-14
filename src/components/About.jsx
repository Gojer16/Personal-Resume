import { motion } from 'framer-motion';
import { aboutSectionVariants, aboutChildVariants, aboutImageVariants } from '../utils/variants'; 

export default function About() {
  return (
    <motion.section
      id="about" 
      className="flex flex-col items-center justify-center min-h-screen py-16 px-4 md:px-8  text-secondary" 
      variants={aboutSectionVariants} 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} 
    >
      <motion.h2
        variants={aboutChildVariants} 
        className="text-3xl md:text-5xl font-extrabold text-primary mb-12 text-center"
      >
        About Me
      </motion.h2>
        <motion.span
            variants={aboutChildVariants}
            className="uppercase text-sm tracking-widest text-primary text-center font-semibold mb-4"
        >
        I don't wait for permission. I build it myself.
        </motion.span>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-6xl mx-auto">
        <motion.div
          variants={aboutImageVariants}
          className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden shadow-lg border-4 border-purple-600"
        >
          <img 
            src="/me.jpg"
            alt="Orlando Ascanio Profile" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
        <div className="md:w-2/3 text-lg md:text-xl text-secondary space-y-6 text-center md:text-left">
          <motion.p variants={aboutChildVariants}>
                I’m Orlando Ascanio, a Backend-Focused Full-Stack Developer from Venezuela, building systems that work as hard as I do. I didn't grow up with privilege, but I learned that mastery, clarity, and grit can outmatch it.
          </motion.p>
          <motion.p variants={aboutChildVariants}>
                I specialize in scalable backend architectures, API engineering, and database systems. While I understand frontend deeply, I don't chase trends I chase purpose. Every tool I learn serves a reason: to build faster, scale smarter, and solve real problems.
          </motion.p>
          <motion.p variants={aboutChildVariants}>
                I don’t vibe-code. I study the system, break it down, and build until I own it. My process is direct, high-pressure, and driven by the belief that my future and my family’s future depends on the systems I build today.
          </motion.p>
          <motion.p variants={aboutChildVariants}>
                I’m currently open to freelance projects, collaborations, and job opportunities where real engineering matters. If you're building something that solves real problems, <a href="#projects" className="text-primary hover:text-purple-300 font-semibold transition-colors">check out my work</a> or <a href="#contact" className="text-primary hover:text-purple-300 font-semibold transition-colors">reach out</a>. I’m ready.
          </motion.p>
        </div>
        
      </div>
    </motion.section>
  );
}