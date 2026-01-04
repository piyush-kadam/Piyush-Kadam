"use client";

import { useEffect, useRef, useState } from "react";
import LightRays from '@/components/LightRays';

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

      // Check which cards are visible
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
      <section className="min-h-screen bg-black text-white flex items-center px-6 sm:px-10 lg:px-20 relative overflow-hidden">
        {/* Light Rays Background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.0}
            lightSpread={2.7}
            rayLength={3.5}
            followMouse={true}
            mouseInfluence={0.25}
            noiseAmount={0.15}
            distortion={0.0}
            fadeDistance={1.0}
            saturation={1.0}
          />
        </div>

        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight">
              I CRAFT SCALABLE,<br/>
              CROSS-PLATFORM APPS.
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
              I'm a Flutter Developer skilled in building high-performance, multi-platform apps with clean UI, scalable architecture, and seamless integrations.
            </p>
            <div className="flex gap-4">
              <button className="bg-white hover:bg-gray-100 text-black font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105">
                Check My Resume
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/fire.gif" 
              alt="Fire animation" 
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section ref={sectionRef} className="relative bg-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-24 text-center">My Journey</h2>
          
          <div className="relative">
            {/* Vertical Dotted Line connecting the dots */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1" style={{ height: "100%" }}>
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
            <div className="relative space-y-40">
              {experiences.map((exp, index) => {
                const isLeft = index % 2 === 0;
                const isVisible = visibleCards.includes(index);
                
                return (
                  <div 
                    key={index} 
                    className="relative"
                    data-experience-card
                  >
                    <div className="flex items-center justify-between gap-16">
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
                            <div className="relative inline-block bg-zinc-900/50 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-2xl max-w-md overflow-hidden group hover:bg-zinc-800/50 hover:border-white/30 transition-all duration-500">
                              {/* Accent line at top */}
                              <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
                              
                              {/* Glow effect on hover */}
                              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              
                              <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-5">
                                  <div className="w-14 h-14 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                    <img src={exp.icon} alt="" className="w-full h-full object-cover" />
                                  </div>
                                  <h3 className="text-3xl font-bold text-white">{exp.title}</h3>
                                </div>
                                <p className="text-white/90 font-semibold mb-2 text-lg">{exp.role}</p>
                                <p className="text-gray-400 text-sm mb-5 font-medium">{exp.period}</p>
                                <p className="text-white/70 text-sm leading-relaxed">{exp.description}</p>
                              </div>

                              {/* Corner decoration */}
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
                            <div className="relative inline-block bg-zinc-900/50 backdrop-blur-sm border border-white/20 p-8 rounded-2xl shadow-2xl max-w-md overflow-hidden group hover:bg-zinc-800/50 hover:border-white/30 transition-all duration-500">
                              {/* Accent line at top */}
                              <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
                              
                              {/* Glow effect on hover */}
                              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              
                              <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-5">
                                  <div className="w-12 h-12 bg-white rounded-xl p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <img src={exp.icon} alt="" className="w-full h-full invert" />
                                  </div>
                                  <h3 className="text-3xl font-bold text-white">{exp.title}</h3>
                                </div>
                                <p className="text-white/90 font-semibold mb-2 text-lg">{exp.role}</p>
                                <p className="text-gray-400 text-sm mb-5 font-medium">{exp.period}</p>
                                <p className="text-white/70 text-sm leading-relaxed">{exp.description}</p>
                              </div>

                              {/* Corner decoration */}
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
      <section className="min-h-screen bg-black text-white py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Skills & Technologies</h2>
          <p className="text-gray-400 mb-16 text-center max-w-2xl mx-auto">
            Technologies and tools I've mastered throughout my journey
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="flex flex-col items-center gap-3 group"
              >
                <div className="w-20 h-20 bg-white rounded-lg p-3 transition-transform group-hover:scale-110">
                  <img 
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm text-gray-400 text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}