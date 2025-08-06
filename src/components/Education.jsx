import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faMapMarkerAlt,
  faCalendarAlt,
  faTrophy,
  faBookOpen,
  faUsers,
  faStar,
  faChevronRight,
  faCode,
  faLaptopCode,
  faBrain,
  faChartLine,
  faDatabase,
  faCloud,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

const Education = () => {
  const { darkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [activeEducation, setActiveEducation] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const educationSection = document.getElementById("education");
    if (educationSection) {
      observer.observe(educationSection);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      id: 1,
      buttonText: "B.Tech",
      buttonIcon: faGraduationCap,
      degree: "Bachelor of Technology",
      field: "Information Technology",
      institution: "Vishwakarma Institute of Information Technology (VIIT)",
      location: "Pune, Maharashtra",
      duration: "2021 - 2025",
      grade: "9.46 CGPA",
      status: "Graduated",
      description:
        "Specialized in software development, data structures & algorithms, and modern web technologies. Strong foundation in computer science fundamentals with focus on practical application.",
      highlights: [
        "Consistent Academic Excellence",
        "Active in Technical Communities",
        "250+ DSA Problems Solved",
        "Multiple Project Implementations",
      ],
      keySubjects: [
        { name: "Data Structures & Algorithms", icon: faBrain },
        { name: "Database Management", icon: faDatabase },
        { name: "Software Engineering", icon: faLaptopCode },
        { name: "Cloud Computing", icon: faCloud },
        { name: "Web Development", icon: faCode },
        { name: "System Design", icon: faChartLine },
      ],
      achievements: [
        "Top 5% of the class",
        "Completed 6+ months internship",
        "Built 15+ technical projects",
        "25+ industry certifications",
      ],
    },
    {
      id: 2,
      buttonText: "HSC",
      buttonIcon: faGraduationCap,
      degree: "Higher Secondary Certificate",
      field: "Science (PCM)",
      institution: "P Jog Junior College",
      location: "Pune, Maharashtra",
      duration: "2019 - 2021",
      grade: "93.3%",
      status: "Completed",
      description:
        "Strong foundation in Physics, Chemistry, and Mathematics. Developed analytical thinking and problem-solving skills that form the backbone of my engineering approach.",
      highlights: [
        "Merit in State Board",
        "Strong Mathematical Foundation",
        "Science Olympiad Participant",
        "Active in Science Clubs",
      ],
      keySubjects: [
        { name: "Mathematics", icon: faBrain },
        { name: "Physics", icon: faChartLine },
        { name: "Chemistry", icon: faDatabase },
      ],
      achievements: [
        "93.3% aggregate score",
        "Top 5% in Mathematics",
        "Science project recognition",
        "Merit certificate recipient",
      ],
    },
    {
      id: 3,
      buttonText: "ICSE",
      buttonIcon: faGraduationCap,
      degree: "Council for the Indian School Certificate Examinations (CISCE)",
      field: "Science (PCM)",
      institution: "DSK School",
      location: "Pune, Maharashtra",
      duration: "2009 - 2019",
      grade: "94%",
      status: "Completed",
      description:
        "Strong foundation in Physics, Chemistry, and Mathematics. Developed analytical thinking and problem-solving skills that form the backbone of my engineering approach.",
      highlights: [
        "Merit in Board",
        "Strong Mathematical Foundation",
        "Science Olympiad Participant",
        "Active in Science Clubs",
      ],
      keySubjects: [
        { name: "Mathematics", icon: faBrain },
        { name: "Physics", icon: faChartLine },
        { name: "Chemistry", icon: faDatabase },
      ],
      achievements: [
        "93.3% aggregate score",
        "Top 5% in Mathematics",
        "Science project recognition",
        "Merit certificate recipient",
      ],
    },
  ];

  const currentEducation = educationData[activeEducation];

  return (
    <section
      id="education"
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background Elements
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 -right-64 w-128 h-128 rounded-full opacity-5 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-200'
        }`} />
        <div className={`absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-5 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-200'
        }`} />
      </div> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6">
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                darkMode
                  ? "bg-purple-500/20 text-purple-300"
                  : "bg-purple-100 text-purple-600"
              }`}
            >
              🎓 Academic Journey
            </span>
          </div>

          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
              Educational
            </span>{" "}
            Background
          </h2>

          <p
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Building a strong foundation through continuous learning and
            academic excellence
          </p>
        </div>

        {/* Education Timeline */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {/* Education Navigation */}
          <div className="flex justify-center mb-12">
            <div
              className={`flex rounded-xl p-2 ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              {educationData.map((edu, index) => (
                <button
                  key={edu.id}
                  onClick={() => setActiveEducation(index)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeEducation === index
                      ? darkMode
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                        : "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                      : darkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {edu.buttonText}
                </button>
              ))}
            </div>
          </div>

          {/* Education Details Card */}
          <div
            className={`max-w-5xl mx-auto rounded-3xl p-8 lg:p-12 transition-all duration-500 ${
              darkMode
                ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
                : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-2xl"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Main Info */}
              <div>
                {/* Status Badge */}
                <div className="mb-6">
                  <span
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                      currentEducation.status === "Final Year"
                        ? darkMode
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-green-100 text-green-600 border border-green-200"
                        : darkMode
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-blue-100 text-blue-600 border border-blue-200"
                    }`}
                  >
                    <FontAwesomeIcon icon={faGraduationCap} />
                    {currentEducation.status}
                  </span>
                </div>

                <h3
                  className={`text-2xl lg:text-3xl font-bold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {currentEducation.degree}
                </h3>

                <p
                  className={`text-xl mb-4 ${
                    darkMode ? "text-purple-300" : "text-purple-600"
                  } font-semibold`}
                >
                  {currentEducation.field}
                </p>

                <div
                  className={`mb-6 grid grid-cols-[auto_1fr] items-center gap-y-3 gap-x-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faBookOpen}
                      className="text-blue-500"
                    />
                  </div>
                  <span className="font-medium self-center">
                    {currentEducation.institution}
                  </span>

                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-red-500"
                    />
                  </div>
                  <span className="self-center">
                    {currentEducation.location}
                  </span>

                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="text-green-500"
                    />
                  </div>
                  <span className="self-center">
                    {currentEducation.duration}
                  </span>

                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500"
                    />
                  </div>
                  <span className="font-semibold self-center">
                    {currentEducation.grade}
                  </span>
                </div>

                <p
                  className={`text-base leading-relaxed mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {currentEducation.description}
                </p>

                {/* Highlights
                                <div className="mb-6">
                                  <h4 className={`text-lg font-semibold mb-3 ${
                                    darkMode ? 'text-white' : 'text-gray-900'
                                  }`}>
                                    Key Highlights
                                  </h4>
                                  <div className="grid grid-cols-1 gap-2">
                                    {currentEducation.highlights.map((highlight, index) => (
                                      <div key={index} className="flex items-center gap-3">
                                        <FontAwesomeIcon 
                                          icon={faChevronRight} 
                                          className="text-purple-500 text-sm" 
                                        />
                                        <span className={`${
                                          darkMode ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                          {highlight}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div> */}
              </div>

              {/* Right Column - Subjects & Achievements */}
              <div>
                {/* Key Subjects */}
                <div className="mb-8">
                  <h4
                    className={`text-lg font-semibold mb-4 ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Key Subjects
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {currentEducation.keySubjects.map((subject, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                          darkMode
                            ? "bg-gray-700/50 hover:bg-gray-700 border border-gray-600"
                            : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            darkMode ? "bg-purple-600/20" : "bg-purple-100"
                          }`}
                        >
                          <FontAwesomeIcon
                            icon={subject.icon}
                            className={`${
                              darkMode ? "text-purple-300" : "text-purple-600"
                            }`}
                          />
                        </div>
                        <span
                          className={`font-medium ${
                            darkMode ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          {subject.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements
                <div>
                  <h4 className={`text-lg font-semibold mb-4 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Achievements
                  </h4>
                  <div className="space-y-3">
                    {currentEducation.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-xl ${
                          darkMode 
                            ? 'bg-green-500/10 border border-green-500/20' 
                            : 'bg-green-50 border border-green-200'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          darkMode ? 'bg-green-500/20' : 'bg-green-100'
                        }`}>
                          <FontAwesomeIcon 
                            icon={faTrophy} 
                            className={`text-sm ${
                              darkMode ? 'text-green-300' : 'text-green-600'
                            }`} 
                          />
                        </div>
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-green-200' : 'text-green-700'
                        }`}>
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
