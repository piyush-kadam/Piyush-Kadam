'use client';

import { useEffect, useState } from 'react';

export default function IntroScreen({ onComplete, children }) {
  const [step, setStep] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 100),    // Start PIYUSH from top
      setTimeout(() => setStep(2), 800),    // Start KADAM from bottom
      setTimeout(() => setStep(3), 1600),   // Meet in center
      setTimeout(() => setStep(4), 2400),   // Separate (PIYUSH down, KADAM up)
      setTimeout(() => setStep(5), 3200),   // FLUTTER from top
      setTimeout(() => setStep(6), 4000),   // DEVELOPER from bottom (slower)
      setTimeout(() => setStep(7), 5400),   // Show Flutter icon (slower)
      setTimeout(() => {
        setIntroComplete(true);
        if (onComplete) onComplete();
      }, 7600)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  if (introComplete) {
    return <>{children}</>;
  }

  return (
    <section className="fixed inset-0 z-50 bg-black text-white flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative w-full h-full flex items-center justify-center">
        {/* PIYUSH - comes from top, LEFT SIDE */}
        <h1 
          className={`text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter text-white transition-all duration-1000 absolute whitespace-nowrap ${
            step >= 1 && step < 3 ? 'top-1/2 -translate-y-1/2 left-[23%] -translate-x-1/2 opacity-100' : 
            step === 0 ? '-top-full left-[17%] -translate-x-1/2 opacity-0' :
            step >= 3 && step < 4 ? 'top-1/2 -translate-y-1/2 left-[17%] -translate-x-1/2 opacity-100' :
            'top-full left-[17%] -translate-x-1/2 opacity-0'
          }`}
        >
          PIYUSH
        </h1>
        
        {/* KADAM - comes from bottom, RIGHT SIDE */}
        <h2 
          className={`text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter text-white transition-all duration-1000 absolute whitespace-nowrap ${
            step >= 2 && step < 3 ? 'top-1/2 -translate-y-1/2 left-[78%] -translate-x-1/2 opacity-100' :
            step < 2 ? 'top-[200%] left-[83%] -translate-x-1/2 opacity-0' :
            step >= 3 && step < 4 ? 'top-1/2 -translate-y-1/2 left-[83%] -translate-x-1/2 opacity-100' :
            '-top-full left-[83%] -translate-x-1/2 opacity-0'
          }`}
        >
          KADAM
        </h2>

        {/* FLUTTER - comes from top, more to the left */}
        <div 
          className={`absolute transition-all duration-1000 whitespace-nowrap ${
            step >= 5 && step < 6 ? 'top-1/2 -translate-y-1/2 left-[28%] -translate-x-1/2 opacity-100' :
            step < 5 ? '-top-full left-[28%] -translate-x-1/2 opacity-0' :
            step >= 6 && step < 7 ? 'top-1/2 -translate-y-1/2 left-[28%] -translate-x-1/2 opacity-100' :
            step >= 7 ? '-top-full left-[28%] -translate-x-1/2 opacity-0' : 'opacity-0'
          }`}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[6rem] font-black tracking-tighter text-white">
            FLUTTER
          </p>
        </div>

        {/* DEVELOPER - comes from bottom, more to the right */}
        <div 
          className={`absolute transition-all duration-1000 whitespace-nowrap ${
            step >= 6 && step < 7 ? 'top-1/2 -translate-y-1/2 left-[72%] -translate-x-1/2 opacity-100' :
            step < 6 ? 'top-[200%] left-[72%] -translate-x-1/2 opacity-0' :
            step >= 7 ? 'top-[200%] left-[72%] -translate-x-1/2 opacity-0' : 'opacity-0'
          }`}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[6rem] font-black tracking-tighter text-white">
            DEVELOPER
          </p>
        </div>

        {/* Flutter Icon - Use flutter.jpg image */}
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

      {/* Fade out overlay */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${
          introComplete ? 'opacity-100' : 'opacity-0'
        } pointer-events-none`}
      />
    </section>
  );
}