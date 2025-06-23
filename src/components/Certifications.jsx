import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext'; // adjust path as needed

const Certifications = () => {
  const { darkMode } = useTheme();
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = [
    'All',
    'Backend',
    'Cloud',
    'Database',
    'DevOps',
    'Programming',
    'Web Development',
    'Software Testing',
    'Data Science',
    'Design'
  ];

  const certifications = [
    // Software Testing
    {
      name: "IBM Full Stack Software Developer Specialization",
      category: "Web Development",
      date: "Oct 2024",
      status: "Certified",
      credentialId: "DAJ1OS6MTQBF",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/DAJ1OS6MTQBF"
    },
    {
      name: "Application Development using Microservices and Serverless",
      category: "Backend",
      date: "Aug 2024",
      status: "Certified",
      credentialId: "256N6H87KQIZ",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/256N6H87KQIZ"
    },
    {
      name: "Developing Back-End Apps with Node.js and Express",
      category: "Backend",
      date: "Aug 2024",
      status: "Certified",
      credentialId: "RT7AB69LT15K",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/RT7AB69LT15K"
    },
    {
      name: "Fundamentals of Static Testing",
      provider: "Board Infinity",
      category: "Software Testing",
      date: "Nov 2024",
      status: "Certified",
      credentialId: "UV6X6K4IXWHE",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fQ_V9b8qTE2s3uyMILybeUynBsWMVeD7Ug&s",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/UV6X6K4IXWHE"
    },
    {
      name: "ISTQB Foundation Level Software Testing Certification Prep Specialization",
      provider: "Board Infinity",
      category: "Software Testing",
      date: "Nov 2024",
      status: "Certified",
      credentialId: "DYYF1Z3M6R47",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fQ_V9b8qTE2s3uyMILybeUynBsWMVeD7Ug&s",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/DYYF1Z3M6R47"
    },
    {
      name: "Foundations of Software Testing and Validation",
      provider: "University of Leeds",
      category: "Software Testing",
      date: "Oct 2024",
      status: "Certified",
      credentialId: "FZ5FR3845STD",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fQ_V9b8qTE2s3uyMILybeUynBsWMVeD7Ug&s",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/FZ5FR3845STD"
    },

    // Full Stack Development
    {
      name: "Full Stack Application Development Capstone Project",
      category: "Web Development",
      date: "Aug 2024",
      status: "Certified",
      credentialId: "6O9T88DFGC3M",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/6O9T88DFGC3M"
    },
    {
      name: "Full Stack Software Developer Assessment",
      category: "Web Development",
      date: "Aug 2024",
      status: "Certified",
      credentialId: "F0HLK5GBTE5T",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/F0HLK5GBTE5T"
    },

    // Cloud Computing
    {
      name: "Introduction to Information Technology and AWS Cloud",
      category: "Cloud",
      date: "Oct 2024",
      status: "Certified",
      credentialId: "88NVJOVZFYL7",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/88NVJOVZFYL7"
    },
    {
      name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      category: "Cloud",
      date: "Mar 2024",
      status: "Certified",
      credentialId: "AWS Academy Graduate",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      validUntil: "Lifetime",
      verifyUrl: "https://www.credly.com/badges/53ccef03-41af-471f-8aef-89ec41faa6f7/linked_in_profile"
    },
    {
      name: "AWS Educate Introduction to Cloud 101",
      category: "Cloud",
      date: "Mar 2024",
      status: "Certified",
      credentialId: "AWS Educate",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      validUntil: "Lifetime",
      verifyUrl: "https://www.credly.com/badges/8e49411a-5667-4e72-97fb-72c96ac76346/linked_in_profile"
    },
    {
      name: "Introduction to Cloud Computing",
      category: "Cloud",
      date: "Jun 2024",
      status: "Certified",
      credentialId: "85MGH2ZEWQEH",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",

      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/85MGH2ZEWQEH"
    },

    // Microservices & Backend

    // Frontend Development
    {
      name: "Developing Front-End Apps with React",
      category: "Web Development",
      date: "Aug 2024",
      status: "Certified",
      credentialId: "M5ZM6O8XCHXJ",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/M5ZM6O8XCHXJ"
    },
    {
      name: "Introduction to Web Development with HTML, CSS, JavaScript",
      category: "Web Development",
      date: "Jul 2024",
      status: "Certified",
      credentialId: "T3D2REM77JBQ",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/T3D2REM77JBQ"
    },

    // Database & Django
    {
      name: "Django Application Development with SQL and Databases",
      category: "Database",
      date: "Jul 2024",
      status: "Certified",
      credentialId: "97PS83Q4N4EM",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/97PS83Q4N4EM"
    },

    // DevOps & Containers
    {
      name: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      category: "DevOps",
      date: "Jul 2024",
      status: "Certified",
      credentialId: "8PV5LBFEWUQU",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/8PV5LBFEWUQU"
    },
    {
      name: "Getting Started with Git and GitHub",
      category: "DevOps",
      date: "Jun 2024",
      status: "Certified",
      credentialId: "N924NBST8CDT",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/N924NBST8CDT"
    },

    // Python & Data Science
    {
      name: "Python for Data Science and AI",
      category: "Data Science",
      date: "Jul 2024",
      status: "Certified",
      credentialId: "-",
      logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=1&w=80&h=80",
      validUntil: "Lifetime",
      verifyUrl: "https://www.credly.com/badges/0e5ae69f-63ad-452d-a2c5-21cada5fd765/linked_in_profile"
    },
    {
      name: "Python Project for AI and Application Development",
      category: "Data Science",
      date: "Jul 2024",
      status: "Certified",
      credentialId: "-",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      validUntil: "Lifetime",
      verifyUrl: "https://www.credly.com/badges/f918320f-d86b-4370-8bea-1af65b5e58a4/linked_in_profile"
    },
    {
      name: "Covid-19 Death Medical Analysis & Visualization using Plotly",
      category: "Data Science",
      date: "Aug 2024",
      status: "Certified",
      credentialId: "MCDROKSJ2DGY",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      validUntil: "Lifetime",
      verifyUrl: "https://www.coursera.org/account/accomplishments/verify/MCDROKSJ2DGY"
    },

    // Programming & Problem Solving
    {
      name: "Python",
      category: "Programming",
      date: "Dec 2023",
      status: "Certified",
      credentialId: "39FDC7F3AB55",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      validUntil: "Lifetime",
      verifyUrl: "https://www.hackerrank.com/certificates/39fdc7f3ab55"
    },
    {
      name: "Problem Solving (Basic)",
      category: "Programming",
      date: "Feb 2024",
      status: "Certified",
      credentialId: "2C43DC18E8D1",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      validUntil: "Lifetime",
      verifyUrl: "https://www.hackerrank.com/certificates/2c43dc18e8d1"
    },

    // Database & SQL
    {
      name: "SQL",
      category: "Database",
      date: "Dec 2023",
      status: "Certified",
      credentialId: "741283D4C721",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      validUntil: "Lifetime",
      verifyUrl: "https://www.hackerrank.com/certificates/741283d4c721"
    },
    {
      name: "SQL (Advanced)",
      category: "Database",
      date: "Dec 2023",
      status: "Certified",
      credentialId: "E3D75A8B9FB8",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
      validUntil: "Lifetime",
      verifyUrl: "https://www.hackerrank.com/certificates/e3d75a8b9fb8"
    },

    // UI/UX Design
    {
      name: "UI UX for beginners",
      category: "Design",
      date: "Jan 2024",
      status: "Certified",
      credentialId: "-",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      validUntil: "Lifetime",
      verifyUrl: "https://www.linkedin.com/in/harshtaru/details/certifications/1714510376604/single-media-viewer/?profileId=ACoAADlY8AwBYnDx-pLnLcfxmxo-R95zEBUnmzc"
    }
  ];

const filteredCertifications = activeFilter === 'All'
  ? certifications
  : certifications.filter(cert => cert.category === activeFilter);

// Add state for view all toggle (add this to your component's state)
const [showAll, setShowAll] = useState(false);
const INITIAL_DISPLAY_COUNT = 3; // Show 3 certifications initially

// Determine which certifications to display
const displayedCertifications = showAll 
  ? filteredCertifications 
  : filteredCertifications.slice(0, INITIAL_DISPLAY_COUNT);

const getStatusColor = (status) => {
  switch (status) {
    case 'Certified':
      return darkMode ? 'bg-green-900 text-green-200 border-green-800' : 'bg-green-100 text-green-700 border-green-200';
    case 'In Progress':
      return darkMode ? 'bg-yellow-900 text-yellow-200 border-yellow-800' : 'bg-yellow-100 text-yellow-700 border-yellow-200';
    case 'Expired':
      return darkMode ? 'bg-red-900 text-red-200 border-red-800' : 'bg-red-100 text-red-700 border-red-200';
    default:
      return darkMode ? 'bg-gray-900 text-gray-200 border-gray-800' : 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const getCategoryIcon = (category) => {
  const icons = {
    'All': '🏆',
    'Backend': '⚙️',
    'Cloud': '☁️',
    'Software Testing': '🧪',
    'Web Development': '🌐',
    'Database': '🗄️',
    'DevOps': '🚀',
    'Programming': '💻',
    'Data Science': '📊',
    'Design': '🎨'
  };
  return icons[category] || '📜';
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'Certified':
      return '✅';
    case 'In Progress':
      return '⏳';
    case 'Expired':
      return '❌';
    default:
      return '📜';
  }
};

return (
  <section id="certifications">
    <div className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} min-h-screen py-8 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Certifications
          </h2>
          <p className={`text-base sm:text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Professional certifications and achievements that validate my technical expertise
          </p>
        </div>
              
                      {/* Statistics */}
                      <div className={`mb-16 p-2 sm:p-6 rounded-3xl border shadow-xl
                        ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                        {/* <h3 className={`text-xl sm:text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Certification Statistics
                        </h3> */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                          {[
                            {
                              label: "Total Certified",
                              value: certifications.filter(c => c.status === 'Certified').length,
                              icon: "🏆",
                              color: "green"
                            },
                            {
                              label: "Latest (2024)",
                              value: certifications.filter(c => c.date.includes('2024')).length,
                              icon: "🆕",
                              color: "blue"
                            }, 
                            {
                              label: "IBM Certifications",
                              value: 15,
                              icon: "🔷",
                              color: "blue"
                            },
                            {
                              label: "Cloud & AWS",
                              value: certifications.filter(c => c.category === 'Cloud').length,
                              icon: "☁️",
                              color: "green"
                            }
                          ].map((stat, index) => (
                            <div key={index} className="text-center">
                              <div className={`text-2xl sm:text-3xl mb-2`}>{stat.icon}</div>
                              <div className={`text-xl sm:text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {stat.value}
                              </div>
                              <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            const count = category === 'All' ? certifications.length : certifications.filter(c => c.category === category).length;

            return (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false); // Reset to collapsed view when changing filters
                }}
                className={`px-6 sm:px-3 py-3 sm:py-2 rounded-full font-medium transition-colors duration-150 flex items-center gap-1 sm:gap-2 text-sm sm:text-base ${isActive
                  ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm'
                  }`}
              >
                <span className="text-sm sm:text-lg">{getCategoryIcon(category)}</span>
                <span className="hidden sm:inline">{category}</span>
                <span className="sm:hidden">{category === 'Web Development' ? 'Web' : category === 'Software Testing' ? 'Testing' : category === 'Data Science' ? 'Data' : category}</span>
                <span className={`px-0.5 sm:px-2 py-0.5 rounded-full text-xs font-medium ${isActive
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedCertifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative p-4 sm:p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col
                ${darkMode ? 'bg-gray-800 border-gray-700 hover:border-gray-600' : 'bg-white border-gray-200 hover:border-gray-300'}`}
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

              {/* Header */}
              <div className="relative z-10 flex flex-col sm:flex-row items-start justify-between mb-4 gap-3 sm:gap-0">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 p-2 rounded-xl flex items-center justify-center shadow-md flex-shrink-0
                    ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <img
                      src={cert.logo}
                      alt={cert.provider}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded hidden items-center justify-center text-xs">
                      📜
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className={`inline-flex px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(cert.status)}`}>
                      <span className="mr-1">{getStatusIcon(cert.status)}</span>
                      <span>{cert.status}</span>
                    </span>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-full sm:w-auto">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium w-full sm:w-auto justify-center sm:justify-start
                    ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Certification Details */}
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className={`font-bold text-base sm:text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {cert.name}
                </h3>
                
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {cert.provider}
                </p>

                {/* Date and Validity */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-1 sm:gap-0">
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Issued: {cert.date}
                  </span>
                  <span className={`text-xs sm:text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Valid: {cert.validUntil}
                  </span>
                </div>

                {/* Credential ID */}
                {cert.credentialId !== 'Pending' && (
                  <div className={`p-3 rounded-lg mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Credential ID
                    </p>
                    <p className={`text-xs sm:text-sm font-mono break-all ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {cert.credentialId}
                    </p>
                  </div>
                )}

                {/* Spacer to push verify button to bottom */}
                <div className="flex-1"></div>

                {/* Verify Button - Always at bottom */}
                {cert.status === 'Certified' && cert.verifyUrl && (
                  <button
                    className={`w-full py-2 px-4 mt-4 rounded-lg font-medium text-sm transition-colors duration-200
                      ${darkMode
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    onClick={() => window.open(cert.verifyUrl, '_blank')}
                  >
                    🔗 Verify Certificate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All / Show Less Button */}
        {filteredCertifications.length > INITIAL_DISPLAY_COUNT && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1
                ${darkMode
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                }`}
            >
              <span>{showAll ? '📤 Show Less Certificates' : '📥 View All Certificates'}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium
                ${darkMode ? 'bg-white/20' : 'bg-white/20'}`}>
                {showAll 
                  ? `Hide ${filteredCertifications.length - INITIAL_DISPLAY_COUNT}` 
                  : `+${filteredCertifications.length - INITIAL_DISPLAY_COUNT} more`
                }
              </span>
              <span className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
                ⬇️
              </span>
            </button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-12">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Showing {displayedCertifications.length} of {filteredCertifications.length} certifications
            {activeFilter !== 'All' && (
              <span className="ml-2">
                in <span className="font-semibold">{activeFilter}</span>
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  </section>
);
}

export default Certifications;