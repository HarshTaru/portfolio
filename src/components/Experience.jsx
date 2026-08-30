import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Entries are grouped by company. `roles` holds one entry per title held there,
// newest first — a per-role date is only shown when a company has more than one.
const experienceList = [
  {
    logo : "/portfolio/godaddy_logo.jpeg",
    company: 'GoDaddy',
    date: 'September 2025 – Present',
    location: 'Pune, Maharashtra, India',
    roles: [
      {
        title: 'Software Development Engineer 2',
        date: 'September 2026 – Present',
        highlights: ['Promoted to SDE 2', 'Platform Engineering', 'HealOps', 'AI Support Agent'],
        points: [
          'Driving HealOps, a self-healing auto-remediation platform architected for org-wide onboarding, so any team can register its services and get automated incident remediation instead of the problem being solved for a single team.',
          'Leading development of an AI support agent that triages and answers Afternic seller queries, built to deflect routine escalations away from the human support queue.',
          'Expanded scope from service-level delivery into platform-level tooling intended for adoption across teams.'
        ]
      },
      {
        title: 'Software Development Engineer 1',
        date: 'September 2025 – August 2026',
        highlights: ['AWS foundation', '2 P0s resolved', '4 epics delivered'],
        points: [
          'Stood up the AWS foundation for the team from scratch, covering account provisioning, compliance controls and security certification, delivering the cloud baseline that every subsequent service deployed onto.',
          'Rewrote and migrated the core payout service to AWS, expanding a planned lift-and-shift into a full rewrite of 12,000+ lines, the largest core-service change delivered on the team that year.',
          'Delivered 4 epics end to end and merged 80+ pull requests across 12 repositories, with ticket mix shifting from roughly 90% low-priority to an even split of P1/P2 work as ownership grew.',
          'Built three internal developer tools on personal initiative targeting local development speed, repository navigation and AI-assisted test generation.'
        ]
      }
    ]
  },
  {
    logo : "/portfolio/osmos.jpeg",
    company: 'Osmos.ai',
    date: 'January 2025 – July 2025',
    location: 'Pune, Maharashtra, India',
    roles: [
      {
        title: 'SDE Intern',
        highlights: ['60% debugging reduction', '40% efficiency increase', '95% downtime reduction', '20% campaign success boost'],
        points: [
          'Engineered a Python-based changelog consumer to ingest real-time events from Debezium Kafka and internal microservices, improving observability and reducing manual debugging effort by 60%.',
          'Developed secure, role-based APIs in Java (Hades authentication service), enabling admins to search users by agency and reset user credentials, increasing internal operational efficiency by 40%.',
          'Implemented audit logging by adding created_by and updated_by fields across critical DB tables in a Hibernate-powered service, ensuring traceability for over 5 million records.',
          'Built and deployed a Python-based cloud function that automated incentive distribution using dynamic rule processing, eliminating manual workflows and reducing payout errors to near zero.',
          'Led the migration of production data from self-hosted MongoDB to MongoDB Atlas, improving database reliability and reducing downtime by 95%.',
          'Designed and executed robust ETL pipelines to transfer large datasets from legacy SQL systems to BigQuery, supporting faster analytics and cost-effective storage.',
          'Authored 10+ advanced SQL reports (1,000–1,200 LOC each) as part of a full dashboard migration, powering KPIs and marketing insights across business units.',
          'Designed a custom task handler framework to automate actions such as campaign budget increases and product recommendations, boosting campaign success rates by an estimated 20%.'
        ]
      }
    ]
  },
  {
    logo:"/portfolio/shresag_studios_logo.jpeg",
    company: 'Shresag Studios',
    date: 'June 2024 – August 2024',
    location: 'Pune, Maharashtra, India',
    roles: [
      {
        title: 'App Developer',
        highlights: ['Flutter Development', 'Mobile Apps', 'UI/UX Implementation'],
        points: [
          'Developed mobile applications using Flutter framework with focus on user experience and performance optimization.',
          'Collaborated with design teams to implement responsive and intuitive user interfaces.',
          'Integrated REST APIs and implemented state management solutions for seamless data flow.',
          'Participated in code reviews and maintained high code quality standards throughout the development cycle.'
        ]
      }
    ]
  },
  {
    logo :"/portfolio/edunetfoundation_logo.jpeg",
    company: 'Edunet Foundation',
    date: 'June 2023 – July 2023',
    location: 'Pune, Maharashtra, India',
    roles: [
      {
        title: 'Intern',
        highlights: ['EdTech Experience', 'Team Collaboration', 'Foundation Building'],
        points: [
          'Gained foundational experience in software development practices and methodologies.',
          'Worked on educational technology projects aimed at improving learning outcomes.',
          'Collaborated with cross-functional teams to deliver project requirements on time.',
          'Developed problem-solving skills through hands-on coding challenges and real-world applications.'
        ]
      }
    ]
  }
];

