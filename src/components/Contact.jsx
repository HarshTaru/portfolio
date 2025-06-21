import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faUser, 
  faCommentDots, 
  faPaperPlane,
  faCheckCircle,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ThemeContext';
import { sendEmail } from '../utils/sendEmail'; // Adjust path if needed

const Contact = () => {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const { success } = await sendEmail(formData);

  setIsSubmitting(false);
  setIsSubmitted(success);

  if (success) {
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  } else {
    alert('Something went wrong. Please try again.');
  }
};


  const floatingElements = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-2 h-2 rounded-full opacity-20 animate-float ${
        darkMode ? 'bg-blue-400' : 'bg-blue-500'
      }`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }}
    />
  ));

  return (
    <section
      id="contact"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {floatingElements}
        
        {/* Animated email icons */}
        <div className="absolute top-1/4 left-10 opacity-5 animate-bounce" style={{ animationDelay: '1s' }}>
          <FontAwesomeIcon icon={faEnvelope} className="text-6xl text-blue-500" />
        </div>
        <div className="absolute bottom-1/4 right-10 opacity-5 animate-bounce" style={{ animationDelay: '3s' }}>
          <FontAwesomeIcon icon={faPaperPlane} className="text-6xl text-purple-500" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-4">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              darkMode ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'
            }`}>
              💬 Let's Connect
            </span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Collaborate?
            </span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have an exciting project or opportunity? I'd love to hear from you and discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Contact Form */}
        <div className={`max-w-lg mx-auto transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`p-8 rounded-2xl shadow-xl border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl ${
            darkMode
              ? 'bg-gray-800/80 border-gray-700 hover:bg-gray-800/90'
              : 'bg-white/80 border-gray-200 hover:bg-white/90'
          }`}>
            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-6 group">
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 group-focus-within:text-blue-400' : 'text-gray-700 group-focus-within:text-blue-600'
                  }`}
                >
                  Name
                </label>
                <div className="relative">
                  <FontAwesomeIcon 
                    icon={faUser} 
                    className={`absolute left-3 top-3.5 z-10 pointer-events-none transition-colors duration-200 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition-all duration-200 transform hover:scale-[1.02] focus:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      darkMode
                        ? 'bg-gray-900/50 text-gray-200 border-gray-600 hover:bg-gray-900/70 focus:bg-gray-900'
                        : 'bg-white/50 text-gray-800 border-gray-300 hover:bg-white/70 focus:bg-white'
                    }`}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-6 group">
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 group-focus-within:text-blue-400' : 'text-gray-700 group-focus-within:text-blue-600'
                  }`}
                >
                  Email
                </label>
                <div className="relative">
                  <FontAwesomeIcon 
                    icon={faEnvelope} 
                    className={`absolute left-3 top-3.5 z-10 pointer-events-none transition-colors duration-200 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition-all duration-200 transform hover:scale-[1.02] focus:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      darkMode
                        ? 'bg-gray-900/50 text-gray-200 border-gray-600 hover:bg-gray-900/70 focus:bg-gray-900'
                        : 'bg-white/50 text-gray-800 border-gray-300 hover:bg-white/70 focus:bg-white'
                    }`}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-8 group">
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 group-focus-within:text-blue-400' : 'text-gray-700 group-focus-within:text-blue-600'
                  }`}
                >
                  Message
                </label>
                <div className="relative">
                  <FontAwesomeIcon 
                    icon={faCommentDots} 
                    className={`absolute left-3 top-3.5 z-10 pointer-events-none transition-colors duration-200 ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  />
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell me about your project, ideas, or opportunities..."
                    required
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border outline-none transition-all duration-200 resize-none transform hover:scale-[1.02] focus:scale-[1.02] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      darkMode
                        ? 'bg-gray-900/50 text-gray-200 border-gray-600 hover:bg-gray-900/70 focus:bg-gray-900'
                        : 'bg-white/50 text-gray-800 border-gray-300 hover:bg-white/70 focus:bg-white'
                    }`}
                  ></textarea>
                </div>
              </div>

              {/* Animated Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full relative overflow-hidden px-6 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 ${
                  isSubmitted
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                } text-white shadow-lg hover:shadow-xl disabled:opacity-75 disabled:cursor-not-allowed`}
              >
                {/* Button content */}
                <span className={`flex items-center justify-center gap-3 transition-all duration-300 ${
                  isSubmitting || isSubmitted ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}>
                  <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
                  Send Message
                </span>

                {/* Loading state */}
                <span className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
                  isSubmitting ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  <FontAwesomeIcon icon={faSpinner} className="text-lg animate-spin" />
                  Sending...
                </span>

                {/* Success state */}
                <span className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
                  isSubmitted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                  <FontAwesomeIcon icon={faCheckCircle} className="text-lg animate-pulse" />
                  Message Sent!
                </span>

                {/* Ripple effect */}
                <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  isSubmitting ? 'animate-ping bg-white/20' : ''
                }`}></div>
              </button>
            </form>
          </div>

          {/* Additional contact info */}
          <div className={`mt-8 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Prefer email? Reach out directly at{' '}
              <a 
                href="mailto:taruharsh3093@gmail.com" 
                className={`font-medium transition-colors duration-200 hover:underline ${
                  darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                }`}
              >
                taruharsh3093@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.8;
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;