import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X, Code, Sparkles } from 'lucide-react';

const Navbar = () => {
    const { darkMode, setDarkMode } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

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
            const sections = ['work', 'skills', 'about', 'certifications','contact'];
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

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    const navLinks = [
        { id: 'work', label: 'Work', icon: '💼' },
        { id: 'skills', label: 'Skills', icon: '⚡' },
        { id: 'certifications', label: 'Certifications', icon: '🏆' },
        { id: 'about', label: 'About', icon: '👨‍💻' },
        { id: 'contact', label: 'Contact', icon: '📧' }
    ];

    const handleNavClick = (sectionId) => {
        setMenuOpen(false);
        setActiveSection(sectionId);
        
        // Smooth scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
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
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between h-16 items-center">
                    
                    {/* Enhanced Logo */}
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

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
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
                                
                                {/* Active indicator */}
                                {activeSection === link.id && (
                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                                )}
                            </a>
                        ))}

                        {/* Enhanced Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`group relative flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-500 hover:scale-105 ${
                                darkMode
                                    ? 'border-gray-600 bg-gray-800/50 text-white hover:bg-gray-700/50 hover:border-yellow-400'
                                    : 'border-gray-300 bg-white/50 text-gray-800 hover:bg-gray-50/50 hover:border-blue-400'
                            }`}
                            aria-label="Toggle color mode"
                        >
                            <div className="relative overflow-hidden">
                                {darkMode ? (
                                    <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
                                ) : (
                                    <Moon className="w-5 h-5 text-blue-500 group-hover:-rotate-12 transition-transform duration-500" />
                                )}
                            </div>
                            <span className="hidden lg:inline text-sm font-medium">
                                {darkMode ? 'Light' : 'Dark'}
                            </span>
                            
                            {/* Animated background */}
                            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                darkMode ? 'bg-yellow-400/10' : 'bg-blue-400/10'
                            }`}></div>
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-2 md:hidden">
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
                                <Sun className="w-5 h-5 hover:rotate-180 transition-transform duration-500" />
                            ) : (
                                <Moon className="w-5 h-5 hover:-rotate-12 transition-transform duration-500" />
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
                            <div className="relative w-6 h-6">
                                <Menu 
                                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                                        menuOpen ? 'opacity-0 rotate-180 scale-75' : 'opacity-100 rotate-0 scale-100'
                                    }`} 
                                />
                                <X 
                                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                                        menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
                                    }`} 
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Enhanced Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ${
                    menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <div className={`mt-4 mb-4 rounded-2xl p-6 backdrop-blur-sm border transition-all duration-300 ${
                        darkMode
                            ? 'bg-gray-800/90 border-gray-700 shadow-2xl'
                            : 'bg-white/90 border-gray-200 shadow-lg'
                    }`}>
                        <div className="space-y-1">
                            {navLinks.map((link, index) => (
                                <div key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(link.id);
                                        }}
                                        className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                                            activeSection === link.id
                                                ? darkMode
                                                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                                    : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                                                : darkMode
                                                    ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
                                        }`}
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <span className="text-base group-hover:scale-110 transition-transform duration-200">
                                            {link.icon}
                                        </span>
                                        <span className="flex-1">{link.label}</span>
                                        
                                        {/* Active indicator */}
                                        {activeSection === link.id && (
                                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                        )}
                                        
                                        {/* Hover arrow */}
                                        <span className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                                            darkMode ? 'text-gray-400' : 'text-gray-500'
                                        }`}>
                                            →
                                        </span>
                                    </a>
                                    
                                    {/* Separator */}
                                    {index < navLinks.length - 1 && (
                                        <div className={`my-2 border-t ${
                                            darkMode ? 'border-gray-700/50' : 'border-gray-200/50'
                                        }`}></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Menu Footer */}
                        <div className={`mt-6 pt-4 border-t text-center ${
                            darkMode ? 'border-gray-700' : 'border-gray-200'
                        }`}>
                            <p className={`text-xs ${
                                darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                                Built with ❤️ by Harsh Taru
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;