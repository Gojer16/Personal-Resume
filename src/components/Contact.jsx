import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'; 
import { sectionVariants, headingVariants, itemVariants } from '../utils/variants'; 


export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="min-h-screen py-20 px-4 md:px-8 text-secondary flex flex-col items-center justify-center relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-primary mb-12 text-center z-10"
        variants={headingVariants}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="bg-secondary/10 backdrop-blur-xs p-8 rounded-lg shadow-xl max-w-md w-full text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.p
          className="text-lg md:text-xl text-secondary mb-6"
          variants={itemVariants}
        >
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>

        <div className="space-y-6">
          <motion.div variants={itemVariants}>
            <a
              href="mailto:operation927@gmail.com" 
              className="flex items-center justify-center text-secondary text-lg md:text-xl hover:text-purple-400 transition-colors duration-200"
            >
              <FaEnvelope className="mr-3 text-purple-400" size={24} />
              operation927@gmail.com
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="tel:+58-412-844-9024" 
              className="flex items-center justify-center text-secondary text-lg md:text-xl hover:text-purple-400 transition-colors duration-200"
            >
              <FaPhone className="mr-3 text-purple-400" size={24} />
              +58-412-844-9024
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="https://www.linkedin.com/in/orlando-ascanio-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-secondary text-lg md:text-xl hover:text-purple-400 transition-colors duration-200"
            >
              <FaLinkedin className="mr-3 text-purple-400" size={24} />
              LinkedIn Profile
            </a>
          </motion.div>

          <motion.div variants={itemVariants}>
            <a
              href="https://github.com/Gojer16" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-secondary text-lg md:text-xl hover:text-purple-400 transition-colors duration-200"
            >
              <FaGithub className="mr-3 text-purple-400" size={24} />
              GitHub Profile
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}