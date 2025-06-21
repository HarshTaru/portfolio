import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    const { darkMode } = useTheme();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/harshtaru',
            icon: '💼',
            color: 'from-blue-600 to-blue-700',
            hoverColor: 'hover:from-blue-700 hover:to-blue-800'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/HarshTaru',
            icon: '🐱',
            color: 'from-gray-700 to-gray-800',
            hoverColor: 'hover:from-gray-800 hover:to-gray-900'
        },
        {
            name: 'LeetCode',
            url: 'https://leetcode.com/u/CodefindsHarsh/',
            icon: '🧩',
            color: 'from-orange-500 to-orange-600',
            hoverColor: 'hover:from-orange-600 hover:to-orange-700'
        },
        {
            name: 'Credly',
            url: 'https://www.credly.com/users/harsh-taru',
            icon: '🏆',
            color: 'from-green-500 to-green-600',
            hoverColor: 'hover:from-green-600 hover:to-green-700'
        }
    ];

    return (
        <section className={`relative overflow-hidden min-h-screen flex items-center transition-all duration-500 ${
            darkMode 
                ? 'bg-gray-900' 
                : 'bg-gray-50'
        }`}>
            
            
            <div className="max-w-8xl mx-auto px-6 relative z-10 pt-32 pb-24">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    
                    {/* Left Content */}
                    <div className={`lg:w-1/2 text-center lg:text-left space-y-8 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        
                        {/* Status Badge */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${
                            darkMode 
                                ? 'bg-gray-800/80 border-gray-700 backdrop-blur-sm' 
                                : 'bg-white/80 border-gray-200 backdrop-blur-sm'
                        }`}>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                Available for Opportunities
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight ${
                                darkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                                Hey, I'm{' '}
                                <span className="relative inline-block group">
                                    <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 text-transparent bg-clip-text">
                                        Harsh Taru
                                    </span>
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                                </span>
                            </h1>

                            {/* Typewriter Effect */}
                            <div className={`text-2xl sm:text-3xl lg:text-4xl font-semibold min-h-[3rem] ${
                                darkMode ? 'text-gray-200' : 'text-gray-800'
                            }`}>
                                <Typewriter
                                    words={[
                                        'SDE Intern @ OnlineSales.ai',
                                        'Backend Developer',
                                        '5⭐ Python Coder',
                                        'System Design Enthusiast',
                                        'Problem Solver'
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                            Passionate about building{' '}
                            <span className="font-semibold text-blue-500">scalable backend systems</span> using{' '}
                            <span className="font-semibold text-purple-500">Java, Python, and Node.js</span>.
                            <br />
                            Experienced with{' '}
                            <span className="font-semibold text-green-500">cloud-native architectures</span> and{' '}
                            <span className="font-semibold text-orange-500">distributed systems</span>.
                        </p>

                        {/* Animated Social Links */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative inline-flex items-center gap-2 px-4 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 bg-gradient-to-r ${link.color} ${link.hoverColor} shadow-lg hover:shadow-xl`}
                                    style={{ 
                                        animationDelay: `${index * 0.1}s`,
                                        animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : 'none'
                                    }}
                                >
                                    <span className="text-lg group-hover:animate-bounce">
                                        {link.icon}
                                    </span>
                                    <span className="relative overflow-hidden">
                                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                                            {link.name}
                                        </span>
                                        <span className="absolute top-full left-0 transition-transform duration-300 group-hover:-translate-y-full">
                                            {link.name}
                                        </span>
                                    </span>
                                    
                                    {/* Animated background effect */}
                                    <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    
                                    {/* Ripple effect */}
                                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-100 transition-all duration-500 rounded-full"></div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8">
                            {[
                                { number: '200+', label: 'LeetCode' },
                                { number: '5⭐', label: 'Python' },
                                { number: '6+', label: 'Months Exp' },
                                { number: '15+', label: 'Projects' }
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className={`text-center p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                                        darkMode 
                                            ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70' 
                                            : 'bg-white/70 border-gray-200 hover:bg-white/90'
                                    }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={`text-2xl font-bold mb-1 ${
                                        darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {stat.number}
                                    </div>
                                    <div className={`text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="#work"
                                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    🚀 View My Work
                                </span>
                            </a>
                            
                            <a
                                href="#contact"
                                className={`group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 font-semibold transition-all duration-300 transform hover:scale-105 ${
                                    darkMode
                                        ? 'border-white text-white hover:bg-white hover:text-gray-900'
                                        : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                                }`}
                            >
                                <span className="group-hover:animate-pulse">✉️</span>
                                Let's Connect
                            </a>
                        </div>

                        {/* Tech Stack Icons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-8">
                            {['Java', 'Python', 'Node.js', 'AWS', 'Docker'].map((tech, index) => (
                                <div
                                    key={tech}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 hover:scale-110 ${
                                        darkMode
                                            ? 'bg-gray-800/60 border-gray-700 text-gray-300'
                                            : 'bg-white/60 border-gray-200 text-gray-700'
                                    }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Content - Profile Image Section */}
                    <div className={`lg:w-1/2 relative transition-all duration-1000 delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                        
                        {/* Background Effects */}
                        <div className="relative">
                            {/* Simplified Animated Rings */}
                            <div className="absolute inset-0 rounded-full">
                                <div className={`absolute inset-0 rounded-full border opacity-10 animate-spin ${
                                    darkMode ? 'border-blue-400' : 'border-blue-500'
                                }`} style={{ animationDuration: '20s' }}></div>
                                <div className={`absolute inset-8 rounded-full border opacity-15 animate-spin ${
                                    darkMode ? 'border-purple-400' : 'border-purple-500'
                                }`} style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                            </div>

                            {/* Subtle Gradient Blob Background */}
                            <div className={`absolute inset-0 rounded-full blur-3xl ${
                                darkMode 
                                    ? 'bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10' 
                                    : 'bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20'
                            }`}></div>
                            
                            {/* Main Image Container */}
                            <div className="relative z-10 p-8">
                                <div className="relative group">
                                    {/* Replace with your animated GIF */}
                                    <img
                                        src="/public/profile-animation.gif"
                                        alt="Harsh Taru - Animated Profile"
                                        className="w-full max-w-lg mx-auto transition-all duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Code Terminal Decoration */}
                        <div className={`mt-6 mx-auto p-4 rounded-lg border shadow-lg ${
                            darkMode 
                                ? 'bg-gray-800/80 border-gray-700' 
                                : 'bg-white/80 border-gray-200'
                        }`}>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className={`text-xs font-mono ${
                                darkMode ? 'text-green-400' : 'text-green-600'
                            }`}>
                                <div>const developer = new Harsh();</div>
                                <div>developer.build("amazing-things");</div>
                                <div className="opacity-60">// Let's create something awesome! 🚀</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes slideInUp {
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

export default Hero;