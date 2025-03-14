import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const skills = {
    education: {
      title: "Education",
      items: [
        {
          institution: "YHögskolan | Chas",
          program: "Full Stack Software Engineering",
          duration: "2022 - Present",
          description: "Comprehensive software engineering program focusing on modern web development, cloud technologies, and AI integration."
        }
      ]
    },
    frontend: {
      title: "Frontend Development & UI/UX",
      items: [
        "HTML5 & CSS3 (Advanced)",
        "JavaScript (ES6+)",
        "React.js & Next.js",
        "Tailwind CSS",
        "Responsive Design",
        "Figma (UI/UX Design)"
      ]
    },
    backend: {
      title: "Backend Development & Database",
      items: [
        "Python (Django, FastAPI)",
        "Java (Spring Boot)",
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
      title: "Deployment & DevOps",
      items: [
        "Vercel (Frontend Deployment)",
        "Heroku (Backend Hosting)",
        "Git & GitHub (Version Control)",
        "CI/CD Pipelines",
        "Docker Containerization",
        "Kubernetes Orchestration"
      ]
    },
    technical: {
      title: "Additional Technical Skills",
      items: [
        "Docker & Container Management",
        "PowerShell Scripting",
        "AI & Machine Learning Integration",
        "Prompt Engineering",
        "Database Design & Optimization",
        "System Architecture"
      ]
    },
    soft: {
      title: "Professional Skills",
      items: [
        "Effective Communication",
        "Team Leadership & Collaboration",
        "Problem-solving & Analysis",
        "Agile Project Management",
        "Continuous Learning",
        "Client Relations"
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
            Education & Skills
          </h2>
          <p className="text-xl text-gray-300">
            Comprehensive expertise in modern software development
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
            Continuously expanding knowledge through professional certifications and hands-on project experience
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 