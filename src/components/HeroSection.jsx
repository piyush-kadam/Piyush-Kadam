"use client";

import { useEffect, useRef, useState } from "react";
import Dither from '@/components/Dither';

export default function WorkExperience() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollTop = -rect.top;
      const progress = Math.max(0, Math.min(1, scrollTop / (sectionHeight - windowHeight)));

      setScrollProgress(progress);

      const cards = section.querySelectorAll('[data-experience-card]');
      const visible = [];
      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < windowHeight * 0.8) {
          visible.push(index);
        }
      });
      setVisibleCards(visible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      title: "AppliedPlus",
      role: "Flutter Developer Intern",
      period: "March 2025 - July 2025",
      description: " Developed a job search app in which jobs from all over the web would be available and built a custom automation API using Python, Flask, and Selenium.This API was designed to automate job applications on platforms like IIMJobs",
      image: "/polo2.png",
      icon: "https://skillicons.dev/icons?i=flutter"
    },
    {
      title: "7Seers Media",
      role: "Lead Flutter Developer",
      period: "August 2025 - Jan 2026",
      description: "Dove deeper into Firebase, Node.js, and backend technologies. Started working on real-world projects and collaborating with teams.Learned to build native widgets, work on complicated UI and databases and cross platform applications using Flutter, and implemented IN-APP subscription , Apple Sign-in authentication , otp verification and many more.",
      image: "/polo1.png",
      icon: "https://skillicons.dev/icons?i=firebase"
    },
    {
      title: "MelodAI",
      role: "Lead Flutter Developer",
      period: "February 2026 - Present",
      description: "Developing and maintaining cross-platform mobile applications using Flutter, with a focus on performance, scalability, and clean architecture.Building iOS-specific features and ensuring smooth platform integrations and optimized user experience.Collaborating closely with designers and backend teams to translate product requirements into reliable app features.Integrating APIs, managing app state, and implementing responsive, user-friendly UI components.Writing clean, maintainable code and participating in debugging, testing, and performance optimization.Contributing to feature planning, iterative improvements, and production-ready releases",
      image: "/melodaiw.png",
      icon: "https://skillicons.dev/icons?i=flutter"
    },
    {
      title: "WorkState",
      role: "Founder",
      roleLink: "https://workstate.in",
      period: "September 2025 - Present",
      description:
        "Founder of a Digital Media Agency creating production-ready applications with a modern tech stack. Focused on scalable solutions and delivering value to clients through creative and innovative ideas.",
      image: "/polo.png",
      icon: "https://skillicons.dev/icons?i=vercel"
    }
  ];

  const skills = [
    { name: "Flutter", icon: "flutter" },
    { name: "Firebase", icon: "firebase" },
    { name: "Supabase", icon: "supabase" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Android", icon: "androidstudio" },
    { name: "iOS", icon: "apple" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Node.js", icon: "nodejs" },
    { name: "UI/UX Design", icon: "figma" },
    { name: "REST APIs", icon: "postman" },
    { name: "Android Studio", icon: "androidstudio" },
    { name: "Dart", icon: "dart" },
    { name: "SQL", icon: "mysql" },
    { name: "Python", icon: "python" },
    { name: "C++", icon: "cpp" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Intro Section */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-8 md:px-16 max-w-6xl mx-auto pt-32 sm:pt-40 md:pt-40">
          {/* FIXED: removed whitespace-nowrap, reduced base font size */}
          <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight text-white text-center">
            DESIGN . DEVELOP . DEPLOY
          </h1>
          <p className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white">
            Cross Platform Apps
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Building high-performance, cross-platform apps with clean UI,
            scalable architecture, and seamless integrations.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-white hover:bg-gray-100 text-black font-bold px-10 py-4 text-sm sm:text-base rounded-lg transition-all transform hover:scale-105 tracking-widest uppercase">
              View Resume
            </button>
          </a>
        </div>
      </section>

      {/* Work Experience Section */}
      <section ref={sectionRef} className="relative bg-black text-white py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 md:mb-24 text-center">My Journey</h2>

          <div className="relative">
            {/* Desktop: Vertical Line in Center */}
            <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-1" style={{ height: "100%" }}>
              <div
                className="w-full bg-gradient-to-b from-transparent via-white to-transparent"
                style={{
                  height: `${scrollProgress * 100}%`,
                  backgroundImage: 'repeating-linear-gradient(0deg, white, white 10px, transparent 10px, transparent 20px)',
                  backgroundSize: '2px 20px',
                  transition: 'height 0.1s linear',
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
                }}
              />
            </div>

            {/* Mobile: Vertical Line on Left */}
            <div className="md:hidden absolute left-4 top-0 w-1" style={{ height: "100%" }}>
              <div
                className="w-full bg-gradient-to-b from-transparent via-white to-transparent"
                style={{
                  height: `${scrollProgress * 100}%`,
                  backgroundImage: 'repeating-linear-gradient(0deg, white, white 10px, transparent 10px, transparent 20px)',
                  backgroundSize: '2px 20px',
                  transition: 'height 0.1s linear',
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))'
                }}
              />
            </div>

            {/* Experience Cards */}
            <div className="relative space-y-16 md:space-y-40">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                const isVisible = visibleCards.includes(index);

                return (
                  <div
                    key={index}
                    className="relative"
                    data-experience-card
                  >
                    {/* Mobile Layout */}
                    <div className="md:hidden flex gap-6 pl-12">
                      <div
                        className="absolute left-2 top-8 flex-shrink-0"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'scale(1)' : 'scale(0)',
                          transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                      >
                        <div className="w-6 h-6 bg-white rounded-full border-2 border-black ring-2 ring-gray-800 relative shadow-lg">
                          {isVisible && (
                            <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75" />
                          )}
                        </div>
                      </div>

                      <div
                        className="flex-1"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-2xl overflow-hidden mb-6 group hover:bg-zinc-800/50 hover:border-white/30 transition-all duration-500">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
                          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 rounded-xl shadow-lg overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <img src={exp.icon} alt="" className="w-full h-full object-cover" />
                              </div>
                              <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.title}</h3>
                            </div>
                            <p className="text-white/90 font-semibold mb-2 text-base">{exp.role}</p>
                            <p className="text-gray-400 text-xs sm:text-sm mb-4 font-medium">{exp.period}</p>
                            <p className="text-white/70 text-sm leading-relaxed">{exp.description}</p>
                          </div>

                          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-tr-full"></div>
                        </div>

                        <img
                          src={exp.image}
                          alt={exp.title}
                          className="w-full shadow-2xl object-contain rounded-lg"
                        />
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center justify-between gap-8 lg:gap-16">
                      {isLeft ? (
                        <>
                          <div
                            className="flex-1 text-left"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                              transitionDelay: '0.2s'
                            }}
                          >
                            <div className="relative inline-block bg-zinc-900/50 backdrop-blur-sm border border-white/20 p-6 lg:p-8 rounded-2xl shadow-2xl max-w-md overflow-hidden group hover:bg-zinc-800/50 hover:border-white/30 transition-all duration-500">
                              <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
                              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                              <div className="relative z-10">
                                <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-5">
                                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                    <img src={exp.icon} alt="" className="w-full h-full object-cover" />
                                  </div>
                                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{exp.title}</h3>
                                </div>
                                <p className="text-white/90 font-semibold mb-2 text-base">
                                  {exp.role}
                                  {exp.roleLink && (
                                    <>
                                      {" · "}
                                      <a
                                        href={exp.roleLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:underline"
                                      >
                                        workstate.in
                                      </a>
                                    </>
                                  )}
                                </p>
                                <p className="text-gray-400 text-xs lg:text-sm mb-4 lg:mb-5 font-medium">{exp.period}</p>
                                <p className="text-white/70 text-sm leading-relaxed">{exp.description}</p>
                              </div>

                              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-tr-full"></div>
                            </div>
                          </div>

                          <div
                            className="relative z-10 flex-shrink-0"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'scale(1)' : 'scale(0)',
                              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                              transitionDelay: '0.4s'
                            }}
                          >
                            <div className="w-8 h-8 bg-white rounded-full border-4 border-black ring-4 ring-gray-800 relative shadow-lg">
                              {isVisible && (
                                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75" />
                              )}
                            </div>
                          </div>

                          <div
                            className="flex-1"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                              transitionDelay: '0.2s'
                            }}
                          >
                            <img
                              src={exp.image}
                              alt={exp.title}
                              className="w-full max-w-sm shadow-2xl object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="flex-1 flex justify-end"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                              transitionDelay: '0.2s'
                            }}
                          >
                            <img
                              src={exp.image}
                              alt={exp.title}
                              className="w-full max-w-sm shadow-2xl object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                            />
                          </div>

                          <div
                            className="relative z-10 flex-shrink-0"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'scale(1)' : 'scale(0)',
                              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                              transitionDelay: '0.4s'
                            }}
                          >
                            <div className="w-8 h-8 bg-white rounded-full border-4 border-black ring-4 ring-gray-800 relative shadow-lg">
                              {isVisible && (
                                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75" />
                              )}
                            </div>
                          </div>

                          <div
                            className="flex-1 text-left"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                              transitionDelay: '0.2s'
                            }}
                          >
                            <div className="relative inline-block bg-zinc-900/50 backdrop-blur-sm border border-white/20 p-6 lg:p-8 rounded-2xl shadow-2xl max-w-md overflow-hidden group hover:bg-zinc-800/50 hover:border-white/30 transition-all duration-500">
                              <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
                              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                              <div className="relative z-10">
                                <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-5">
                                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl p-2 lg:p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <img src={exp.icon} alt="" className="w-full h-full invert" />
                                  </div>
                                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{exp.title}</h3>
                                </div>
                                <p className="text-white/90 font-semibold mb-2 text-base lg:text-lg">{exp.role}</p>
                                <p className="text-gray-400 text-xs lg:text-sm mb-4 lg:mb-5 font-medium">{exp.period}</p>
                                <p className="text-white/70 text-sm leading-relaxed">{exp.description}</p>
                              </div>

                              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/5 rounded-tl-full"></div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen bg-black text-white py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center">Skills & Technologies</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-12 md:mb-16 text-center max-w-2xl mx-auto px-4">
            Technologies and tools I&apos;ve mastered throughout my journey
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 sm:gap-3 group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 bg-white rounded-lg p-2.5 sm:p-3 transition-transform group-hover:scale-110">
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}