"use client";
import { useState, useRef, useEffect } from "react";

export default function SimpleSpacePortfolio() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [muted, setMuted] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const projects = [
     {
      name: "SHOEHIVE",
      mainImage: "/shoehive.png",
      images: ["/s1.jpeg","/s2.jpeg","/s3.jpeg","/s4.jpeg","/s5.jpeg","/s6.jpeg","/s7.jpeg","/s8.jpeg"],
      description: "PREMIUM SHOE MARKETPLACE",
      details: "Next-generation shopping experience with premium shoe collections",
      year: "2025",
    },
    {
      name: "TIXOO",
      mainImage: "/tixoo.png",
      images: ["/t1.jpeg","/t2.jpeg","/t3.jpeg","/t4.jpeg","/t5.jpeg","/t6.jpeg","/t7.jpeg","/t8.jpeg"],
      description: "EVENT MANAGEMENT PLATFORM",
      details: "This App is a property of 7SEERS media , it is designed and being developed by piyush kadam working as an intern for Tixoo",
      year: "2025",
    },
   
    {
      name: "APPLIEDPLUS",
      mainImage: "/appliedplus.png",
      images: ["/a1.jpeg","/a2.jpeg","/a3.jpeg","/a4.jpeg","/a5.jpeg","/a6.jpeg","/a7.jpeg","/a8.jpeg"],
      description: "CAREER PLATFORM",
      details: "Advanced job application system connecting talent with opportunities, developed for LibraryFLow and AppliedPlus ltd",
      year: "2025",
    },
    {
  name: "SKILLCONNECT",
  mainImage: "/connect.jpeg",
  images: [
    "/c1.jpeg","/c2.jpeg","/c6.jpg","/c7.jpg","/c8.jpg","/c3.png","/c4.png",
    "/c5.jpeg",
  ],
  description: "LEARNING & NETWORKING",
  details: "Platform connecting learners with mentors and industry experts to grow skills and careers",
  year: "2025",
},

{
  name: "REAL ESTATE HUB",
  mainImage: "/real.jpeg",
  images: [
    "/r1.jpeg","/r2.jpeg","/r3.jpeg","/r4.jpeg"
  ],
  description: "PROPERTY PLATFORM",
  details: "Modern real estate platform for discovering, listing, and managing properties with ease , developed for RK real estates",
  year: "2025",
},
  ];

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const handleVideoEnd = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setVideoEnded(true);
    }, 1200);
  };

  const toggleMute = () => {
    setMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  const skipVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    handleVideoEnd();
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-white/5 z-[60]">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Intro Video */}
      {!videoEnded && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
            isFadingOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <video
            ref={videoRef}
            src="/h5.mp4"
            autoPlay
            muted={muted}
            className="w-full h-full object-cover fade-in"
            onEnded={handleVideoEnd}
          />
          <div className="absolute bottom-6 right-6 flex gap-3">
            <button
              onClick={toggleMute}
              className="px-4 py-2 bg-white/20 text-white rounded-lg border border-white/40 hover:bg-white/30 transition"
            >
              {muted ? "Unmute" : "Mute"}
            </button>
            <button
              onClick={skipVideo}
              className="px-4 py-2 bg-red-500/80 text-white rounded-lg hover:bg-red-600/90 transition"
            >
              Skip Intro
            </button>
          </div>
        </div>
      )}

      {/* Portfolio Content */}
      <div className="w-full min-h-screen relative">
        {/* Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-black"></div>
          <div className="stars"></div>
          <div className="shooting-stars"></div>
        </div>

        <div className="relative z-20 pt-20 pb-16">
          {/* Header */}
          <div className="text-center mb-24 px-6">
            <div className="inline-block">
              <h1 className="text-8xl md:text-9xl font-black mb-3 tracking-wider">
                PORTFOLIO
              </h1>
              <div className="flex items-center justify-center gap-4 text-sm tracking-[0.5em] text-gray-400 font-light">
                <span className="w-12 h-px bg-white/20"></span>
                <span>DIGITAL ARCHITECT</span>
                <span className="w-12 h-px bg-white/20"></span>
              </div>
            </div>
          </div>

          {/* Projects - Horizontal Scroll Layout */}
          <div className="space-y-32 px-6">
            {projects.map((project, index) => (
              <div 
                key={project.name} 
                className="project-section max-w-[1600px] mx-auto"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Project Info Sidebar + Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                  {/* Left Sidebar - Project Info */}
                  <div className="lg:col-span-3 space-y-8">
                    <div>
                      <div className="text-xs tracking-[0.3em] text-gray-600 mb-2 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-5xl lg:text-6xl font-black mb-4 leading-none">
                        {project.name}
                      </h2>
                      <div className="text-xs tracking-[0.3em] text-gray-400 mb-6">
                        {project.description}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="w-px h-12 bg-white/30"></span>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">YEAR</div>
                          <div className="text-sm font-bold">{project.year}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <span className="w-px h-24 bg-white/30"></span>
                        <div>
                          <div className="text-xs text-gray-500 mb-2">DETAILS</div>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {project.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content - Images */}
                  <div className="lg:col-span-9 space-y-16">
                    {/* Featured Image */}
                    <div 
                      className="featured-container group cursor-pointer max-w-2xl mx-auto"
                      onClick={() => setSelectedImage({ project: index, image: project.mainImage })}
                    >
                      <div className="relative overflow-hidden bg-white/5 border border-white/10 transition-all duration-500 group-hover:border-white/30">
                        <img 
                          src={project.mainImage} 
                          alt={project.name}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-3 text-center tracking-wider">FEATURED</div>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {project.images.map((img, imgIndex) => (
                        <div 
                          key={imgIndex}
                          className="screenshot-container group cursor-pointer"
                          onClick={() => setSelectedImage({ project: index, image: img, index: imgIndex })}
                        >
                          <div className="relative overflow-hidden bg-white/5 border border-white/10 aspect-[9/19.5] transition-all duration-300 group-hover:border-white/30">
                            <img 
                              src={img}
                              alt={`${project.name} ${imgIndex + 1}`}
                              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                              <span className="opacity-0 group-hover:opacity-100 text-white text-xs tracking-wider transition-opacity duration-300">
                                VIEW
                              </span>
                            </div>
                          </div>
                          <div className="text-[10px] text-gray-600 mt-2 text-center font-mono">
                            {String(imgIndex + 1).padStart(2, '0')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < projects.length - 1 && (
                  <div className="mt-32 flex items-center justify-center gap-4">
                    <span className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                    <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                    <span className="w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-40 mb-16 px-6">
            <div className="inline-block space-y-4">
              <div className="text-5xl font-black tracking-wider">PORTFOLIO</div>
              <div className="flex items-center gap-3 text-xs tracking-[0.4em] text-gray-600">
                <span className="w-8 h-px bg-white/20"></span>
                <span>2025</span>
                <span className="w-8 h-px bg-white/20"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-4xl hover:text-gray-400 transition"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img 
            src={selectedImage.image}
            alt="Full view"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        :global(html), :global(body) { 
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        
        .fade-in {
          animation: fadeIn 1.5s ease-in forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Space background */
        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 60px 70px, rgba(255,255,255,0.2), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.2), transparent),
            radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.3), transparent),
            radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.2), transparent);
          background-repeat: repeat;
          background-size: 200px 150px;
          opacity: 0.4;
          animation: twinkle 4s ease-in-out infinite;
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        
        .shooting-stars {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .shooting-stars::before,
        .shooting-stars::after {
          content: '';
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 0 10px 2px rgba(255,255,255,0.5);
          animation: shoot 4s linear infinite;
        }
        
        .shooting-stars::before {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .shooting-stars::after {
          top: 60%;
          left: 80%;
          animation-delay: 2s;
        }
        
        @keyframes shoot {
          0% {
            transform: translate(0, 0) rotate(-45deg);
            opacity: 1;
          }
          100% {
            transform: translate(400px, 400px) rotate(-45deg);
            opacity: 0;
          }
        }
        
        .project-section {
          opacity: 0;
          animation: slideUp 0.8s ease-out forwards;
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(40px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive */
        @media (max-width: 1023px) {
          .project-section {
            padding: 0 1rem;
          }
        }
        
        @media (max-width: 640px) {
          h1 {
            font-size: 3rem;
          }
          
          h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}