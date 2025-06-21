import React from 'react';
import { useTheme } from '../context/ThemeContext'; // adjust path as needed

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`py-6 text-center transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-700'
      }`}
    >
      <p>&copy; 2025 Harsh Taru. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
