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
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden" id="education">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-700 text-transparent bg-clip-text">
            Utbildning & Färdigheter
          </h2>
          <p className="text-xl text-slate-600">
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
            <div key={index} className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:border-blue-200/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{edu.institution}</h3>
              <p className="text-xl text-blue-600 mb-2 font-medium">{edu.program}</p>
              <p className="text-slate-500 mb-4 font-medium">{edu.duration}</p>
              <p className="text-slate-600 leading-relaxed">{edu.description}</p>
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
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/30 hover:border-blue-200/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-800">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-3 text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
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
          <p className="text-slate-500 italic font-medium">
            Utökar kontinuerligt kunskapen genom professionella certifieringar och praktisk projekterfarenhet
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 