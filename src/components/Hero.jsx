import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCredly } from "react-icons/si";

const Hero = () => {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harshtaru",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/HarshTaru",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/CodefindsHarsh/",
      icon: <SiLeetcode className="w-5 h-5" />,
    },
    {
      name: "Credly",
      url: "https://www.credly.com/users/harsh-taru",
      icon: <SiCredly className="w-5 h-5" />,
    },
  ];

  return (
    <section
      className={`relative overflow-hidden min-h-screen flex items-center transition-all duration-500 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-indigo-500 rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-20 right-40 w-1 h-1 bg-cyan-500 rounded-full animate-pulse opacity-70"></div>
        
        {/* Gradient Orbs */}
        {/* <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div
            className={`lg:w-1/2 text-center lg:text-left space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Status Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                darkMode
                  ? "bg-gray-800/60 border-gray-700/50 text-gray-300"
                  : "bg-white/60 border-gray-200/50 text-gray-700"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Available for Opportunities</span>
            </div>

            {/* Main Heading - Perfect Alignment */}
            <div className="space-y-2">
              <div className="flex flex-col items-center lg:items-start">
                <h1
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  I'm
                </h1>
                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 text-transparent bg-clip-text leading-tight tracking-tight">
                  Harsh Taru
                </h1>
              </div>
              
              {/* Typewriter Effect */}
              <div
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold min-h-[3rem] mt-6 ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                <Typewriter
                  words={[
                    "SDE Intern @ Osmos",
                    "Backend Developer",
                    "5⭐ Python Coder",
                    "System Design Enthusiast",
                    "Problem Solver",
                    "Freelance Developer",
                    "8+ Production Applications Deployed",
                    "5+ Production Ready Projects",
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
            <p
              className={`text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Passionate about building{" "}
              <span className="font-semibold text-blue-500">
                scalable backend systems
              </span>{" "}
              using{" "}
              <span className="font-semibold text-purple-500">
                Java, Python, and Node.js
              </span>
              .
              <br />
              Experienced with{" "}
              <span className="font-semibold text-green-500">
                cloud-native architectures
              </span>{" "}
              and{" "}
              <span className="font-semibold text-orange-500">
                distributed systems
              </span>
              .
            </p>

            {/* Social Links - Improved Grid Layout */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mt-8 max-w-md mx-auto lg:mx-0">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    darkMode
                      ? "border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="group-hover:animate-pulse transition-transform group-hover:scale-110">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Stats Grid - Enhanced */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
              {[
                { number: "200+", label: "LeetCode Problems", color: "from-orange-400 to-red-500" },
                { number: "5+", label: "Production Ready Projects", color: "from-green-400 to-blue-500" },
                { number: "10+", label: "Months Experience", color: "from-purple-400 to-pink-500" },
                { number: "8+", label: "Production Applications", color: "from-blue-400 to-indigo-500" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`relative group flex flex-col justify-center items-center text-center p-4 rounded-xl border transition-all duration-300 hover:scale-105 overflow-hidden ${
                    darkMode
                      ? "bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50"
                      : "bg-white/30 border-gray-400/50 hover:bg-white/50"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div
                    className={`text-2xl font-bold mb-1 relative z-10 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {stat.number}
                  </div>
                  <div
                    className={`text-xs font-medium relative z-10 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              <a
                href="#work"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <span className="group-hover:animate-bounce">🚀</span>
                  View My Work
                </span>
              </a>

              <a
                href="#contact"
                className={`group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 font-semibold transition-all duration-300 transform hover:scale-105 ${
                  darkMode
                    ? "border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-gray-600"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400"
                }`}
              >
                <span className="group-hover:animate-pulse">✉️</span>
                Let's Connect
              </a>
            </div>

            {/* Tech Stack Icons - Enhanced */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-8">
              {[
                { name: "Java", color: "from-orange-400 to-red-500" },
                { name: "Python", color: "from-blue-400 to-yellow-500" },
                { name: "Node.js", color: "from-green-400 to-green-600" },
                { name: "GCP", color: "from-blue-400 to-blue-600" },
                { name: "Docker", color: "from-blue-500 to-indigo-600" }
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className={`group relative px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 hover:scale-110 overflow-hidden ${
                    darkMode
                      ? "bg-gray-800/40 border-gray-700/50 text-gray-300"
                      : "bg-white/40 border-gray-400/50 text-gray-700"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <span className="relative z-10">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Profile Section */}
          <div
            className={`lg:w-1/2 relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative max-w-lg mx-auto">
              {/* Enhanced Animated Rings */}
              <div className="absolute inset-0 rounded-full">
                <div
                  className={`absolute inset-0 rounded-full border-2 opacity-20 animate-spin ${
                    darkMode ? "border-blue-400" : "border-blue-500"
                  }`}
                  style={{ animationDuration: "20s" }}
                ></div>
                <div
                  className={`absolute inset-4 rounded-full border-2 opacity-30 animate-spin ${
                    darkMode ? "border-purple-400" : "border-purple-500"
                  }`}
                  style={{
                    animationDuration: "15s",
                    animationDirection: "reverse",
                  }}
                ></div>
                <div
                  className={`absolute inset-8 rounded-full border opacity-10 animate-spin ${
                    darkMode ? "border-indigo-400" : "border-indigo-500"
                  }`}
                  style={{ animationDuration: "25s" }}
                ></div>
              </div>

              {/* Enhanced Gradient Background */}
              <div
                className={`absolute inset-0 rounded-full blur-3xl animate-pulse ${
                  darkMode
                    ? "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20"
                    : "bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-indigo-500/30"
                }`}
                style={{ animationDuration: "4s" }}
              ></div>

              {/* Profile Image Container */}
              <div className="relative z-10 p-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img
                    src="/portfolio/profile-animation.gif"
                    alt="Animated Profile"
                    className="relative z-10 w-full max-w-lg mx-auto rounded-full transition-all duration-500 group-hover:scale-105 shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Code Terminal */}
            <div
              className={`mt-8 mx-auto p-6 rounded-xl border backdrop-blur-sm shadow-xl transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800/60 border-gray-700/50"
                  : "bg-white/60 border-gray-400/50"
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className={`ml-2 text-xs font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  ~ harsh-terminal
                </div>
              </div>
              <div
                className={`text-sm font-mono space-y-1 ${
                  darkMode ? "text-green-400" : "text-green-600"
                }`}
              >
                
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">$</span>
                  <span>const developer = new Harsh();</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">$</span>
                  <span>developer.build("amazing-things");</span>
                </div>
                <div className="flex items-center gap-2 opacity-70">
                  <span className="text-blue-400">$</span>
                  <span>// Let's create something awesome! 🚀</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <span className="text-blue-400">$</span>
                  <span className="animate-pulse">|</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Animations */}
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;