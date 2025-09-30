import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import eliasImage from '../assets/elias.png';
import { useLanguage } from '../contexts/LanguageContext';

const AboutStory = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const textSlides = t('about.textSlides');
  const infoSlides = t('about.infoSlides');

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (textSlides.length + infoSlides.length));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + textSlides.length + infoSlides.length) % (textSlides.length + infoSlides.length));
  };



  return (
    <section id="about" className="relative pt-20 pb-20 bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"></div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`bg-orb-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                width: `${30 + Math.random() * 60}px`,
                height: `${30 + Math.random() * 60}px`,
                background: `radial-gradient(circle, ${
                  ['rgba(59, 130, 246, 0.08)', 'rgba(99, 102, 241, 0.08)', 'rgba(139, 92, 246, 0.08)'][Math.floor(Math.random() * 3)]
                }, transparent)`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-700 text-transparent bg-clip-text">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Profile Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Profile Image Container */}
            <div className="relative max-w-sm mx-auto">
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl transform rotate-2"></div>
              
              {/* Main Image */}
              <motion.div
                className="relative bg-white/40 backdrop-blur-xl rounded-3xl border-2 border-white/40 shadow-2xl overflow-hidden p-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={eliasImage}
                  alt="Elias Luzwehimana"
                  className="w-full h-auto rounded-2xl object-cover shadow-lg"
                />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-blue-400/30 animate-pulse"></div>
              </motion.div>

              {/* Tech Stack Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 -right-2 flex flex-wrap gap-1"
              >
                {['JavaScript', 'Python', 'AWS'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-white/80 backdrop-blur-xl border border-blue-200/40 text-slate-700 rounded-full shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Content Slider Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Slider Container */}
            <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl p-4">
              {/* Navigation Controls */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex gap-1">
                  <motion.button
                    onClick={prevSlide}
                    className="w-8 h-8 bg-white/80 backdrop-blur-xl rounded-full border border-white/40 flex items-center justify-center text-slate-600 hover:text-slate-800 hover:bg-white shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    ←
                  </motion.button>
                  <motion.button
                    onClick={nextSlide}
                    className="w-8 h-8 bg-white/80 backdrop-blur-xl rounded-full border border-white/40 flex items-center justify-center text-slate-600 hover:text-slate-800 hover:bg-white shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    →
                  </motion.button>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex gap-1 mb-4">
                {[...Array(textSlides.length + infoSlides.length)].map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-blue-500 w-6' : 'bg-slate-300 w-2'
                    }`}
                  />
                ))}
              </div>

              {/* Content Display */}
              <div className="min-h-[200px]">
                    <AnimatePresence mode="wait">
                      {currentSlide < textSlides.length ? (
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="text-slate-700 leading-relaxed"
                        >
                          {textSlides[currentSlide]}
                        </motion.div>
                      ) : (
                        <motion.div
                          key={currentSlide}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                            {infoSlides[currentSlide - textSlides.length].title}
                          </h3>
                          <div className="space-y-2">
                            {infoSlides[currentSlide - textSlides.length].items.map((item, index) => (
                              <div key={index} className="flex items-start gap-2 text-slate-700">
                                <div className={`w-1 h-1 rounded-full mt-2 ${
                                  index === 0 ? 'bg-blue-500' : 
                                  index === 1 ? 'bg-indigo-500' : 'bg-purple-500'
                                }`}></div>
                                <span className="text-sm leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutStory; 