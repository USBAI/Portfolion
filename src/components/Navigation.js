import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const CV_URL = "https://moccasin-drusilla-71.tiiny.site/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed w-full z-50 flex justify-center top-[10px]"
      >
        <div className="glass-card backdrop-blur-xl bg-white/80 border-b border-slate-200/30 w-[95%] rounded-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 cursor-pointer"
              >
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
                  Elias
                </span>
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="text-slate-600 hover:text-slate-800 transition-colors duration-300 text-sm uppercase tracking-wider cursor-pointer font-medium"
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                {/* Language Switcher */}
                <div className="flex items-center gap-2 ml-4">
                  <motion.button
                    onClick={toggleLanguage}
                    className={`text-2xl transition-all duration-300 hover:scale-110 ${
                      language === 'en' ? 'opacity-100' : 'opacity-60'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🇺🇸
                  </motion.button>
                  
                  <motion.button
                    onClick={toggleLanguage}
                    className={`text-2xl transition-all duration-300 hover:scale-110 ${
                      language === 'sv' ? 'opacity-100' : 'opacity-60'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🇸🇪
                  </motion.button>
                </div>
                
                <motion.a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-indigo-500/10 rounded-full text-slate-700 hover:from-blue-500/20 hover:via-blue-400/20 hover:to-indigo-500/20 transition-all duration-300 border border-slate-200/50 hover:border-blue-300/50 text-sm uppercase tracking-wider group backdrop-blur-sm"
                >
                  <svg 
                    className="w-4 h-4 transform transition-transform duration-200 group-hover:scale-110" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>{t('hero.downloadCV')}</span>
                </motion.a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center gap-4">
                {/* Mobile Language Switcher */}
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={toggleLanguage}
                    className={`text-xl transition-all duration-300 ${
                      language === 'en' ? 'opacity-100' : 'opacity-60'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    🇺🇸
                  </motion.button>
                  
                  <motion.button
                    onClick={toggleLanguage}
                    className={`text-xl transition-all duration-300 ${
                      language === 'sv' ? 'opacity-100' : 'opacity-60'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    🇸🇪
                  </motion.button>
                </div>

                <motion.a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-indigo-500/10 rounded-full text-slate-700 hover:from-blue-500/20 hover:via-blue-400/20 hover:to-indigo-500/20 transition-all duration-300 border border-slate-200/50 hover:border-blue-300/50 text-sm group backdrop-blur-sm"
                >
                  <svg 
                    className="w-4 h-4 transform transition-transform duration-200 group-hover:scale-110" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>CV</span>
                </motion.a>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-md text-slate-600 hover:text-slate-800 focus:outline-none"
                >
                  <div className="space-y-1.5">
                    <motion.span
                      animate={{
                        rotate: isMobileMenuOpen ? 45 : 0,
                        y: isMobileMenuOpen ? 8 : 0
                      }}
                      className="block w-6 h-0.5 bg-current transition-transform"
                    />
                    <motion.span
                      animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                      className="block w-6 h-0.5 bg-current"
                    />
                    <motion.span
                      animate={{
                        rotate: isMobileMenuOpen ? -45 : 0,
                        y: isMobileMenuOpen ? -8 : 0
                      }}
                      className="block w-6 h-0.5 bg-current transition-transform"
                    />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-slate-200/30 backdrop-blur-xl bg-white/90 w-full absolute top-full left-0 rounded-b-2xl overflow-hidden"
                style={{ marginTop: '1px' }}
              >
                <div className="px-4 py-3 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block px-4 py-2.5 text-base font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-100/50 rounded-xl transition-colors duration-300 cursor-pointer"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Resume Overlay */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black/90 rounded-2xl border border-white/10 p-4 w-full max-w-4xl max-h-[90vh] relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">CV Förhandsvisning</h3>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="text-white/70 hover:text-white"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="relative w-full aspect-[1/1.4] bg-white rounded-lg overflow-hidden">
                <iframe
                  src="/src/assets/Elias Luzwehimana SWE.docx (2).pdf"
                  className="absolute inset-0 w-full h-full"
                  title="Resume Preview"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="/src/assets/Elias Luzwehimana SWE.docx (2).pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Ladda ner CV</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 