import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const skills = {
    education: {
      title: "Utbildning",
      items: [
        {
          institution: "YHögskolan | Chas",
          program: "Fullstack Mjukvaruutveckling",
          duration: "2022 - Nuvarande",
          description: "Omfattande mjukvaruutvecklingsprogram med fokus på modern webbutveckling, molnteknologier och AI-integration."
        }
      ]
    },
    frontend: {
      title: "Frontend-utveckling & UI/UX",
      items: [
        "HTML5 & CSS3 (Avancerad)",
        "JavaScript (ES6+)",
        "React.js & Next.js",
        "Tailwind CSS",
        "Responsiv Design",
        "Figma (UI/UX Design)"
      ]
    },
    backend: {
      title: "Backend-utveckling & Databas",
      items: [
        "Python (Django, FastAPI)",
        "C# (.NET Core)",
        "Node.js (Express.js)",
        "MongoDB (Atlas & Compass)",
        "RESTful API Design",
        "GraphQL",
        "Firebase",
        "AWS (EC2, RDS, Lambda)"
      ]
    },
    deployment: {
      title: "Driftsättning & DevOps",
      items: [
        "Vercel (Frontend-driftsättning)",
        "Heroku (Backend-hosting)", 
        "Git & GitHub (Versionhantering)",
        "CI/CD Pipeline",
        "Docker Containerisering",
        "Kubernetes Orkestrering",
        "Apache Kafka",
        "Elasticsearch"
      ]
    },
    technical: {
      title: "Ytterligare Tekniska Färdigheter",
      items: [
        "Docker & Containerhantering",
        "PowerShell-skriptning",
        "AI & Maskininlärningsintegration",
        "Prompt Engineering",
        "Databasdesign & Optimering",
        "Systemarkitektur"
      ]
    },
    soft: {
      title: "Professionella Färdigheter",
      items: [
        "Effektiv Kommunikation",
        "Teamledning & Samarbete",
        "Problemlösning & Analys",
        "Agil Projektledning",
        "Kontinuerligt Lärande",
        "Kundrelationer"
      ]
    }
  };

  return (
    <section className="relative py-20 bg-black overflow-hidden" id="education">
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
            Utbildning & Färdigheter
          </h2>
          <p className="text-xl text-gray-300">
            Omfattande expertis inom modern mjukvaruutveckling
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {skills.education.items.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-xl p-8 backdrop-blur-sm border border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
              <p className="text-xl text-blue-400 mb-2">{edu.program}</p>
              <p className="text-gray-400 mb-4">{edu.duration}</p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).filter(([key]) => key !== 'education').map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-xl p-6 backdrop-blur-sm border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certification Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 italic">
            Utökar kontinuerligt kunskapen genom professionella certifieringar och praktisk projekterfarenhet
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 