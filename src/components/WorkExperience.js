import React from 'react';
import { motion } from 'framer-motion';
import teliaLogo from '../assets/telia.png';
import { useLanguage } from '../contexts/LanguageContext';

const WorkExperience = () => {
  const { t } = useLanguage();
  const experiences = t('workExperience.experiences');

  return (
    <section className="relative py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden" id="experience">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-700 text-transparent bg-clip-text">
            {t('workExperience.title')}
          </h2>
          <p className="text-xl text-slate-600">
            {t('workExperience.subtitle')}
          </p>
        </motion.div>

        {/* Roadmap with connecting lines */}
        <div className="relative">
          {/* Timeline line - positioned absolutely behind cards */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 opacity-30 hidden lg:block"></div>
          
          <div className="flex flex-wrap gap-8 justify-start relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex-1 min-w-[350px] max-w-[450px] relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>
                
                {/* Connecting line to card */}
                <div className="absolute -left-2 top-10 w-6 h-0.5 bg-gradient-to-r from-blue-400 to-transparent opacity-50 hidden lg:block"></div>
                
                <div className="h-full bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:border-blue-200/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 relative z-20">
                <div className="flex flex-col gap-6 h-full">
                  {/* Header */}
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm flex items-center justify-center p-2 border border-slate-200/40 flex-shrink-0">
                      <img
                        src={exp.logo === 'telia' ? teliaLogo : exp.logo}
                        alt={`${exp.company} logotyp`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-3 flex-wrap">
                          <span className="truncate">{exp.company}</span>
                          {exp.current && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full border border-green-200 whitespace-nowrap">
                              {t('workExperience.current')}
                            </span>
                          )}
                        </h3>
                        <span className="text-blue-600 font-medium text-sm">{exp.period}</span>
                      </div>
                      <p className="text-lg text-slate-700 truncate">{exp.role}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-slate-600 leading-relaxed text-sm flex-grow">
                    {exp.description}
                  </div>

                  {/* Tools & Technologies */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-blue-600 mb-3 font-medium">
                      {t('workExperience.technologiesTitle')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm text-slate-700 hover:text-slate-800 hover:bg-white/80 transition-all duration-300 border border-slate-200/40 whitespace-nowrap"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 