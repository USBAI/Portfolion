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
      logo: "data:image/jpeg;base64,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",
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