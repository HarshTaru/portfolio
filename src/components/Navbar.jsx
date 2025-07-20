import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Code, Sparkles, Download, FileText } from 'lucide-react';

const Navbar = () => {
    const { darkMode, setDarkMode } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [downloadStatus, setDownloadStatus] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check for mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['work', 'skills', 'about', 'certifications', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen, isMobile]);

    // Close mobile menu when screen size changes
    useEffect(() => {
        if (!isMobile && menuOpen) {
            setMenuOpen(false);
        }
    }, [isMobile, menuOpen]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    // Resume download function
    const downloadResume = () => {
        setDownloadStatus('downloading');
        
        const link = document.createElement('a');
        link.href = '/portfolio/resume.pdf'; 
        link.download = 'Harsh_Taru_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setDownloadStatus('success');
        setTimeout(() => {
            setDownloadStatus(null);
        }, 2000);
    };

    const navLinks = [
        { id: 'experience', label: 'Experience', icon: '🧑‍💼' },
        { id: 'work', label: 'Projects', icon: '💼' },
        { id: 'skills', label: 'Skills', icon: '⚡' },
        { id: 'certifications', label: 'Certifications', icon: '🏆' },
        { id: 'about', label: 'About', icon: '👨‍💻' },
        { id: 'contact', label: 'Contact', icon: '📧' },
    ];

    const handleNavClick = (sectionId) => {
        console.log("Clicked section:", sectionId);
        setMenuOpen(false);
        setActiveSection(sectionId);
        
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-md border-b ${
                    scrolled
                        ? darkMode
                            ? 'bg-gray-900/95 text-white border-gray-700 shadow-2xl'
                            : 'bg-white/95 text-gray-900 border-gray-300 shadow-lg'
                        : darkMode
                            ? 'bg-gray-900/80 text-white border-gray-800 shadow-xl'
                            : 'bg-white/80 text-gray-900 border-gray-200 shadow-md'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between h-16 items-center">
                        
                        {/* Logo - Always visible */}
                        <a 
                            href="#" 
                            className="group flex items-center gap-2 text-xl font-bold tracking-tight transition-all duration-300 hover:scale-105"
                        >
                            <div className="relative">
                                <Code className="w-6 h-6 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
                                <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                                Harsh Taru
                            </span>
                        </a>

                        {/* Desktop Navigation - Only show on desktop */}
                        {!isMobile && (
                            <div className="flex items-center space-x-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.id);
                                        }}
                                        className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                                            activeSection === link.id
                                                ? darkMode
                                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                    : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                                                : darkMode
                                                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                                        }`}
                                    >
                                        <span className="text-xs group-hover:scale-110 transition-transform duration-200">
                                            {link.icon}
                                        </span>
                                        {link.label}
                                        
                                        {activeSection === link.id && (
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                        )}
                                    </a>
                                ))}

                                {/* Desktop Resume Button */}
                                <button
                                    onClick={downloadResume}
                                    disabled={downloadStatus === 'downloading'}
                                    className={`group relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 border-2 ${
                                        downloadStatus === 'success'
                                            ? 'bg-green-500 text-white border-green-500'
                                            : downloadStatus === 'downloading'
                                                ? darkMode
                                                    ? 'bg-gray-700 text-gray-400 border-gray-600 cursor-not-allowed'
                                                    : 'bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed'
                                                : darkMode
                                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-500 hover:from-purple-500 hover:to-blue-500'
                                                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500 hover:from-blue-500 hover:to-purple-500'
                                    }`}
                                >
                                    {downloadStatus === 'success' ? (
                                        <span className="text-sm">✓</span>
                                    ) : downloadStatus === 'downloading' ? (
                                        <Download className="w-4 h-4 animate-bounce" />
                                    ) : (
                                        <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                                    )}
                                    <span className="font-semibold">
                                        {downloadStatus === 'success' 
                                            ? 'Downloaded!' 
                                            : downloadStatus === 'downloading' 
                                                ? 'Downloading...' 
                                                : 'Resume'
                                        }
                                    </span>
                                </button>

                                {/* Desktop Theme Toggle */}
                                <button
                                    onClick={toggleTheme}
                                    className={`group relative flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-500 hover:scale-105 ${
                                        darkMode
                                            ? 'border-gray-600 bg-gray-800/50 text-white hover:bg-gray-700/50 hover:border-yellow-400'
                                            : 'border-gray-300 bg-white/50 text-gray-800 hover:bg-gray-50/50 hover:border-blue-400'
                                    }`}
                                    aria-label="Toggle color mode"
                                >
                                    {darkMode ? (
                                        <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-blue-500 group-hover:-rotate-12 transition-transform duration-500" />
                                    )}
                                    <span className="hidden lg:inline text-sm font-medium">
                                        {darkMode ? 'Light' : 'Dark'}
                                    </span>
                                </button>
                            </div>
                        )}

                        {/* Mobile Controls - Only show on mobile */}
                        {isMobile && (
                            <div className="flex items-center gap-2">
                                {/* Mobile Resume Download */}
                                <button
                                    onClick={downloadResume}
                                    disabled={downloadStatus === 'downloading'}
                                    className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                                        downloadStatus === 'success'
                                            ? 'text-green-500 bg-green-100 dark:bg-green-900/30'
                                            : downloadStatus === 'downloading'
                                                ? darkMode
                                                    ? 'text-gray-500 cursor-not-allowed'
                                                    : 'text-gray-400 cursor-not-allowed'
                                                : darkMode
                                                    ? 'text-purple-400 hover:bg-gray-800'
                                                    : 'text-blue-600 hover:bg-blue-50'
                                    }`}
                                    aria-label="Download resume"
                                >
                                    {downloadStatus === 'success' ? (
                                        <span className="text-lg">✓</span>
                                    ) : downloadStatus === 'downloading' ? (
                                        <Download className="w-5 h-5 animate-bounce" />
                                    ) : (
                                        <FileText className="w-5 h-5" />
                                    )}
                                </button>

                                {/* Mobile Theme Toggle */}
                                <button
                                    onClick={toggleTheme}
                                    className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                                        darkMode
                                            ? 'text-yellow-400 hover:bg-gray-800'
                                            : 'text-blue-500 hover:bg-gray-100'
                                    }`}
                                    aria-label="Toggle theme"
                                >
                                    {darkMode ? (
                                        <Sun className="w-5 h-5" />
                                    ) : (
                                        <Moon className="w-5 h-5" />
                                    )}
                                </button>

                                {/* Mobile Menu Toggle */}
                                <button
                                    className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                                        darkMode
                                            ? 'text-white hover:bg-gray-800'
                                            : 'text-gray-900 hover:bg-gray-100'
                                    }`}
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    aria-label="Toggle menu"
                                >
                                    {menuOpen ? (
                                        <X className="w-6 h-6" />
                                    ) : (
                                        <Menu className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Only show on mobile when menu is open */}
            {isMobile && menuOpen && (
                <div className="fixed inset-0 z-40">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setMenuOpen(false)}
                    />
                    
                    {/* Menu Content */}
                    <div className={`absolute top-16 left-0 right-0 bottom-0 overflow-y-auto ${
                        darkMode
                            ? 'bg-gray-900/95 text-white'
                            : 'bg-white/95 text-gray-900'
                    }`}>
                        <div className="p-4 pb-8">
                            <div className={`rounded-2xl p-4 backdrop-blur-sm border ${
                                darkMode
                                    ? 'bg-gray-800/90 border-gray-700 shadow-2xl'
                                    : 'bg-white/90 border-gray-200 shadow-lg'
                            }`}>
                                <div className="space-y-2">
                                    {navLinks.map((link, index) => (
                                        <div key={link.id}>
                                            <a
                                                href={`#${link.id}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleNavClick(link.id);
                                                }}
                                                className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                                                    activeSection === link.id
                                                        ? darkMode
                                                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                            : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                                                        : darkMode
                                                            ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                                                }`}
                                            >
                                                <span className="text-lg">{link.icon}</span>
                                                <span className="flex-1">{link.label}</span>
                                                {activeSection === link.id && (
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                                )}
                                            </a>
                                            
                                            {index < navLinks.length - 1 && (
                                                <div className={`my-2 border-t ${
                                                    darkMode ? 'border-gray-700/50' : 'border-gray-200/50'
                                                }`}></div>
                                            )}
                                        </div>
                                    ))}

                                    {/* Mobile Resume Download in Menu */}
                                    <div className={`my-2 border-t ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}></div>
                                    <button
                                        onClick={downloadResume}
                                        disabled={downloadStatus === 'downloading'}
                                        className={`group w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                                            downloadStatus === 'success'
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                : downloadStatus === 'downloading'
                                                    ? darkMode
                                                        ? 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                                                        : 'bg-gray-200/50 text-gray-400 cursor-not-allowed'
                                                    : darkMode
                                                        ? 'text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 border border-purple-500/20'
                                                        : 'text-blue-600 hover:text-blue-700 hover:bg-blue-500/10 border border-blue-500/20'
                                        }`}
                                    >
                                        <span className="text-lg">
                                            {downloadStatus === 'success' ? '✅' : downloadStatus === 'downloading' ? '⏳' : '📄'}
                                        </span>
                                        <span className="flex-1">
                                            {downloadStatus === 'success' 
                                                ? 'Resume Downloaded!' 
                                                : downloadStatus === 'downloading' 
                                                    ? 'Downloading Resume...' 
                                                    : 'Download Resume'
                                            }
                                        </span>
                                        
                                        {downloadStatus === 'downloading' ? (
                                            <Download className="w-5 h-5 animate-bounce" />
                                        ) : downloadStatus !== 'success' && (
                                            <FileText className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>

                                {/* Mobile Menu Footer */}
                                <div className={`mt-6 pt-4 border-t text-center ${
                                    darkMode ? 'border-gray-700' : 'border-gray-200'
                                }`}>
                                    <p className={`text-sm ${
                                        darkMode ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                        Built with ❤️ by Harsh Taru
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;