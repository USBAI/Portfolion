import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      greeting: "Hello! I'm",
      name: "Elias Luzwehimana",
      title: "Creating Digital Solutions",
      subtitle: "Passionate about creating innovative digital solutions",
      description: "In the world of code, every line tells a story, every function solves a problem, and every project makes a difference. Through software development, we don't just build code – we build the future, one commit at a time.",
      contactBtn: "View LinkedIn",
      projectsBtn: "View GitHub",
      downloadCV: "View CV"
    },
    
    // About Story
    about: {
      title: "My Journey in Tech",
      textSlides: [
        "Hello! I'm Elias Luzwehimana, a passionate software developer with a deep fascination for creating innovative digital solutions. My journey in technology began with a simple curiosity about how digital systems work, which quickly developed into a burning passion for software development.",
        "What truly inspires me is the intersection of frontend and backend development. I love creating beautiful, intuitive user interfaces while building robust server architectures. This fullstack perspective allows me to create comprehensive solutions that not only look good but also function seamlessly.",
        "My experience with modern technologies like JavaScript, Python, and AWS has taught me that the best solutions come from understanding both the technical possibilities and the human needs they serve. I'm particularly passionate about AI integration and cloud technologies, constantly exploring new ways to leverage these tools for better user experiences."
      ],
      infoSlides: [
        {
          title: "What Drives Me",
          items: [
            "Building solutions that make a real difference",
            "Exploring new technologies and best practices",
            "Creating intuitive and accessible user experiences"
          ]
        },
        {
          title: "My Approach",
          items: [
            "User-centered design thinking",
            "Clean, maintainable code architecture",
            "Continuous learning and improvement"
          ]
        }
      ]
    },
    
    // Work Experience
    workExperience: {
      title: "Work Experience",
      subtitle: "My professional journey through the world of technology",
      current: "Current",
      technologiesTitle: "Technologies & Tools",
      experiences: [
        {
          company: "Telia",
          role: "Software Engineer", 
          period: "June 2025 - Present",
          logo: "telia",
          current: true,
          tools: [
            "JavaScript", "React", "Express.js", "Apache Kafka", "Grafana", 
            "Kubernetes", "Docker", "SSH", "IntelliJ IDE", "Node.js", "API Development",
            "OpenSearch", "Elasticsearch"
          ],
          description: "As a Software Engineer at Telia, I work within BroadBand Data Mediation and focus on customer portals. I build new features, update programs, and fix bugs to improve the customer experience. My role involves fullstack development with modern tech stack and containerized solutions to ensure scalability and performance."
        },
        {
          company: "Coredination AB",
          role: "Fullstack Developer",
          period: "October 2021 - March 2025",
          logo: "https://th.bing.com/th/id/OIP.ntAKLpwQl_kRyDqhrZwojQAAAA?w=128&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          current: false,
          tools: [
            "React.js", "Node.js", "AWS DynamoDB", "Express.js", "AWS Lambda",
            "TypeScript", "GraphQL", "Next.js", "AWS S3", "Tailwind CSS"
          ],
          description: "Working at Coredination AB has been an incredible journey of growth and innovation. I had the opportunity to work with cutting-edge projects, implement serverless architectures with AWS, and modern frontend solutions. The collaborative environment and challenging projects helped me significantly expand my fullstack expertise."
        },
        {
          company: "Scania",
          role: "Backend Developer",
          period: "February 2020 - March 2022",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Scania_Logo.svg/640px-Scania_Logo.svg.png",
          current: false,
          tools: [
            "Python", "Django", "PostgreSQL", "AWS RDS", "Docker", "Jenkins",
            "AWS EC2", "REST APIs", "Git", "AWS CloudFormation"
          ],
          description: "At Scania, I specialized in backend development for enterprise applications that impacted the automotive industry. Working with AWS cloud services and PostgreSQL databases, I developed robust backend solutions that handled large-scale data processing. I particularly focused on optimizing database performance and implementing efficient API architectures."
        }
      ]
    },
    
    // Projects
    projects: {
      title: "Projects",
      subtitle: "A showcase of my latest work and innovations",
      viewMore: "View More Projects",
      live: "Live",
      technologies: "Technologies",
      projectDescriptions: [
        "An AI-driven platform that transforms web development by converting ideas into fully functional products within hours. Combines open source and proprietary technology with Cloud AI APIs to deliver intelligent solutions with dynamic code generation.",
        "An advanced AI-driven search engine that revolutionizes product discovery on European e-commerce platforms. Leverages cutting-edge machine learning algorithms to streamline shopping experiences with intelligent search capabilities and real-time product insights."
      ]
    },
    
    // Education
    education: {
      title: "Education & Skills",
      subtitle: "Comprehensive expertise in modern software development",
      certificationHint: "Continuously expanding knowledge through professional certifications and hands-on project experience",
      education: {
        title: "Education",
        items: [
          {
            institution: "YHögskolan | Chas",
            program: "Software Engineering",
            duration: "2022 - 2024",
            description: "Comprehensive software development program focusing on modern web development, cloud technologies and AI integration."
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
          "CI/CD Pipeline",
          "Docker Containerization",
          "Kubernetes Orchestration",
          "Apache Kafka",
          "Elasticsearch"
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
          "Problem Solving & Analysis",
          "Agile Project Management",
          "Continuous Learning",
          "Client Relations"
        ]
      }
    },

    // Contact
    contact: {
      title: "Let's Connect",
      subtitle: "Ready to bring your ideas to life? Let's discuss your next project.",
      email: "Email",
      phone: "Phone",
      location: "Stockholm, Sweden",
      sendMessage: "Send Message",
      name: "Name",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "Tell me about your project..."
    }
  },
  
  sv: {
    // Navigation
    nav: {
      home: "Hem",
      about: "Om Mig",
      experience: "Erfarenhet",
      projects: "Projekt",
      education: "Utbildning",
      contact: "Kontakt"
    },
    
    // Hero Section
    hero: {
      greeting: "Hej! Jag är",
      name: "Elias Luzwehimana",
      title: "Skapar Digitala Lösningar",
      subtitle: "Passionerad för att skapa innovativa digitala lösningar",
      description: "I kodens värld berättar varje rad en historia, varje funktion löser ett problem, och varje projekt gör skillnad. Genom mjukvaruutveckling bygger vi inte bara kod – vi bygger framtiden, en commit i taget.",
      contactBtn: "Se LinkedIn",
      projectsBtn: "Se GitHub",
      downloadCV: "Se CV"
    },
    
    // About Story
    about: {
      title: "Min Resa Inom Tech",
      textSlides: [
        "Hej! Jag är Elias Luzwehimana, en passionerad mjukvaruutvecklare med en djup fascination för att skapa innovativa digitala lösningar. Min resa inom teknologi började med en enkel nyfikenhet om hur digitala system fungerar, vilket snabbt utvecklades till en brinnande passion för mjukvaruutveckling.",
        "Det som verkligen inspirerar mig är mötet mellan frontend- och backendutveckling. Jag älskar att skapa vackra, intuitiva användargränssnitt samtidigt som jag bygger robusta serverarkitekturer. Detta fullstack-perspektiv låter mig skapa omfattande lösningar som inte bara ser bra ut utan också fungerar sömlöst.",
        "Min erfarenhet med moderna teknologier som JavaScript, Python och AWS har lärt mig att de bästa lösningarna kommer från förståelsen av både de tekniska möjligheterna och de mänskliga behoven de tjänar. Jag är särskilt passionerad för AI-integration och molnteknologier, och utforskar ständigt nya sätt att utnyttja dessa verktyg för bättre användarupplevelser."
      ],
      infoSlides: [
        {
          title: "Vad Som Driver Mig",
          items: [
            "Bygga lösningar som gör verklig skillnad",
            "Utforska nya teknologier och bästa praxis",
            "Skapa intuitiva och tillgängliga användarupplevelser"
          ]
        },
        {
          title: "Mitt Tillvägagångssätt",
          items: [
            "Användarcentrerat designtänkande",
            "Ren, underhållbar kodarkitektur",
            "Kontinuerligt lärande och förbättring"
          ]
        }
      ]
    },
    
    // Work Experience
    workExperience: {
      title: "Arbetslivserfarenhet",
      subtitle: "Min professionella resa genom teknologins värld",
      current: "Nuvarande",
      technologiesTitle: "Teknologier & Verktyg",
      experiences: [
        {
          company: "Telia",
          role: "Software Engineer",
          period: "Juni 2025 - Nuvarande",
          logo: "telia",
          current: true,
          tools: [
            "JavaScript", "React", "Express.js", "Apache Kafka", "Grafana", 
            "Kubernetes", "Docker", "SSH", "IntelliJ IDE", "Node.js", "API Development",
            "OpenSearch", "Elasticsearch"
          ],
          description: "Som Software Engineer på Telia arbetar jag inom BroadBand Data Mediation och fokuserar på kundportaler. Jag bygger nya funktioner, uppdaterar program och åtgärdar buggar för att förbättra kundupplevelsen. Min roll involverar fullstack-utveckling med modern teknikstack och containeriserade lösningar för att säkerställa skalbarhet och prestanda."
        },
        {
          company: "Coredination AB",
          role: "Fullstack-utvecklare",
          period: "Oktober 2021 - Mars 2025",
          logo: "https://th.bing.com/th/id/OIP.ntAKLpwQl_kRyDqhrZwojQAAAA?w=128&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          current: false,
          tools: [
            "React.js", "Node.js", "AWS DynamoDB", "Express.js", "AWS Lambda",
            "TypeScript", "GraphQL", "Next.js", "AWS S3", "Tailwind CSS"
          ],
          description: "Att arbeta på Coredination AB har varit en otrolig resa av tillväxt och innovation. Jag hade möjligheten att arbeta med banbrytande projekt, implementera serverlösa arkitekturer med AWS och moderna frontend-lösningar. Den samarbetsinriktade miljön och utmanande projekten hjälpte mig att avsevärt utöka min fullstack-expertis."
        },
        {
          company: "Scania",
          role: "Backend-utvecklare",
          period: "Februari 2020 - Mars 2022",
          logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Scania_Logo.svg/640px-Scania_Logo.svg.png",
          current: false,
          tools: [
            "Python", "Django", "PostgreSQL", "AWS RDS", "Docker", "Jenkins",
            "AWS EC2", "REST APIs", "Git", "AWS CloudFormation"
          ],
          description: "På Scania specialiserade jag mig på backend-utveckling för företagsapplikationer som påverkade fordonsindustrin. Genom att arbeta med AWS-molntjänster och PostgreSQL-databaser utvecklade jag robusta backend-lösningar som hanterade storskalig databehandling. Jag fokuserade särskilt på att optimera databasernas prestanda och implementera effektiva API-arkitekturer."
        }
      ]
    },
    
    // Projects
    projects: {
      title: "Utvalda Projekt",
      subtitle: "Visar innovation genom teknologi",
      viewMore: "Se Fler Projekt",
      live: "Live",
      technologies: "Teknologier",
      projectDescriptions: [
        "En AI-driven plattform som transformerar webbutveckling genom att omvandla idéer till fullt fungerande produkter inom några timmar. Kombinerar öppen källkod och proprietär teknologi med Cloud AI APIs för att leverera intelligenta lösningar med dynamisk kodgenerering.",
        "En avancerad AI-driven sökmotor som revolutionerar produktupptäckt på europeiska e-handelsplattformar. Utnyttjar toppmoderna maskininlärningsalgoritmer för att förenkla shoppingupplevelser med intelligenta sökfunktioner och realtidsinsikter om produkter."
      ]
    },
    
    // Education
    education: {
      title: "Utbildning & Färdigheter",
      subtitle: "Omfattande expertis inom modern mjukvaruutveckling",
      certificationHint: "Utökar kontinuerligt kunskapen genom professionella certifieringar och praktisk projekterfarenhet",
      education: {
        title: "Utbildning",
        items: [
          {
            institution: "YHögskolan | Chas",
            program: "Software Engineering",
            duration: "2022 - 2024",
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
    },

    // Contact
    contact: {
      title: "Kontakta Mig",
      subtitle: "Låt oss skapa något fantastiskt tillsammans",
      email: "E-post",
      phone: "Telefon",
      location: "Stockholm, Sverige",
      sendMessage: "Skicka Meddelande",
      name: "Namn",
      message: "Meddelande",
      namePlaceholder: "Ditt namn",
      emailPlaceholder: "din.email@exempel.se",
      messagePlaceholder: "Berätta om ditt projekt..."
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default to English

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sv' : 'en');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};