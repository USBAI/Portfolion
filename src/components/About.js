import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/cvData';

const SkillCard = ({ title, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card p-6"
  >
    <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-black text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-black to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Skills</h2>
          <div className="glass-card p-6 inline-block">
            <p className="text-xl text-white/90">
              {education.institution} | {education.program}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCard
            title="Frontend Development & UI/UX"
            skills={education.skills.frontend}
            delay={0.2}
          />
          <SkillCard
            title="Backend Development & Database"
            skills={education.skills.backend}
            delay={0.3}
          />
          <SkillCard
            title="Deployment & Version Control"
            skills={education.skills.deployment}
            delay={0.4}
          />
          <SkillCard
            title="Other Technical Skills"
            skills={education.skills.other}
            delay={0.5}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4 text-center text-white">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {education.skills.soft.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 