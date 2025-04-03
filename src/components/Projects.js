import React from 'react';
import { motion } from 'framer-motion';

const LiveIndicator = () => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <span className="flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </div>
    <span className="text-green-400 text-sm">Live</span>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Vornify AI",
      description: "En AI-driven plattform som transformerar webbutveckling genom att omvandla idéer till fullt fungerande produkter inom några timmar. Kombinerar öppen källkod och proprietär teknologi med Cloud AI APIs för att leverera intelligenta lösningar med dynamisk kodgenerering.",
      isLive: true,
      projectLink: "https://vornify.se",
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Python",
        "FastAPI",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "AWS",
        "Docker",
        "Kubernetes"
      ],
      logo: (
        <svg width="35" height="30" viewBox="0 0 67 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-300 group-hover:scale-110">
          <path d="M25.0134 5.61606C28.9281 -0.664659 38.0719 -0.664669 41.9866 5.61605L65.1066 42.7105C69.2582 49.3714 64.4689 58 56.6201 58H10.3799C2.5311 58 -2.25824 49.3714 1.89335 42.7105L25.0134 5.61606Z" fill="white"/>
          <path d="M44.9876 25.1599C49.0198 25.204 51.5789 29.4242 49.5217 32.6368L37.7091 51.0833C35.7115 54.2027 30.8308 54.0314 28.8546 50.7726L17.515 32.0731C15.5388 28.8142 17.9202 24.8642 21.8353 24.9069L44.9876 25.1599Z" fill="black"/>
        </svg>
      ),
      author: {
        name: "Elias Luzwehimana",
        email: "eliasnhunzwe@gmail.com",
        github: "https://github.com/USBAI",
        linkedin: "https://www.linkedin.com/in/elias-nhunzwenimana-191a66233/"
      }
    },
    {
      title: "Kluret AI",
      description: "En avancerad AI-driven sökmotor som revolutionerar produktupptäckt på europeiska e-handelsplattformar. Utnyttjar toppmoderna maskininlärningsalgoritmer för att förenkla shoppingupplevelser med intelligenta sökfunktioner och realtidsinsikter om produkter.",
      isLive: true,
      projectLink: "https://kluret.se",
      technologies: [
        "React.js",
        "Next.js",
        "Python",
        "Django",
        "MongoDB",
        "PostgreSQL",
        "TensorFlow",
        "OpenAI APIs",
        "Elasticsearch",
        "AWS",
        "Docker"
      ],
      logo: (
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-300 group-hover:scale-110">
          <rect width="100" height="100" rx="50" fill="black"/>
          <rect x="42" y="15" width="50" height="50" rx="25" fill="white"/>
          <path d="M1.5 62H98.5V62C98.2174 65.3914 95.3823 68 91.9792 68H8.02079C4.61764 68 1.78261 65.3914 1.5 62V62Z" fill="white"/>
        </svg>
      ),
      author: {
        name: "Elias Luzwehimana",
        email: "eliasnhunzwe@gmail.com",
        github: "https://github.com/USBAI",
        linkedin: "https://www.linkedin.com/in/elias-nhunzwenimana-191a66233/"
      }
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden" id="projects">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Utvalda Projekt
          </h2>
          <p className="text-xl text-gray-300">
            Visar innovation genom teknologi
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div className="flex flex-col gap-8">
                  {/* Project Header with Logo */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl backdrop-blur-sm border border-white/5">
                        {project.logo}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-1">
                          {project.title}
                        </h3>
                        {project.isLive && <LiveIndicator />}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-blue-400 mb-3">
                      Använda Teknologier
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mt-4 group/link"
                  >
                    <span>Se Projekt</span>
                    <svg 
                      className="w-5 h-5 transform transition-transform duration-200 group-hover/link:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/USBAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full text-white hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all duration-300 backdrop-blur-sm border border-white/5 hover:border-white/10 group"
          >
            <span className="text-lg">Se Fler Projekt</span>
            <svg 
              className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 
