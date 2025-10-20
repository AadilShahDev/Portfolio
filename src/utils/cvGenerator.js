export const generateCV = () => {
  const cvData = {
    personalInfo: {
      name: "Aadil Shah",
      title: "Full Stack Developer",
      email: "theaadilbukhari@gmail.com",
      phone: "+92 320 1061294",
      location: "Sukkur, Pakistan",
      github: "https://github.com/AadilShahDev"
    },
    summary: "Passionate Full Stack Developer with 2+ years of experience in web and mobile app development. Specialized in React.js, React Native, Node.js, and modern database technologies. Committed to writing clean, efficient code and delivering exceptional user experiences.",
    skills: {
      frontend: ["React.js", "React Native", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
      backend: ["Node.js", "Express.js", "Python", "PHP", "REST APIs", "GraphQL"],
      databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
      tools: ["Git", "Docker", "VS Code", "Postman", "Figma"],
      mobile: ["React Native", "Expo", "Android Development", "iOS Development"]
    },
    experience: [
      {
        title: "Full Stack Developer",
        company: "Freelance",
        duration: "2022 - Present",
        location: "Sukkur, Pakistan",
        responsibilities: [
          "Developed 30+ web and mobile applications using modern technologies",
          "Created responsive and user-friendly interfaces with React.js",
          "Built cross-platform mobile apps using React Native",
          "Designed and implemented RESTful APIs with Node.js and Express",
          "Managed databases and optimized application performance",
          "Collaborated with clients to deliver projects on time and within budget"
        ]
      }
    ],
    projects: [
      {
        name: "E-Commerce Mobile App",
        description: "Full-stack e-commerce mobile application with React Native and Node.js",
        technologies: ["React Native", "Node.js", "MongoDB", "Stripe API"]
      },
      {
        name: "Task Management Web App",
        description: "Collaborative task management platform with real-time updates",
        technologies: ["React.js", "Socket.io", "Express.js", "PostgreSQL"]
      },
      {
        name: "Restaurant Management System",
        description: "Complete restaurant management solution with inventory and order tracking",
        technologies: ["React.js", "Node.js", "MySQL", "PayPal Integration"]
      }
    ],
    education: [
      {
        degree: "Bachelor's in Computer Science",
        institution: "University (Details to be updated)",
        year: "2020-2024",
        location: "Pakistan"
      }
    ]
  };

  // Create CV content as text
  const cvContent = `
AADIL SHAH
Full Stack Developer

Contact Information:
Email: ${cvData.personalInfo.email}
Phone: ${cvData.personalInfo.phone}
Location: ${cvData.personalInfo.location}
GitHub: ${cvData.personalInfo.github}

PROFESSIONAL SUMMARY
${cvData.summary}

TECHNICAL SKILLS
Frontend: ${cvData.skills.frontend.join(', ')}
Backend: ${cvData.skills.backend.join(', ')}
Databases: ${cvData.skills.databases.join(', ')}
Mobile: ${cvData.skills.mobile.join(', ')}
Tools: ${cvData.skills.tools.join(', ')}

WORK EXPERIENCE
${cvData.experience.map(exp => `
${exp.title} | ${exp.company}
${exp.duration} | ${exp.location}
${exp.responsibilities.map(resp => `• ${resp}`).join('\n')}
`).join('\n')}

PROJECTS
${cvData.projects.map(project => `
${project.name}
${project.description}
Technologies: ${project.technologies.join(', ')}
`).join('\n')}

EDUCATION
${cvData.education.map(edu => `
${edu.degree}
${edu.institution} | ${edu.year}
${edu.location}
`).join('\n')}
  `;

  // Create and download the CV file
  const blob = new Blob([cvContent], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Aadil_Shah_CV.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};