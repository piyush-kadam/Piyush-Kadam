'use client';

import { useState } from 'react';
import LightRays from '@/components/LightRays';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-20 pt-32 pb-20 bg-black text-white relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">
            Let's Connect
          </h1>
          <p className="text-gray-400 text-lg">
            Have a project idea, collaboration, or just want to say hi?  
            Drop a message — I'm always open to conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Video Section */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-white/10 aspect-square lg:aspect-auto lg:h-[400px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90"
            >
              <source src="/contact.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Form Section */}
          <div className="bg-zinc-950/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:h-[400px] flex flex-col">
            <div className="space-y-4 flex-1 flex flex-col">
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 outline-none focus:border-white/50 transition-all"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400 mb-2 block">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 outline-none focus:border-white/50 transition-all"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label className="text-sm text-gray-400 mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full flex-1 bg-black/40 border border-white/20 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 outline-none focus:border-white/50 transition-all resize-none min-h-[80px]"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 active:scale-[0.98] transition-all"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}