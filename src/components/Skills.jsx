import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // adjust path as needed

const Skills = () => {
  const { darkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = [
    'All',
    'Frontend',
    'Backend', 
    'Database',
    'Cloud',
    'Mobile',
    'Tools'
  ];

  const skills = [
    // Frontend
    { 
      name: "React.js", 
      category: "Frontend",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      projects: "5+ projects", 
      level: "Advanced"
    },
    { 
      name: "JavaScript", 
      category: "Frontend",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      projects: "8+ projects", 
      level: "Advanced"
    },
    { 
      name: "HTML5", 
      category: "Frontend",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      projects: "10+ projects", 
      level: "Advanced"
    },
    { 
      name: "CSS3", 
      category: "Frontend",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      projects: "10+ projects", 
      level: "Advanced"
    },
    
    // Backend
    { 
      name: "Java", 
      category: "Backend",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      projects: "4+ projects", 
      level: "Advanced"
    },
    { 
      name: "Python", 
      category: "Backend",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      projects: "6+ projects", 
      level: "Advanced"
    },
    { 
      name: "Node.js", 
      category: "Backend",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      projects: "5+ projects", 
      level: "Advanced"
    },
    { 
      name: "Spring Boot", 
      category: "Backend",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      projects: "3+ projects", 
      level: "Advanced"
    },
    { 
      name: "Express.js", 
      category: "Backend",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      projects: "4+ projects", 
      level: "Advanced"
    },
    { 
      name: "Flask", 
      category: "Backend",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
      projects: "2+ projects", 
      level: "Intermediate"
    },

    // Database
    { 
      name: "MongoDB", 
      category: "Database",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      projects: "5+ projects", 
      level: "Advanced"
    },
    { 
      name: "PostgreSQL", 
      category: "Database",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      projects: "3+ projects", 
      level: "Advanced"
    },
    { 
      name: "MySQL", 
      category: "Database",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      projects: "3+ projects", 
      level: "Intermediate"
    },
    { 
      name: "Firebase", 
      category: "Database",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      projects: "2+ projects", 
      level: "Advanced"
    },

    // Cloud
    { 
      name: "AWS", 
      category: "Cloud",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      projects: "2+ projects", 
      level: "Intermediate"
    },
    { 
      name: "Google Cloud", 
      category: "Cloud",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
      projects: "2+ projects", 
      level: "Intermediate"
    },
    { 
      name: "Docker", 
      category: "Cloud",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      projects: "3+ projects", 
      level: "Intermediate"
    },
    { 
      name: "Kubernetes", 
      category: "Cloud",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
      projects: "1+ project", 
      level: "Beginner"
    },

    // Mobile
    { 
      name: "Flutter", 
      category: "Mobile",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      projects: "2+ projects", 
      level: "Intermediate"
    },

    // Tools
    { 
      name: "Git", 
      category: "Tools",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      projects: "All projects", 
      level: "Advanced"
    },
    { 
      name: "GitHub", 
      category: "Tools",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      projects: "All projects", 
      level: "Advanced"
    },
    { 
      name: "Linux", 
      category: "Tools",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
      projects: "Server projects", 
      level: "Intermediate"
    }
  ];

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-700';
      case 'Intermediate':
        return darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-700';
      case 'Beginner':
        return darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-700';
      default:
        return darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'All': '⭐',
      'Frontend': '🎨',
      'Backend': '⚙️',
      'Database': '🗄️',
      'Cloud': '☁️',
      'Mobile': '📱',
      'Tools': '🔧'
    };
    return icons[category] || '📦';
  };

  return (
    <section id="skills" className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Technologies and tools I've mastered through hands-on projects and internship experience
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterCategories.map((category, index) => {
            const isActive = activeFilter === category;
            const count = category === 'All' ? skills.length : skills.filter(s => s.category === category).length;
            
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-150 flex items-center gap-2 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
                    : darkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm'
                }`}
              >
                <span className="text-lg">{getCategoryIcon(category)}</span>
                <span>{category}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  isActive 
                    ? 'bg-blue-500 text-white' 
                    : darkMode 
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-200 text-gray-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`group relative p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer
              ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'}`}
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl"></div>
              
              {/* Skill Image/Icon */}
              <div className="relative z-10 flex justify-center mb-4">
                <div className={`w-16 h-16 p-3 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200
                  ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <img 
                    src={skill.image} 
                    alt={skill.name}
                    className="w-10 h-10 object-contain transition-transform duration-200 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className={`w-10 h-10 rounded-lg items-center justify-center font-bold text-sm hidden
                      ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {skill.name.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Skill Name */}
              <h3 className={`relative z-10 text-center font-semibold text-sm mb-3 transition-colors duration-200
                ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {skill.name}
              </h3>

              {/* Level Badge */}
              <div className="relative z-10 flex justify-center mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${getLevelColor(skill.level)}`}>
                  {skill.level}
                </span>
              </div>

              {/* Projects */}
              <p className={`relative z-10 text-center text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {skill.projects}
              </p>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className={`px-2 py-1 rounded-full text-xs font-medium
                  ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Count */}
        <div className="text-center mt-12">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Showing {filteredSkills.length} of {skills.length} skills
            {activeFilter !== 'All' && (
              <span className="ml-2">
                in <span className="font-semibold">{activeFilter}</span>
              </span>
            )}
          </p>
        </div>

        {/* Project Experience Section */}
        <div className={`mt-16 p-8 rounded-3xl border shadow-xl
          ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Project Experience & Implementations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Full-Stack Web Apps", desc: "MERN stack projects", icon: "🌐" },
              { title: "RESTful APIs", desc: "Backend service development", icon: "🔗" },
              { title: "Database Design", desc: "SQL & NoSQL implementations", icon: "🗄️" },
              { title: "Cloud Deployment", desc: "AWS & GCP project hosting", icon: "☁️" },
              { title: "Mobile Applications", desc: "Flutter cross-platform apps", icon: "📱" },
              { title: "Data Processing", desc: "ETL pipelines & analytics", icon: "🔄" },
              { title: "Version Control", desc: "Git workflows & collaboration", icon: "🔀" },
              { title: "UI/UX Implementation", desc: "Responsive design projects", icon: "🎨" },
              { title: "Microservices", desc: "Containerized architectures", icon: "🏗️" }
            ].map((experience, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl border transition-colors duration-200 hover:shadow-md
                ${darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-650' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
              >
                <div className="flex gap-3">
                  <div className="flex-shrink-0 text-xl">{experience.icon}</div>
                  <div className="flex flex-col">
                    <h4 className={`font-semibold text-sm mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {experience.title}
                    </h4>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {experience.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;