import React from 'react';
import { motion } from 'framer-motion';

const AboutStory = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            My Journey in Tech
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300"
          >
            <p className="leading-relaxed">
              Hello! I'm Elias Luzwehimana, a passionate software engineer with a deep fascination for creating innovative digital solutions. My journey in technology began with a simple curiosity about how digital systems work, which quickly evolved into a burning passion for software development.
            </p>
            <p className="leading-relaxed">
              What truly excites me is the intersection of frontend and backend development. I love crafting beautiful, intuitive user interfaces while also building robust server-side architectures. This full-stack perspective allows me to create comprehensive solutions that not only look great but function seamlessly.
            </p>
            <p className="leading-relaxed">
              My experience with modern technologies like React.js, Python, and AWS has taught me that the best solutions come from understanding both the technical possibilities and the human needs they serve. I'm particularly passionate about AI integration and cloud technologies, always exploring new ways to leverage these tools for better user experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">What Drives Me</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">→</span>
                  Building solutions that make a real impact
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  Exploring new technologies and best practices
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">→</span>
                  Creating intuitive and accessible user experiences
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-6 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">My Approach</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">→</span>
                  User-centered design thinking
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-400">→</span>
                  Clean, maintainable code architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-pink-400">→</span>
                  Continuous learning and improvement
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-300 italic">
            "I believe in the power of technology to transform ideas into reality, and I'm committed to being part of that transformation."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory; 