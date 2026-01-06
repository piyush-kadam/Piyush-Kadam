"use client";
import React, { useState, useEffect } from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMounted, setIsMounted] = useState(false);

  const services = [
    "Flutter Development",
    "Web Development",
    "UI/UX Design",
  ];

  const company = [
    { name: "About Me", href: "/about" },
    { name: "My Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h2 className={`text-4xl font-black text-white ${greatVibes.className}`}>
                Piyush Kadam
              </h2>
              <div className="mt-2 h-1 w-20 bg-white rounded-full"></div>
            </div>
            <p className="text-white/70 leading-relaxed">
              Crafting digital experiences that inspire and engage. Building the future, one pixel at a time.
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i} className="group">
                  <a href="#" className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">More</h3>
            <ul className="space-y-3">
              {company.map((item, i) => (
                <li key={i} className="group">
                  <a href={item.href} className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 group-hover:bg-white transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white uppercase tracking-wider">Connect</h3>
            <div className="flex gap-3">
              <SocialIcon href="https://workstate.in" label="Website">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/piyush-kadam2004/" label="LinkedIn">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </SocialIcon>
              <SocialIcon href="https://github.com/piyush-kadam" label="GitHub">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </SocialIcon>
              <SocialIcon href="mailto:piyushkadam3333@gmail.com" label="Email">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/piyush.kadam_" label="Instagram">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </SocialIcon>
            </div>
          
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/60">
            © {currentYear} Piyush Kadam. All rights reserved.
          </p>
         
          <p className="text-white/60">
            Made with <span className="text-white">♥</span> by{" "}
            <a
              href="https://www.linkedin.com/in/piyush-kadam2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-colors"
            >
              Piyush Kadam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/20 hover:border-white hover:bg-white/10 transition-all hover:scale-110 overflow-hidden"
    >
      <svg
        className="w-5 h-5 relative z-10 text-white/70 group-hover:text-white transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        {children}
      </svg>
    </a>
  );
}