"use client";
import { useState, useEffect, useRef } from "react";

export default function SimpleSpacePortfolio() {
  const projects = [
    {
      name: "MELOD AI",
      mainImage: "/melodai.png",
      video: "https://res.cloudinary.com/dwekh4tpm/video/upload/v1773424654/melodai_ovxiff.mp4",
      images: [
        "/M1.PNG", "/M2.png", "/M3.png", "/M4.png",
        "/M5.png", "/M6.PNG", "/M7.png", "/M8.PNG",
      ],
      description: "AN AI MUSIC GENERATOR PLATFORM",
      details:
        "MelodAI is an AI music creation app that helps users generate original songs and AI covers in seconds. Users can type lyrics or a simple text prompt, choose from many genres and styles, and receive a polished track with vocals, melody, and instrumentals. The app also supports AI-powered cover creation, letting users transform songs into new voice styles for fun and sharing. MelodAI is designed to be simple, fast, and accessible, even for people with no musical background. It is ideal for content creators, aspiring songwriters, music lovers, and anyone who wants to create, cover, and share music easily.",
      appLink: "https://apps.apple.com/in/app/melodai-ai-music-generator/id6753100795",
      year: "2026",
      techStack: {
        framework: "Flutter , Firebase , RevenueCat",
        database: "Firebase Firestore",
        auth: "Gmail, OTP Auth, Google Sign In, Apple Sign In",
        technologies:
          "In-App Subscription, Push Notifications , AI Music Generation (multi-genre) , AI Cover Creation , Text-to-Song Conversion , Customization Options , Social Sharing",
      },
    },
    {
      name: "CleverNote",
      mainImage: "/clevernotee.png",
      video: "https://res.cloudinary.com/dwekh4tpm/video/upload/v1773424681/clevernote_yb1ady.mp4",
      images: [
        "/C1.PNG", "/C2.PNG", "/CN3.png", "/CN4.png",
        "/C5.PNG", "/C6.PNG", "/C7.PNG", "/C8.PNG",
      ],
      description: "Every meeting, perfectly remembered.",
      details:
        "CleverNote is an AI-powered note-taking app that transforms audio, video, PDFs, and YouTube links into structured, searchable notes. It offers automatic transcription, smart summaries, and extracts key highlights and action items. An interactive AI assistant lets you query your notes, rewrite content, or generate scripts. With auto-categorization, full-text search, and multi-format export, it's ideal for students, professionals, content creators, and researchers.",
      appLink: "https://apps.apple.com/in/app/clevernote-ai-note-taker/id6753180281",
      year: "2026",
      techStack: {
        framework: "Flutter , Firebase , RevenueCat",
        database: "Firebase Firestore",
        auth: "Gmail, OTP Auth, Google Sign In, Apple Sign In",
        technologies:
          "In-App Subscription, Push Notifications , Automatic transcription (multi-language) , Smart Summarization, Key Highlights Extraction, Action Items Detection, AI Assistant, Auto-categorization, Full-text Search, Multi-format Export",
      },
    },
    {
      name: "CleanMyPhone",
      mainImage: "/cleanmyphone.png",
      video: "https://res.cloudinary.com/dwekh4tpm/video/upload/v1773424736/cleanmyphone_n3iogg.mp4",
      images: [
        "/cm1.PNG", "/cm2.PNG", "/cm3.PNG", "/cm4.PNG",
        "/cm5.PNG", "/cm6.PNG", "/cm7.PNG", "/cm8.PNG",
      ],
      description: "Less clutter. More storage. One tap.",
      details:
        "Clean My Phone is an all-in-one iPhone cleaning app that quickly frees up storage and keeps your device organized. It scans your phone and removes duplicate and blurry photos, compresses large videos, clears spam emails in bulk, and merges duplicate contacts. A built-in Private Vault lets you store sensitive files securely, and a Water Eject feature uses sound vibrations to push moisture from your speaker. Simple, fast, and designed for everyday users — just scan, review, and clean.",
      appLink: "https://apps.apple.com/in/app/clean-my-phone-ai-cleaner/id6759080389",
      year: "2026",
      techStack: {
        framework: "Flutter , Firebase , RevenueCat",
        database: "Firebase Firestore",
        auth: "Gmail, OTP Auth, Google Sign In, Apple Sign In",
        technologies:
          "In-App Subscription, Push Notifications , Storage Optimization , Mail cleaning , Contact Management , Private Vault , Water Eject",
      },
    },
    {
      name: "POTATOBOOK",
      mainImage: "/potatobook.png",
      video: "/potato.mp4",
      images: [
        "/p6.PNG", "/p7.jpg", "/p2.jpg", "/p3.PNG",
        "/p4.jpg", "/p5.jpg", "/p1.jpg", "/p8.jpg",
      ],
      description: "AN EXPENSE MANAGEMENT PLATFORM",
      details:
        "This APP was made for Rachitroo famous YT creator while working as an intern for 7SEERS media",
      year: "2026",
      techStack: {
        framework: "Flutter , Firebase , RevenueCat",
        database: "Firebase Firestore",
        auth: "Gmail, OTP Auth, Google Sign In, Apple Sign In",
        technologies: "In-App Subscription , Push Notifications",
      },
    },
    {
      name: "APPLIEDPLUS",
      mainImage: "/appliedplus.png",
      video: "/appliedplus.mp4",
      images: [
        "/a1.jpeg", "/a2.jpeg", "/a3.jpeg", "/a4.jpeg",
        "/a5.jpeg", "/a6.jpeg", "/a7.jpeg", "/a8.jpeg",
      ],
      description: "CAREER PLATFORM",
      details:
        "Advanced job application system connecting talent with opportunities, developed for LibraryFLow and AppliedPlus ltd",
      year: "2025",
      techStack: {
        framework: "Flutter & Firebase",
        database: "Firebase Firestore",
        auth: "Gmail, Google Sign In",
        technologies: "Selenium, REST APIs",
      },
    },
    {
      name: "TERRAN",
      mainImage: "/tixoo.png",
      video: null,
      images: [
        "/t1.jpeg", "/t2.jpeg", "/t3.jpeg", "/t4.jpeg",
        "/t5.jpeg", "/t6.jpeg", "/t7.jpeg", "/t8.jpeg",
      ],
      description: "EVENT MANAGEMENT PLATFORM",
      details:
        "This App is a property of 7SEERS media , it is developed by piyush kadam working as an intern.",
      year: "2025",
      techStack: {
        framework: "Flutter & Firebase",
        database: "Firebase Firestore",
        auth: "Gmail, Google Sign In, OTP Verification",
        technologies: "Seats.io, Razorpay , Push Notifications",
      },
    },
    {
      name: "SHOEHIVE",
      mainImage: "/shoehive.png",
      video: "/shoehive.mp4",
      images: [
        "/s1.jpeg", "/s2.jpeg", "/s3.jpeg", "/s4.jpeg",
        "/s5.jpeg", "/s6.jpeg", "/s7.jpeg", "/s8.jpeg",
      ],
      description: "PREMIUM SHOE MARKETPLACE",
      details: "Next-generation shopping experience with premium shoe collections",
      year: "2025",
      techStack: {
        framework: "Flutter & Firebase",
        database: "Firebase Firestore",
        auth: "Gmail",
        technologies: "",
      },
    },
  ];

  // ── SmartVideo: plays only when scrolled into view ────────────────────────
  // crossOrigin="anonymous" is required for Cloudinary CDN videos to load
  // correctly — without it the browser blocks the resource due to CORS headers.
  const SmartVideo = ({ src, objectFit = "contain" }) => {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Watch visibility
    useEffect(() => {
      const el = videoRef.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.3 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    // Play / pause based on visibility
    useEffect(() => {
      const el = videoRef.current;
      if (!el) return;
      if (isVisible) {
        // play() returns a Promise — always catch to avoid uncaught rejections
        const playPromise = el.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay blocked — ensure muted and retry once
            el.muted = true;
            el.play().catch(() => {});
          });
        }
      } else {
        el.pause();
      }
    }, [isVisible]);

    return (
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className="video-element"
        style={{ objectFit }}
      />
    );
  };

  // ── ImageSlideshow: animates only when scrolled into view ─────────────────
  const ImageSlideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.3 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!isVisible || !images || images.length === 0) return;
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }, [isVisible, images]);

    if (!images || images.length === 0) return null;

    return (
      <div ref={containerRef} className="slideshow-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slideshow-image-single"
          key={currentIndex}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="w-full min-h-screen relative">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-black"></div>
          <div className="stars"></div>
        </div>

        <div className="relative z-20 pt-32 pb-16">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-wider">PORTFOLIO</h1>
            <div className="text-lg tracking-[0.3em] text-gray-400 font-light">DIGITAL ARCHITECT</div>
          </div>

          <div className="max-w-7xl mx-auto px-6 space-y-32">
            {projects.map((project, index) => (
              <div key={project.name} className="project-section">
                <div className="project-header mb-12">
                  <div className="titlebar flex items-baseline justify-between mb-4">
                    <h2 className="project-title">{project.name}</h2>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <p className="project-details">{project.details}</p>
                  {project.appLink && (
                    <a
                      href={project.appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View on App Store
                    </a>
                  )}
                </div>

                <div className="project-content">
                  <div className="main-display-container mb-16">
                    <div className="video-display">
                      <div className="video-container">
                        <div className="video-frame">
                          {project.video ? (
                            <SmartVideo
                              src={project.video}
                              objectFit={project.name === "MELOD AI" ? "cover" : "contain"}
                            />
                          ) : (
                            <ImageSlideshow images={project.images} />
                          )}
                        </div>
                        <div className="video-label">APP PREVIEW</div>
                      </div>
                    </div>

                    <div className="main-app-display">
                      <div className="app-container">
                        <div className="app-frame">
                          <img
                            src={project.mainImage}
                            alt={project.name}
                            className="app-image"
                          />
                        </div>
                        <div className="app-label">APPLICATION</div>
                      </div>
                    </div>
                  </div>

                  <div className="screenshots-section">
                    <div className="section-label mb-8">
                      APP SCREENSHOTS • {project.images.length} IMAGES
                    </div>
                    <div className="screenshots-grid">
                      {project.images.map((imageSrc, imgIndex) => (
                        <div key={imgIndex} className="screenshot-item">
                          <div className="screenshot-frame">
                            <img
                              src={imageSrc}
                              alt={`${project.name} screenshot ${imgIndex + 1}`}
                              className="screenshot-image"
                            />
                          </div>
                          <div className="screenshot-number">
                            {String(imgIndex + 1).padStart(2, "0")}
                          </div>
                        </div>
                      ))}
                    </div>

                    {project.techStack && (
                      <div className="tech-stack-section">
                        <div className="tech-stack-card">
                          <div className="tech-stack-title">TECHNICAL SPECIFICATIONS</div>
                          <div className="tech-stack-content">
                            <div className="tech-item">
                              <span className="tech-label">TECHSTACK:</span>
                              <span className="tech-value">{project.techStack.framework}</span>
                            </div>
                            <div className="tech-item">
                              <span className="tech-label">Database:</span>
                              <span className="tech-value">{project.techStack.database}</span>
                            </div>
                            <div className="tech-item">
                              <span className="tech-label">Authentication:</span>
                              <span className="tech-value">{project.techStack.auth}</span>
                            </div>
                            {project.techStack.technologies && (
                              <div className="tech-item">
                                <span className="tech-label">FEATURES:</span>
                                <span className="tech-value">{project.techStack.technologies}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {index < projects.length - 1 && (
                  <div className="project-divider">
                    <div className="divider-line"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-40">
            <div className="text-4xl font-black mb-4">PORTFOLIO</div>
            <div className="text-sm tracking-widest text-gray-500">PORTFOLIO • 2025 • SPACE</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(html), :global(body) { overflow-x: hidden; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        .stars {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(1px 1px at 20px 30px,  rgba(255,255,255,0.2), transparent),
            radial-gradient(1px 1px at 40px 70px,  rgba(255,255,255,0.2), transparent),
            radial-gradient(1px 1px at 90px 40px,  rgba(255,255,255,0.2), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.2), transparent),
            radial-gradient(1px 1px at 160px 30px, rgba(255,255,255,0.2), transparent);
          background-repeat: repeat;
          background-size: 200px 100px;
          opacity: 0.3;
        }

        .slideshow-container {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background: rgba(0,0,0,0.3);
        }
        .slideshow-image-single {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: fadeIn 0.5s ease-in;
        }

        .project-section     { position: relative; }
        .project-header      { text-align: left; max-width: 100%; }
        .project-title       { font-size: 4rem; font-weight: 900; letter-spacing: 0.05em; margin: 0; }
        .project-year        { font-size: 1.2rem; color: #666; font-weight: 600; }
        .project-description { font-size: 14px; color: #888; font-weight: 600; letter-spacing: 0.2em; margin: 8px 0; }
        .project-details     { font-size: 18px; color: #ccc; line-height: 1.5; margin: 0; }
        .project-link {
          display: inline-block;
          margin-top: 14px;
          font-size: 14px;
          color: #ffffff;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: opacity 0.3s ease;
        }
        .project-link:hover { opacity: 0.75; }

        .main-display-container { display: flex; justify-content: center; align-items: flex-start; gap: 40px; }

        .main-app-display { display: flex; justify-content: center; }
        .app-container    { display: flex; flex-direction: column; align-items: center; gap: 20px; }
        .app-frame        { width: 400px; height: 520px; border: 2px solid rgba(255,255,255,0.2); border-radius: 16px; overflow: hidden; background: rgba(255,255,255,0.02); display: flex; align-items: center; justify-content: center; padding: 8px; }
        .app-image        { max-width: 100%; max-height: 100%; object-fit: contain; filter: contrast(1.1); }
        .app-label        { font-size: 14px; color: #666; font-weight: 600; letter-spacing: 0.15em; }

        .video-display   { display: flex; justify-content: center; }
        .video-container { display: flex; flex-direction: column; align-items: center; gap: 20px; }
        .video-frame     { width: 240px; height: 520px; border: 2px solid rgba(255,255,255,0.2); border-radius: 16px; overflow: hidden; background: rgba(255,255,255,0.02); display: flex; align-items: center; justify-content: center; padding: 8px; }
        .video-element   { width: 100%; height: 100%; object-fit: contain; border-radius: 8px; }
        .video-label     { font-size: 14px; color: #666; font-weight: 600; letter-spacing: 0.15em; }

        .screenshots-section { margin-top: 80px; }
        .section-label       { font-size: 13px; color: #888; font-weight: 700; letter-spacing: 0.2em; text-align: center; }
        .screenshots-grid    { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 40px; max-width: 1200px; margin: 0 auto; justify-items: center; }
        .screenshot-item     { display: flex; flex-direction: column; align-items: center; gap: 14px; width: 100%; }
        .screenshot-frame    { width: 240px; height: 420px; border: 1px solid rgba(255,255,255,0.3); border-radius: 10px; overflow: hidden; background: rgba(255,255,255,0.01); display: flex; align-items: center; justify-content: center; padding: 16px; transition: all 0.3s ease; margin: 0 auto; margin-right: 20px; }
        .screenshot-image    { max-width: 100%; max-height: 100%; object-fit: contain; filter: grayscale(0.1) contrast(1.1); transition: filter 0.3s ease; }
        .screenshot-frame:hover { border-color: rgba(255,255,255,0.5); transform: translateY(-6px); }
        .screenshot-frame:hover .screenshot-image { filter: grayscale(0) contrast(1.2); }
        .screenshot-number   { font-size: 12px; color: #666; font-weight: 600; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 4px; }

        .project-divider { margin-top: 100px; display: flex; justify-content: center; }
        .divider-line    { width: 220px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); }

        .tech-stack-section { margin-top: 60px; display: flex; justify-content: center; }
        .tech-stack-card    { max-width: 800px; width: 100%; border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; background: rgba(255,255,255,0.02); padding: 32px; }
        .tech-stack-title   { font-size: 14px; color: #888; font-weight: 700; letter-spacing: 0.2em; margin-bottom: 24px; text-align: center; }
        .tech-stack-content { display: flex; flex-direction: column; gap: 16px; }
        .tech-item          { display: flex; flex-direction: column; gap: 6px; padding: 12px; border-left: 2px solid rgba(255,255,255,0.1); }
        .tech-label         { font-size: 11px; color: #666; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; }
        .tech-value         { font-size: 16px; color: #ccc; font-weight: 400; line-height: 1.5; }

        @media (max-width: 640px) {
          .project-header         { text-align: center; margin-left: auto; margin-right: auto; max-width: 90vw; }
          .titlebar               { flex-direction: column; align-items: center; gap: 6px; }
          .project-title          { font-size: 2.25rem; line-height: 1.1; }
          .project-year           { font-size: 1rem; }
          .project-details        { font-size: 16px; }
          .project-link           { font-size: 13px; }
          .main-display-container { flex-direction: column; align-items: center; gap: 24px; }
          .main-app-display       { justify-content: center; }
          .app-frame              { width: min(92vw, 360px); height: auto; aspect-ratio: 4 / 3; padding: 12px; margin: 0 auto; }
          .video-frame            { width: min(92vw, 280px); height: auto; aspect-ratio: 9 / 19.5; }
          .screenshots-grid       { grid-template-columns: repeat(2, 1fr); gap: 12px; width: 100%; }
          .screenshot-item        { width: 100%; align-items: center; }
          .screenshot-frame       { width: 100%; aspect-ratio: 9 / 16; height: auto; padding: 6px; }
          .section-label          { text-align: center; }
          .project-divider        { margin-top: 60px; }
          .tech-stack-card        { padding: 20px; margin: 0 16px; }
          .tech-item              { padding: 10px; }
          .tech-value             { font-size: 14px; }
        }

        @media (min-width: 641px) and (max-width: 1023px) {
          .project-header         { max-width: 90vw; }
          .main-display-container { flex-direction: column; align-items: center; gap: 32px; }
          .app-frame              { width: 90vw; height: auto; aspect-ratio: 4 / 3; }
          .video-frame            { width: 320px; height: auto; aspect-ratio: 9 / 19.5; }
          .screenshots-grid       { grid-template-columns: repeat(2, 1fr); justify-items: center; }
          .screenshot-frame       { width: 280px; height: auto; aspect-ratio: 9 / 16; }
        }
      `}</style>
    </div>
  );
}