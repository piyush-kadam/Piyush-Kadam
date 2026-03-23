import React from 'react';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <div className="space-y-12">
            {/* Founder Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-4xl font-bold">WorkState</h2>
                <span className="px-4 py-1.5 bg-white text-black text-sm font-bold">FOUNDER</span>
              </div>
             
              <a
                href="https://workstate.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-base underline underline-offset-4 decoration-white/40 hover:decoration-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] transition-all duration-300"
              >
                workstate.in
              </a>

              <p className="text-white/90 mt-4 text-lg leading-relaxed">
                Founded a digital media agency specializing in websites, mobile apps, video editing, and social media management. 
                We specialize in building clean, scalable, and user-friendly digital experiences that help ideas evolve into impactful products. From intuitive UI/UX design to robust frontend and backend development, WorkState blends creativity with technology to deliver solutions that are both visually compelling and technically sound. Our goal is to create meaningful digital products that not only look great but also perform seamlessly and grow with your vision.</p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Experience</h3>
              
              <div className="space-y-8">

                {/* MelodAI / WorkState */}
                <div>
                  <div className="mb-3">
                    <h4 className="text-2xl font-bold text-white">MelodAI</h4>
                    <p className="text-white/70 text-base">Full Stack Developer</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                      <h5 className="font-bold text-base mb-1">MelodAI - AI Music Generator</h5>
                      <p className="text-white/60 text-sm">Flutter • Firebase • RevenueCat • In-App Subscription • AI Music Generation • AI Cover Creation • Text-to-Song</p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                      <h5 className="font-bold text-base mb-1">CleverNote - AI Note Taker</h5>
                      <p className="text-white/60 text-sm">Flutter • Firebase • RevenueCat • Auto Transcription • Smart Summaries • AI Assistant • Multi-format Export</p>
                    </div>

                    <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                      <h5 className="font-bold text-base mb-1">CleanMyPhone - AI Cleaner</h5>
                      <p className="text-white/60 text-sm">Flutter • Firebase • RevenueCat • Storage Optimization • Private Vault • Contact Management • Water Eject</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-base leading-relaxed">
                    Built and shipped three full-scale AI-powered iOS apps — an AI music generator, an AI note-taking platform, and an iPhone cleaning utility — each featuring in-app subscriptions, push notifications, and multiple authentication methods including Apple Sign-In and Google Sign-In.
                  </p>
                </div>

                {/* 7Seers */}
                <div>
                  <div className="mb-3">
                    <h4 className="text-2xl font-bold text-white">7Seers</h4>
                    <p className="text-white/70 text-base">Lead Flutter Developer</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                      <h5 className="font-bold text-base mb-1">PotatoBook - Expense Tracker App</h5>
                      <p className="text-white/60 text-sm">Native Widgets • Complex UI • Database Management</p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                      <h5 className="font-bold text-base mb-1">Terran - Event App</h5>
                      <p className="text-white/60 text-sm">Apple Sign-in • Advanced UI/UX • Real-time Updates</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-base leading-relaxed">
                    Learned to build native widgets, work on complicated UI and databases, and implemented Apple Sign-in authentication.
                  </p>
                </div>

                {/* AppliedPlus */}
                <div>
                  <div className="mb-3">
                    <h4 className="text-2xl font-bold text-white">AppliedPlus</h4>
                    <p className="text-white/70 text-base">Development Intern</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                      <h5 className="font-bold text-base mb-1">AppliedPlus - Job Search App</h5>
                      <p className="text-white/60 text-sm">Smart Recommendations • Best For You Section • Jobs From All Platforms</p>
                    </div>
                    
                    <div className="bg-white/5 border border-white/20 p-4 rounded-lg">
                      <h5 className="font-bold text-base mb-1">IIMJobs Automation API</h5>
                      <p className="text-white/60 text-sm">Python • Flask • Selenium • REST API</p>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-base leading-relaxed">
                    Developed a job search app and built a custom automation API using Python, Flask, and Selenium. 
                    This API was designed to automate job applications on platforms like IIMJobs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - ID Card Image & Education */}
          <div className="flex flex-col items-start justify-center lg:justify-end gap-12">
            {/* ID Card */}
            <div className="w-full max-w-xl border-2 border-white/30 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/id1.png" 
                alt="Professional ID Card"
                className="w-full h-auto"
              />
            </div>

            {/* Education Timeline */}
            <div className="w-full max-w-xl relative z-10">
              <h3 className="text-3xl font-bold mb-8 text-white">Education</h3>
              
              <div className="relative">
                {/* Vertical Dotted Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5" 
                     style={{
                       backgroundImage: 'repeating-linear-gradient(0deg, white, white 8px, transparent 8px, transparent 16px)',
                     }}>
                </div>

                {/* Education Items */}
                <div className="space-y-8">
                  {/* Engineering */}
                  <div className="relative flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-full border-4 border-black ring-4 ring-gray-800 flex-shrink-0 flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-zinc-800/50 hover:border-white/30 transition-all duration-300">
                        <h4 className="text-xl font-bold text-white mb-2">Engineering</h4>
                        <p className="text-white/80 text-base mb-1">Vidyavardhini's College of Engineering and Technology</p>
                        <p className="text-white/60 text-sm">Computer Science • CGPA: 8.0</p>
                      </div>
                    </div>
                  </div>

                  {/* Junior College */}
                  <div className="relative flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-full border-4 border-black ring-4 ring-gray-800 flex-shrink-0 flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-zinc-800/50 hover:border-white/30 transition-all duration-300">
                        <h4 className="text-xl font-bold text-white mb-2">Junior College</h4>
                        <p className="text-white/80 text-base mb-1">Viva College</p>
                        <p className="text-white/60 text-sm">HSC • Percentage: 80%</p>
                      </div>
                    </div>
                  </div>

                  {/* School */}
                  <div className="relative flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-full border-4 border-black ring-4 ring-gray-800 flex-shrink-0 flex items-center justify-center z-10">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="bg-zinc-900/50 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-zinc-800/50 hover:border-white/30 transition-all duration-300">
                        <h4 className="text-xl font-bold text-white mb-2">School</h4>
                        <p className="text-white/80 text-base mb-1">New English High School</p>
                        <p className="text-white/60 text-sm">SSC • Percentage: 90%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}