import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Coredination AB",
      role: "Fullstack Developer",
      period: "October 2021 - March 2025",
      logo: "https://th.bing.com/th/id/OIP.ntAKLpwQl_kRyDqhrZwojQAAAA?w=128&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      current: true,
      tools: [
        "React.js", "Node.js", "AWS DynamoDB", "Express.js", "AWS Lambda",
        "TypeScript", "GraphQL", "Next.js", "AWS S3", "Tailwind CSS"
      ],
      description: "Working at Coredination AB has been an incredible journey of growth and innovation. I've had the opportunity to work on cutting-edge projects, implementing serverless architectures with AWS and modern frontend solutions. The collaborative environment and challenging projects have helped me expand my full-stack expertise significantly."
    },
    {
      company: "Scania",
      role: "Backend Developer",
      period: "February 2020 - March 2022",
      logo: "https://th.bing.com/th?q=Scania+Logo+High+Resolution&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=sv-SE&cc=SE&setlang=en&adlt=moderate&t=1&mw=247",
      current: false,
      tools: [
        "Python", "Django", "PostgreSQL", "AWS RDS", "Docker", "Jenkins",
        "AWS EC2", "REST APIs", "Git", "AWS CloudFormation"
      ],
      description: "At Scania, I specialized in backend development for enterprise-level applications that impacted the automotive industry. Working with AWS cloud services and PostgreSQL databases, I developed robust backend solutions that handled large-scale data processing. I particularly enjoyed optimizing database performance and implementing efficient API architectures."
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden" id="experience">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Work Experience
          </h2>
          <p className="text-xl text-gray-300">
            Professional journey and contributions
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex flex-col gap-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white/5 flex items-center justify-center p-2">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                          {exp.company}
                          {exp.current && (
                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                              Current
                            </span>
                          )}
                        </h3>
                        <span className="text-blue-400 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-lg text-white/80">{exp.role}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </div>

                  {/* Tools & Technologies */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-blue-400 mb-3">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool, toolIndex) => (
                        <span
                          key={toolIndex}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-300"
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
    </section>
  );
};

export default WorkExperience; 