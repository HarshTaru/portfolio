import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDownload, 
  faPaperPlane, 
  faCode, 
  faRocket, 
  faLightbulb,
  faCoffee,
  faGlobe,
  faAward,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('skills');
  const [downloadStatus, setDownloadStatus] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  // Enhanced resume download handler
  const handleResumeDownload = (e) => {
    e.preventDefault();
    
    // Show download initiated status
    setDownloadStatus('downloading');
    
    try {
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = '/portfolio/resume.pdf';
      link.download = 'Harsh_Taru_Resume.pdf'; // Suggests filename for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success status
      setDownloadStatus('success');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setDownloadStatus('');
      }, 3000);
      
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('error');
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setDownloadStatus('');
      }, 3000);
    }
  };

  const highlights = [
    { icon: faCode, text: '5⭐ Python Coder', color: 'text-yellow-500' },
    { icon: faRocket, text: 'Backend Enthusiast', color: 'text-blue-500' },
    { icon: faLightbulb, text: 'Problem Solver', color: 'text-green-500' },
    { icon: faCoffee, text: 'DSA Expert', color: 'text-purple-500' },
  ];

  const stats = [
    { icon: faCode, number: '200+', label: 'LeetCode Solved' },
    { icon: faGlobe, number: '15+', label: 'Projects Built' },
    { icon: faAward, number: '5+', label: 'Certifications' },
    { icon: faRocket, number: '6+', label: 'Months Experience' },
  ];

  const tabContent = {
    skills: {
      title: 'Technical Arsenal',
      content: 'Proficient in Java, Python, and Node.js with hands-on experience in distributed systems and cloud platforms. Strong foundation in DSA with 200+ LeetCode problems solved and 5⭐ Python coding skills on HackerRank.'
    },
    journey: {
      title: 'My Learning Journey',
      content: 'Currently pursuing BTech in Information Technology at VIIT Pune. Gained practical experience as an SDE Intern at OnlineSales.ai, working with real-time data processing, microservices, and cloud technologies.'
    },
    passion: {
      title: 'What Drives Me',
      content: 'Passionate about building scalable backend systems and solving complex problems. I believe in continuous learning and have earned certifications in AWS, Docker, Kubernetes, and Python for Data Science to stay ahead of the curve.'
    }
  };

  // Get button text and styling based on download status
  const getDownloadButtonContent = () => {
    switch (downloadStatus) {
      case 'downloading':
        return {
          text: 'Downloading...',
          icon: faDownload,
          className: 'animate-pulse opacity-75 cursor-not-allowed'
        };
      case 'success':
        return {
          text: 'Downloaded!',
          icon: faDownload,
          className: 'bg-green-600 hover:bg-green-700'
        };
      case 'error':
        return {
          text: 'Try Again',
          icon: faDownload,
          className: 'bg-red-600 hover:bg-red-700'
        };
      default:
        return {
          text: 'Download Resume',
          icon: faDownload,
          className: ''
        };
    }
  };

  const downloadButtonContent = getDownloadButtonContent();

  return (
    <section
      id="about"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main content */}
        <div className="text-center lg:text-left mb-16">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'
              }`}>
                🚀 Fresher | Ready to Code
              </span>
            </div>

            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              From Student to{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Developer
              </span>
            </h2>

            {/* Tab navigation */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div className={`flex rounded-lg p-1 ${
                darkMode ? 'bg-gray-800' : 'bg-gray-200'
              }`}>
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeTab === tab
                        ? darkMode
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-900 shadow-lg'
                        : darkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab === 'journey' ? 'Journey' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className={`mb-8 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ transitionDelay: '200ms' }}>
              <h3 className={`text-xl font-semibold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {tabContent[activeTab].title}
              </h3>
              <p className={`text-lg leading-relaxed max-w-3xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {tabContent[activeTab].content}
              </p>
            </div>

            {/* Enhanced highlights */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '400ms' }}>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`group flex flex-col items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                    darkMode
                      ? 'bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-gray-600'
                      : 'bg-white/80 hover:bg-white border border-gray-200 hover:shadow-lg hover:border-gray-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    darkMode ? 'bg-gray-700 group-hover:bg-gray-600' : 'bg-gray-100 group-hover:bg-gray-50'
                  } group-hover:scale-110 transition-all duration-200`}>
                    <FontAwesomeIcon icon={item.icon} className={`${item.color} text-xl`} />
                  </div>
                  <span className={`font-medium text-center text-sm ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Call to action buttons with enhanced download */}
            <div className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '800ms' }}>
              {/* Enhanced Download Resume Button */}
              <button
                onClick={handleResumeDownload}
                disabled={downloadStatus === 'downloading'}
                className={`group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  downloadButtonContent.className ||
                  (darkMode
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700')
                } ${downloadStatus === 'downloading' ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <FontAwesomeIcon 
                  icon={downloadButtonContent.icon} 
                  className={`${downloadStatus === 'downloading' ? 'animate-spin' : 'group-hover:animate-bounce'}`}
                />
                {downloadButtonContent.text}
                {downloadStatus === 'success' && (
                  <span className="ml-1 text-green-200">✓</span>
                )}
              </button>

              {/* Connect Button */}
              <a
                href="#contact"
                className={`group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 font-semibold transition-all duration-300 transform hover:scale-105 ${
                  darkMode
                    ? 'border-white text-white hover:bg-white hover:text-black hover:shadow-xl'
                    : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white hover:shadow-xl'
                }`}
              >
                <FontAwesomeIcon 
                  icon={faPaperPlane} 
                  className="group-hover:translate-x-1 transition-transform duration-200" 
                />
                Let's Connect
              </a>
            </div>


            {/* Download Status Message */}
            {downloadStatus && (
              <div className={`mt-4 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="flex justify-center lg:justify-start">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                    downloadStatus === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : downloadStatus === 'error'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {downloadStatus === 'success' && '✓ Resume downloaded successfully!'}
                    {downloadStatus === 'error' && '✗ Download failed. Please try again.'}
                    {downloadStatus === 'downloading' && '↓ Preparing download...'}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;