const Experience = () => {
  const { darkMode } = useTheme();

return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Professional Experience
                </h2>
                <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Building payment infrastructure, platform tooling and data pipelines across fintech, adtech and mobile.
                </p>
            </div>
            {/* Additional Info Section */}
            <div className={`mb-16 text-center p-8 rounded-2xl border ${
                darkMode 
                    ? 'bg-gray-800/30 border-gray-700' 
                    : 'bg-white/50 border-gray-200'
            }`}>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Key Achievements
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { metric: '4', label: 'Projects Delivered @ GoDaddy' },
                        { metric: '2', label: 'P0 Financial Incidents Resolved' },
                        { metric: '80+', label: 'PRs Merged Across 12 Repos' },
                        { metric: '95%', label: 'DB Downtime Reduction' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className={`text-2xl font-bold mb-1 ${
                                darkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>
                                {stat.metric}
                            </div>
                            <div className={`text-sm ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-8">
                {experienceList.map((exp, index) => {
                    const multiRole = exp.roles.length > 1;

                    return (
                    <div
                        key={index}
                        className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
                            darkMode
                                ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 hover:border-gray-600'
                                : 'bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                        }`}
                        style={{
                            boxShadow: darkMode 
                                ? '0 4px 20px rgba(0, 0, 0, 0.3)' 
                                : '0 4px 20px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        {/* Company Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                            <div className="flex items-start gap-4">
                                <img
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    className="mt-1 w-12 h-12 shrink-0 rounded-lg object-cover"
                                />
                                <div className="min-w-0">
                                    <h3 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                        {exp.company}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {exp.location}
                                        </p>
                                        {multiRole && (
                                            <>
                                                <span className={`hidden sm:block ${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>•</span>
                                                <p className={`text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                                    {exp.roles.length} roles
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* Total tenure at the company */}
                            <div className={`shrink-0 self-start px-4 py-2 rounded-full text-sm font-medium ${
                                darkMode 
                                    ? 'bg-gray-700 text-gray-300' 
                                    : 'bg-gray-100 text-gray-700'
                            }`}>
                                {exp.date}
                            </div>
                        </div>

                        {/* Roles - a timeline rail divides them when there is more than one */}
                        <div className={multiRole
                            ? `mt-6 ml-2 space-y-8 border-l-2 pl-6 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`
                            : 'mt-6'
                        }>
                            {exp.roles.map((role, roleIndex) => (
                                <div key={roleIndex} className="relative">
                                    {multiRole && (
                                        <span
                                            className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full ring-4 ${
                                                darkMode
                                                    ? 'bg-blue-400 ring-gray-800'
                                                    : 'bg-blue-500 ring-white'
                                            }`}
                                        />
                                    )}

                                    {/* Role title + the dates that role was held */}
                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                                        <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {role.title}
                                        </h4>
                                        {multiRole && role.date && (
                                            <span className={`text-xs font-medium shrink-0 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                {role.date}
                                            </span>
                                        )}
                                    </div>

                                    {/* Highlights Section */}
                                    {role.highlights && (
                                        <div className="mb-4 flex flex-wrap gap-2">
                                            {role.highlights.map((highlight, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                                                        darkMode
                                                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30'
                                                            : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200'
                                                    }`}
                                                >
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Achievements List */}
                                    <div className="space-y-3">
                                        {role.points.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                                                    darkMode ? 'bg-blue-400' : 'bg-blue-500'
                                                }`}></div>
                                                <p className={`text-sm leading-relaxed ${
                                                    darkMode ? 'text-gray-300' : 'text-gray-600'
                                                }`}>
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Hover Effect Indicator */}
                        <div className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                            darkMode ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                        </div>
                    </div>
                    );
                })}
            </div>
        </div>
    </section>
);
};

export default Experience;
