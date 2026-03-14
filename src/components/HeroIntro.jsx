'use client';

import { useEffect, useState } from 'react';

const VIDEO_URLS = [
  "https://res.cloudinary.com/dwekh4tpm/video/upload/v1773424654/melodai_ovxiff.mp4",
  "https://res.cloudinary.com/dwekh4tpm/video/upload/v1773424681/clevernote_yb1ady.mp4",
  "https://res.cloudinary.com/dwekh4tpm/video/upload/v1773424736/cleanmyphone_n3iogg.mp4",
  "/potato.mp4",
  "/appliedplus.mp4",
  "/shoehive.mp4",
];

const IMAGE_URLS = [
  "/melodai.png", "/clevernotee.png", "/cleanmyphone.png", "/potatobook.png",
  "/appliedplus.png", "/tixoo.png", "/shoehive.png",
  "/M1.PNG", "/M2.png", "/M3.png", "/M4.png",
  "/M5.png", "/M6.PNG", "/M7.png", "/M8.PNG",
  "/C1.PNG", "/C2.PNG", "/CN3.png", "/CN4.png",
  "/C5.PNG", "/C6.PNG", "/C7.PNG", "/C8.PNG",
  "/cm1.PNG", "/cm2.PNG", "/cm3.PNG", "/cm4.PNG",
  "/cm5.PNG", "/cm6.PNG", "/cm7.PNG", "/cm8.PNG",
  "/p1.jpg", "/p2.jpg", "/p3.PNG", "/p4.jpg",
  "/p5.jpg", "/p6.PNG", "/p7.jpg", "/p8.jpg",
  "/a1.jpeg", "/a2.jpeg", "/a3.jpeg", "/a4.jpeg",
  "/a5.jpeg", "/a6.jpeg", "/a7.jpeg", "/a8.jpeg",
  "/t1.jpeg", "/t2.jpeg", "/t3.jpeg", "/t4.jpeg",
  "/t5.jpeg", "/t6.jpeg", "/t7.jpeg", "/t8.jpeg",
  "/s1.jpeg", "/s2.jpeg", "/s3.jpeg", "/s4.jpeg",
  "/s5.jpeg", "/s6.jpeg", "/s7.jpeg", "/s8.jpeg",
  "/flutter.jpg",
];

function preloadAssets() {
  IMAGE_URLS.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
  VIDEO_URLS.forEach((src) => {
    const vid = document.createElement('video');
    vid.src = src;
    vid.preload = 'auto';
    vid.muted = true;
  });
}

export default function IntroScreen({ onComplete, children }) {
  const [step, setStep] = useState(0);

  // ── KEY FIX: initialise as `true` if already seen — no flash ──
  const [introComplete, setIntroComplete] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('introSeen') === 'true';
    }
    return false;
  });

  useEffect(() => {
    preloadAssets();

    // Already seen — skip immediately, no timers needed
    if (introComplete) {
      if (onComplete) onComplete();
      return;
    }

    sessionStorage.setItem('introSeen', 'true');

    const timers = [
      setTimeout(() => setStep(1), 100),
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 1600),
      setTimeout(() => setStep(4), 2400),
      setTimeout(() => setStep(5), 3200),
      setTimeout(() => setStep(6), 4000),
      setTimeout(() => setStep(7), 5400),
      setTimeout(() => {
        setIntroComplete(true);
        if (onComplete) onComplete();
      }, 7600),
    ];

    return () => timers.forEach((t) => clearTimeout(t));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Already seen — render children directly, zero overhead
  if (introComplete) {
    return <>{children}</>;
  }

  return (
    // ── z-[200] ensures intro is ABOVE the navbar (z-50) ──
    <section className="fixed inset-0 z-[200] bg-black text-white flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative w-full h-full flex items-center justify-center">

        {/* PIYUSH */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-[8rem] font-black leading-none tracking-tighter text-white transition-all duration-1000 absolute whitespace-nowrap ${
            step >= 1 && step < 3
              ? 'top-1/2 -translate-y-1/2 left-[23%] -translate-x-1/2 opacity-100'
              : step === 0
              ? '-top-full left-[17%] -translate-x-1/2 opacity-0'
              : step >= 3 && step < 4
              ? 'top-1/2 -translate-y-1/2 left-[17%] -translate-x-1/2 opacity-100'
              : 'top-full left-[17%] -translate-x-1/2 opacity-0'
          }`}
        >
          PIYUSH
        </h1>

        {/* KADAM */}
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-[8rem] font-black leading-none tracking-tighter text-white transition-all duration-1000 absolute whitespace-nowrap ${
            step >= 2 && step < 3
              ? 'top-1/2 -translate-y-1/2 left-[78%] -translate-x-1/2 opacity-100'
              : step < 2
              ? 'top-[200%] left-[83%] -translate-x-1/2 opacity-0'
              : step >= 3 && step < 4
              ? 'top-1/2 -translate-y-1/2 left-[83%] -translate-x-1/2 opacity-100'
              : '-top-full left-[83%] -translate-x-1/2 opacity-0'
          }`}
        >
          KADAM
        </h2>

        {/* FLUTTER */}
        <div
          className={`absolute transition-all duration-1000 whitespace-nowrap ${
            step >= 5 && step < 6
              ? 'top-1/2 -translate-y-1/2 left-[28%] -translate-x-1/2 opacity-100'
              : step < 5
              ? '-top-full left-[28%] -translate-x-1/2 opacity-0'
              : step >= 6 && step < 7
              ? 'top-1/2 -translate-y-1/2 left-[28%] -translate-x-1/2 opacity-100'
              : step >= 7
              ? '-top-full left-[28%] -translate-x-1/2 opacity-0'
              : 'opacity-0'
          }`}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[6rem] font-black tracking-tighter text-white">
            FLUTTER
          </p>
        </div>

        {/* DEVELOPER */}
        <div
          className={`absolute transition-all duration-1000 whitespace-nowrap ${
            step >= 6 && step < 7
              ? 'top-1/2 -translate-y-1/2 left-[72%] -translate-x-1/2 opacity-100'
              : step < 6
              ? 'top-[200%] left-[72%] -translate-x-1/2 opacity-0'
              : step >= 7
              ? 'top-[200%] left-[72%] -translate-x-1/2 opacity-0'
              : 'opacity-0'
          }`}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[6rem] font-black tracking-tighter text-white">
            DEVELOPER
          </p>
        </div>

        {/* Flutter Icon */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
            step >= 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <img
            src="/flutter.jpg"
            alt="Flutter Logo"
            className="w-58 h-58 sm:w-74 sm:h-74 md:w-90 md:h-90 object-contain"
          />
        </div>
      </div>

      {/* Fade-out overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
          introComplete ? 'opacity-100' : 'opacity-0'
        } pointer-events-none`}
      />
    </section>
  );
}