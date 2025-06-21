import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faExternalLinkAlt, faCode, faEye } from '@fortawesome/free-solid-svg-icons';

const projectList = [
  {
    name: 'Pawsitive Connect - Pet Adoption Platform',
    description: 'AI-powered pet adoption platform using VGG16 model to match pets with adopters. Features Flutter mobile app, Firebase backend, and intelligent matching algorithms.',
    tech: ['Flutter', 'Firebase', 'AI/ML', 'VGG16', 'Dart', 'Python'],
    github: 'https://github.com/HarshTaru/PawsitiveConnect',
    demo: '', // Add when deployed
    visit: '', // Add when deployed
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&h=300&fit=crop',
    // featured: true,
  },
  {
    name: 'JTrimURL - URL Shortener',
    description: 'Production-ready platform for shortening URLs with user accounts, analytics dashboard, and comprehensive admin panel for managing links.',
    tech: ['Java', 'Spring Boot', 'MongoDB', 'React', 'REST API'],
    github: 'https://github.com/HarshTaru/JTrimURL',
    demo: '',
    visit: '', // Add when deployed
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    // featured: true,
  },
  {
    name: 'TEXT2SQL with LangChain',
    description: 'Streamlit application that converts natural language questions into SQL queries using Google Gemini model and executes them against databases.',
    tech: ['Python', 'LangChain', 'Google Gemini', 'Streamlit', 'SQL', 'NLP'],
    github: 'https://github.com/HarshTaru/Langchain-on-SQL-Database',
    demo: '',
    visit: '', // Add when deployed
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
  },
  {
    name: 'AI Medicine Kiosk - CURE AI',
    description: 'Sophisticated ML system with 1.6M symptom-diagnosis pairs for personalized medication recommendations based on predicted diagnoses.',
    tech: ['Python', 'Machine Learning', 'Data Science', 'Flask', 'Healthcare AI'],
    github: 'https://github.com/HarshTaru/AI-Medicine-Kiosk-CURE-AI',
    demo: '',
    visit: '',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
    // featured: true,
  },
  {
    name: 'Mental Health Chatbot - MindMender',
    description: 'Advanced chatbot using NLP and ML technologies to provide accessible, empathetic mental health support as a virtual companion.',
    tech: ['Python', 'NLP', 'Flask', 'JavaScript', 'HTML/CSS', 'Transformers'],
    github: 'https://github.com/HarshTaru/MindMender',
    demo: '',
    visit: '', // Add when deployed
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop',
  },
  {
    name: 'Audio Genre Classification',
    description: 'Deep learning system for automatic music genre classification with real-time predictions, enhancing music recommendation systems.',
    tech: ['Python', 'Deep Learning', 'Audio Processing', 'TensorFlow', 'Data Visualization'],
    github: 'https://github.com/HarshTaru/MUSIC-GENRE-CLASSIFICATION',
    demo: '',
    visit: '',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
  },
  {
    name: 'College Recommendation System',
    description: 'ML-powered system using Linear Regression on 50K data points to predict student-college fit with Flask web interface and MySQL backend.',
    tech: ['Python', 'Linear Regression', 'Flask', 'MySQL', 'HTML/CSS', 'Data Science'],
    github: 'https://github.com/HarshTaru/COLLEGE-RECOMMENDATION-SYSTEM',
    demo: '',
    visit: '',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&h=300&fit=crop',

  },
  {
    name: 'Mental Fitness Tracker',
    description: 'Innovative approach to mental health tracking leveraging 68,400+ data points to translate complex mental health data into actionable insights.',
    tech: ['Python', 'Machine Learning', 'Data Analysis', 'Mental Health', 'AI'],
    github: 'https://github.com/HarshTaru/AI-Mental-Fitness-Tracker',
    demo: '',
    visit: '',
    image: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=500&h=300&fit=crop',
  },
  {
    name: 'Python Examination System',
    description: 'Comprehensive examination platform with Tkinter GUI, categorized difficulty levels, data visualization, and performance analytics.',
    tech: ['Python', 'Tkinter', 'SQLite', 'Matplotlib', 'NumPy', 'Data Analysis'],
    github: 'https://github.com/HarshTaru/EXAMINATION-SYSTEM',
    demo: '',
    visit: '',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop',
  },
  {
    name: 'Spotify Clone',
    description: 'Full-featured music player application replicating Spotify\'s interface and functionality with modern web technologies.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Web APIs', 'Responsive Design'],
    github: 'https://github.com/HarshTaru/Spotify-Music-Player',
    demo: '',
    visit: '', // Add when deployed
    image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=500&h=300&fit=crop',
  },
  {
    name: 'Weather App',
    description: 'Real-time weather application providing current conditions and forecasts with responsive design and API integration.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Weather API', 'Responsive Design'],
    github: 'https://github.com/HarshTaru/WeatherApp',
    demo: 'https://harshtaru.github.io/WeatherApp/',
    visit: 'https://harshtaru.github.io/WeatherApp/', // Add when deployed
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
  },
  {
    name: 'RateWise - Pricing Engine',
    description: 'Smart pricing engine with dynamic rule application, API-first architecture, and intelligent pricing algorithms for business optimization.',
    tech: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'Microservices', 'REST API'],
    github: 'https://github.com/HarshTaru/RateWise',
    demo: '',
    visit: '',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
  },
];

const Projects = () => {
  const { darkMode } = useTheme();

  // Featured projects (first 6)
  const featuredProjects = projectList.slice(0, 6);
  const allProjects = projectList;

  const [showAll, setShowAll] = React.useState(false);
  const displayedProjects = showAll ? allProjects : featuredProjects;

  return (
    <section id="work" className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Selected Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Showcasing innovative solutions across AI/ML, web development, and mobile applications
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-1 ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
              } ${project.featured ? 'ring-2 ring-blue-500 ring-opacity-20' : ''}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.name}
                </h3>
                
                <p className={`mb-4 text-sm leading-relaxed flex-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`inline-block text-xs font-medium px-3 py-1 rounded-full border transition-colors ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-200 border-gray-600 hover:bg-gray-600' 
                          : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        darkMode 
                          ? 'text-blue-400 hover:bg-blue-900/20 border border-blue-400/20' 
                          : 'text-blue-600 hover:bg-blue-50 border border-blue-200'
                      }`}
                    >
                      <FontAwesomeIcon icon={faCode} /> Code
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        darkMode 
                          ? 'text-green-400 hover:bg-green-900/20 border border-green-400/20' 
                          : 'text-green-600 hover:bg-green-50 border border-green-200'
                      }`}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Demo
                    </a>
                  )}
                  
                  {project.visit && (
                    <a
                      href={project.visit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        darkMode 
                          ? 'text-purple-400 hover:bg-purple-900/20 border border-purple-400/20' 
                          : 'text-purple-600 hover:bg-purple-50 border border-purple-200'
                      }`}
                    >
                      <FontAwesomeIcon icon={faEye} /> Visit
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1
                ${darkMode
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
          >
            {showAll ? 'Show Less Projects' : 'View All Projects'} 
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
            />
          </button>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-8">
          <a
            href="https://github.com/HarshTaru"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'
            }`}
          >
            View more projects on GitHub <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;