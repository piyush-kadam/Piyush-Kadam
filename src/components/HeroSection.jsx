"use client";

import { useEffect, useRef, useState } from "react";

// Placeholder LightRays component
const LightRays = () => <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>;

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
      title: "The Beginning",
      role: "First Steps into Development",
      period: "2020 - 2021",
      description: "Started my journey learning Flutter and mobile development. Built my first apps and discovered my passion for creating user experiences.",
      image: "/polo.png",
      icon: "https://skillicons.dev/icons?i=flutter"
    },
    {
      title: "Growth & Learning",
      role: "Expanding Horizons",
      period: "2021 - 2022",
      description: "Dove deeper into Firebase, Node.js, and backend technologies. Started working on real-world projects and collaborating with teams.",
      image: "/polo1.png",
      icon: "https://skillicons.dev/icons?i=firebase"
    },
    {
      title: "Professional Impact",
      role: "Building Products",
      period: "2022 - Present",
      description: "Creating production-ready applications with modern tech stack. Focusing on scalable solutions and delivering value to users.",
      image: "/polo2.png",
      icon: "https://skillicons.dev/icons?i=flutter"
    }
  ];

  const skills = [
    { name: "Flutter", icon: "flutter" },
    { name: "Firebase", icon: "firebase" },
    { name: "Node.js", icon: "nodejs" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Figma", icon: "figma" },
    { name: "Git", icon: "git" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "TailwindCSS", icon: "tailwindcss" },
    { name: "Docker", icon: "docker" }
  ];

  return (
    <>
      {/* Intro Section */}
      <section className="min-h-screen bg-black text-white flex items-center px-4 sm:px-6 md:px-10 lg:px-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <LightRays />
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8 leading-tight tracking-tight">
              I CRAFT SCALABLE,<br/>
              CROSS-PLATFORM APPS.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 md:mb-8 leading-relaxed">
              I'm a Flutter Developer skilled in building high-performance, multi-platform apps with clean UI, scalable architecture, and seamless integrations.
            </p>
            <div className="flex gap-4">
              <button className="bg-white hover:bg-gray-100 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-all transform hover:scale-105">
                Check My Resume
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img 
              src="/fire.gif" 
              alt="Fire animation" 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section ref={sectionRef} className="relative bg-black text-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 md:mb-24 text-center">My Journey</h2>
          
          <div className="relative">
            {/* Vertical Line - Hidden on mobile, shown on md+ */}
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
                      {/* Dot for mobile */}
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

                      {/* Content */}
                      <div 
                        className="flex-1"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-white/20 p-6 rounded-2xl shadow-2xl overflow-hidden mb-6">
                          <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
                          
                          <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-12 h-12 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
                                <img src={exp.icon} alt="" className="w-full h-full object-cover" />
                              </div>
                              <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.title}</h3>
                            </div>
                            <p className="text-white/90 font-semibold mb-2 text-base">{exp.role}</p>
                            <p className="text-gray-400 text-xs sm:text-sm mb-4 font-medium">{exp.period}</p>
                            <p className="text-white/70 text-sm leading-relaxed">{exp.description}</p>
                          </div>
                        </div>

                        <div className="relative group">
                          <img 
                            src={exp.image}
                            alt={exp.title}
                            className="relative w-full shadow-2xl object-contain rounded-lg"
                          />
                        </div>
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
                                <p className="text-white/90 font-semibold mb-2 text-base lg:text-lg">{exp.role}</p>
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
                            <div className="relative group">
                              <div className="absolute -inset-2 bg-white/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <img 
                                src={exp.image}
                                alt={exp.title}
                                className="relative w-full max-w-sm shadow-2xl object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                              />
                            </div>
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
                            <div className="relative group">
                              <div className="absolute -inset-2 bg-white/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <img 
                                src={exp.image}
                                alt={exp.title}
                                className="relative w-full max-w-sm shadow-2xl object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
                              />
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
      <section className="min-h-screen bg-black text-white py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-center">Skills & Technologies</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-12 md:mb-16 text-center max-w-2xl mx-auto px-4">
            Technologies and tools I've mastered throughout my journey
          </p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="flex flex-col items-center gap-2 sm:gap-3 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-lg p-2 sm:p-2.5 md:p-3 transition-transform group-hover:scale-110">
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
    </>
  );
}