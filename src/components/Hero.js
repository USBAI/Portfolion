import React, { useCallback, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesConfig } from '../config/particlesConfig';
import eliasImage from '../assets/elias.png';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), springConfig);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* System Background Elements */}
      <div className="absolute inset-0 bg-black">
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* Thin Shooting Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent animate-thin-shooting-line"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${50 + Math.random() * 100}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={`blue-${i}`}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-thin-shooting-line"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${30 + Math.random() * 70}px`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Neural Network Connections */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Data Points */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-purple-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `fadeInOut ${2 + Math.random() * 3}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black"></div>
      </div>

      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 z-10"
      />

      {/* Bottom light shine effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-pink-500/30 via-blue-500/20 to-transparent pointer-events-none blur-[100px] z-20"></div>
      <div className="absolute bottom-0 left-1/4 right-1/4 h-[30vh] bg-gradient-to-t from-blue-400/40 via-pink-400/30 to-transparent pointer-events-none blur-[80px] z-20"></div>
      <div className="absolute bottom-0 left-1/3 right-1/3 h-[20vh] bg-gradient-to-t from-white/10 via-blue-300/20 to-transparent pointer-events-none blur-[60px] animate-pulse z-20"></div>
      
      <div className="relative z-30 h-full flex flex-col items-center justify-center gap-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Image container - hidden on mobile */}
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 hidden md:block"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setIsHovered(true)}
              style={{
                perspective: 1000,
              }}
            >
              <motion.img
                src={eliasImage}
                alt="Elias"
                className="w-full h-full object-cover rounded-[20px] md:rounded-[20px]"
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                  transition: "all 0.3s ease",
                  boxShadow: isHovered ? "0 0 20px rgba(255, 255, 255, 0.3)" : "none",
                }}
              />
            </motion.div>

            {/* Text content */}
            <div className="text-center md:text-left max-w-2xl">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Skapar Digitala Lösningar
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-white/80 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                "I kodens värld berättar varje rad en historia, varje funktion löser ett problem, och varje projekt gör skillnad. Genom mjukvaruutveckling bygger vi inte bara kod – vi bygger framtiden, en commit i taget."
              </motion.p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 relative w-full max-w-xl mx-auto mt-12">
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-blue-500/10 to-transparent blur-xl -z-10"></div>
            <motion.a
              href="https://www.linkedin.com/in/elias-nhunzwenimana-191a66233/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span>Se LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>

            <motion.a
              href="https://github.com/USBAI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span>Se GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes thin-shooting-line {
          0% {
            transform: translateX(0) translateY(0) rotate(var(--rotation));
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(100vh) rotate(var(--rotation));
            opacity: 0;
          }
        }

        .animate-thin-shooting-line {
          animation: thin-shooting-line var(--duration) linear infinite;
          --rotation: ${Math.random() * 360}deg;
          --duration: ${1 + Math.random() * 2}s;
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero; 