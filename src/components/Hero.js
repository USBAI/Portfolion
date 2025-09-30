import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesConfig } from '../config/particlesConfig';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Unique Floating Orbs & Neural Network Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Floating Orbs with Glow */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={`orb-${i}`}
              className="absolute rounded-full animate-float-orb"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 80}px`,
                height: `${20 + Math.random() * 80}px`,
                background: `radial-gradient(circle, ${
                  ['rgba(59, 130, 246, 0.1)', 'rgba(99, 102, 241, 0.1)', 'rgba(139, 92, 246, 0.1)'][Math.floor(Math.random() * 3)]
                }, transparent)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            >
              <div className="w-full h-full rounded-full border border-blue-200/30 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Dynamic Code Snippets */}
        <div className="absolute inset-0">
          {[
            'const future = () => {}',
            'function innovate() {}',
            'export default Magic',
            'import { Dreams }',
            '// Building tomorrow',
            'async/await success'
          ].map((code, i) => (
            <div
              key={`code-${i}`}
              className="absolute text-xs font-mono text-blue-400/20 animate-code-drift select-none"
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${12 + Math.random() * 8}s`,
              }}
            >
              {code}
            </div>
          ))}
        </div>

        {/* Morphing Geometric Patterns */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`morph-${i}`}
              className="absolute animate-morphing opacity-20"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                width: '60px',
                height: '60px',
                background: `conic-gradient(from ${Math.random() * 360}deg, transparent, rgba(59, 130, 246, 0.1), transparent)`,
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Ambient Light Rays */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute animate-light-ray"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: '2px',
                height: `${100 + Math.random() * 200}px`,
                background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.1), transparent)',
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>
      </div>

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          ...particlesConfig,
          particles: {
            ...particlesConfig.particles,
            color: { value: "#3b82f6" },
            opacity: { value: 0.3 }
          }
        }}
        className="absolute inset-0 z-10"
      />

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center px-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto text-center"
        >
          <div className="space-y-8">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800 text-transparent bg-clip-text leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/elias-nhunzwenimana-191a66233/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-blue-200/40 text-slate-700 hover:bg-white/90 hover:border-blue-300/60 hover:text-slate-800 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl min-w-[160px]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t('hero.contactBtn')}</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://github.com/USBAI"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-blue-200/40 text-slate-700 hover:bg-white/90 hover:border-blue-300/60 hover:text-slate-800 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl min-w-[160px]"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t('hero.projectsBtn')}</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float-orb {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) translateX(-5px) scale(0.9);
            opacity: 1;
          }
          75% {
            transform: translateY(-20px) translateX(-15px) scale(1.05);
            opacity: 0.7;
          }
        }

        @keyframes code-drift {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }

        @keyframes morphing {
          0%, 100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            transform: rotate(0deg) scale(1);
          }
          25% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(90deg) scale(1.1);
          }
          50% {
            border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
            transform: rotate(180deg) scale(0.8);
          }
          75% {
            border-radius: 30% 70% 60% 40% / 40% 60% 30% 70%;
            transform: rotate(270deg) scale(1.2);
          }
        }

        @keyframes light-ray {
          0%, 100% {
            opacity: 0;
            transform: scaleY(0);
          }
          50% {
            opacity: 0.6;
            transform: scaleY(1);
          }
        }

        .animate-float-orb {
          animation: float-orb var(--duration, 8s) ease-in-out infinite;
        }

        .animate-code-drift {
          animation: code-drift var(--duration, 12s) linear infinite;
        }

        .animate-morphing {
          animation: morphing var(--duration, 6s) ease-in-out infinite;
        }

        .animate-light-ray {
          animation: light-ray var(--duration, 4s) ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
