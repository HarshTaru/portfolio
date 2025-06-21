import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Links = () => {
    const { darkMode } = useTheme();
    const [hoveredLink, setHoveredLink] = useState(null);

    // Function to handle resume download
    const handleResumeDownload = (e) => {
        e.preventDefault();
        
        // Create a temporary link element to trigger download
        const link = document.createElement('a');
        link.href = '/portfolio/resume.pdf';
        link.download = 'Harsh_Taru_Resume.pdf'; // This suggests a filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Optional: Show a success message or toast notification
        console.log('Resume download initiated');
    };

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/harshtaru',
            icon: '💼',
            description: 'Professional Network',
            color: 'from-blue-600 to-blue-700',
            hoverColor: 'hover:from-blue-700 hover:to-blue-800',
            bgColor: 'bg-blue-500/10'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/HarshTaru',
            icon: '🐱',
            description: 'Code Repository',
            color: 'from-gray-700 to-gray-800',
            hoverColor: 'hover:from-gray-800 hover:to-gray-900',
            bgColor: 'bg-gray-500/10'
        },
        {
            name: 'LeetCode',
            url: 'https://leetcode.com/u/CodefindsHarsh/',
            icon: '🧩',
            description: 'Coding Practice',
            color: 'from-orange-500 to-orange-600',
            hoverColor: 'hover:from-orange-600 hover:to-orange-700',
            bgColor: 'bg-orange-500/10'
        },
        {
            name: 'Credly',
            url: 'https://www.credly.com/users/harsh-taru',
            icon: '🏆',
            description: 'Certifications',
            color: 'from-green-500 to-green-600',
            hoverColor: 'hover:from-green-600 hover:to-green-700',
            bgColor: 'bg-green-500/10'
        }
    ];

    const additionalLinks = [
        {
            name: 'Resume',
            url: '/resume.pdf',
            icon: '📄',
            description: 'Download CV',
            color: 'from-purple-500 to-purple-600',
            hoverColor: 'hover:from-purple-600 hover:to-purple-700',
            bgColor: 'bg-purple-500/10',
            isDownload: true, // Special flag for download links
            onClick: handleResumeDownload
        },
        {
            name: 'Portfolio',
            url: '#work',
            icon: '🎨',
            description: 'View Projects',
            color: 'from-pink-500 to-pink-600',
            hoverColor: 'hover:from-pink-600 hover:to-pink-700',
            bgColor: 'bg-pink-500/10'
        },
        {
            name: 'Blog',
            url: '#',
            icon: '✍️',
            description: 'Tech Articles',
            color: 'from-indigo-500 to-indigo-600',
            hoverColor: 'hover:from-indigo-600 hover:to-indigo-700',
            bgColor: 'bg-indigo-500/10'
        },
        {
            name: 'Contact',
            url: '#contact',
            icon: '📧',
            description: 'Get in Touch',
            color: 'from-teal-500 to-teal-600',
            hoverColor: 'hover:from-teal-600 hover:to-teal-700',
            bgColor: 'bg-teal-500/10'
        }
    ];

    const allLinks = [...socialLinks, ...additionalLinks];

    return (
        <section className={`py-20 transition-all duration-500 ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border mb-6 ${
                        darkMode 
                            ? 'bg-gray-800/80 border-gray-700 backdrop-blur-sm text-gray-300' 
                            : 'bg-white/80 border-gray-200 backdrop-blur-sm text-gray-700'
                    }`}>
                        <span className="animate-pulse">🔗</span>
                        Connect & Explore
                    </div>
                    
                    <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                        Let's{' '}
                        <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 text-transparent bg-clip-text">
                            Connect
                        </span>
                    </h2>
                    
                    <p className={`text-lg max-w-2xl mx-auto ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        Find me across various platforms and explore my work, achievements, and thoughts on technology.
                    </p>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {allLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.isDownload ? '#' : link.url}
                            target={!link.isDownload && (link.url.startsWith('http') || link.url.startsWith('/resume')) ? '_blank' : '_self'}
                            rel={!link.isDownload && link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                            onClick={link.isDownload ? link.onClick : undefined}
                            className={`group relative p-6 rounded-2xl border transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                                darkMode
                                    ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-gray-600'
                                    : 'bg-white/70 border-gray-200 hover:bg-white hover:border-gray-300'
                            } hover:shadow-2xl ${link.isDownload ? 'cursor-pointer' : ''}`}
                            onMouseEnter={() => setHoveredLink(index)}
                            onMouseLeave={() => setHoveredLink(null)}
                            style={{ 
                                animationDelay: `${index * 0.1}s`,
                                animation: 'fadeInUp 0.6s ease-out forwards'
                            }}
                        >
                            {/* Background Glow Effect */}
                            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${link.bgColor} blur-xl`}></div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon with download indicator */}
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 bg-gradient-to-r ${link.color} ${link.hoverColor} relative`}>
                                    <span className="text-2xl text-white group-hover:animate-bounce">
                                        {link.icon}
                                    </span>
                                    {link.isDownload && (
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                                        darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'
                                    }`}>
                                        {link.name}
                                        {link.isDownload && (
                                            <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                                                darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-500/20 text-green-600'
                                            }`}>
                                                PDF
                                            </span>
                                        )}
                                    </h3>
                                    
                                    <p className={`text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {link.description}
                                    </p>
                                </div>

                                {/* Arrow Icon or Download Icon */}
                                <div className={`absolute top-6 right-6 transition-all duration-300 ${
                                    hoveredLink === index ? 'translate-x-1 -translate-y-1' : ''
                                }`}>
                                    {link.isDownload ? (
                                        <svg 
                                            className={`w-5 h-5 ${
                                                darkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                                            }`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                        </svg>
                                    ) : (
                                        <svg 
                                            className={`w-5 h-5 ${
                                                darkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'
                                            }`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    )}
                                </div>
                            </div>

                            {/* Animated Border Effect */}
                            <div className="absolute inset-0 rounded-2xl">
                                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px' }}>
                                    <div className={`h-full w-full rounded-2xl ${
                                        darkMode ? 'bg-gray-800/50' : 'bg-white/70'
                                    }`}></div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Enhanced Bottom CTA with Resume Download */}
                <div className="text-center mt-16 space-y-4">
                    {/* Primary CTA */}
                    <button 
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                            darkMode
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                                : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                        } shadow-lg hover:shadow-xl`} 
                        onClick={() => window.location.href = 'mailto:taruharsh3093@gmail.com'}
                    >
                        <span className="animate-pulse">💬</span>
                        Have any questions ? Drop a mail!
                    </button>

                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Links;