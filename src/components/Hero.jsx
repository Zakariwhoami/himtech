import React from 'react';
import '../index.css'
import logo from "../assets/logo.png"
import { Play, ChevronDown, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id='home' className="relative min-h-screen flex items-center text-white overflow-hidden font-sans">


      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Orange Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/40 via-[#050505]/0 to-transparent blur-3xl opacity-60" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>


      <div className="relative z-10 container px-6 max-w-7xl">


        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 pt-20 lg:pt-0">


          <div className="flex-1 text-left space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1]">
              <div className="font-bold">HIMTECH</div>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 block mt-2">
                Fast Cloud Processing
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
              Manage attendance, fees, exams and communication — all in one platform.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

              {/* Button 1: Primary (Blue) */}
              {/* I changed 'bg-blue-400' to a specific hex code to force the color */}
              <div type="button" className="px-8 py-3.5 rounded-full font-bold text-white bg-[#3b82f6] hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-500/30">
                Get Started Today!
              </div>

              {/* Button 2: Secondary (Dark/Glass) */}
              {/* I added a background color, padding, and border so it looks like a button */}
              <div type="button" className="px-8 py-3.5 rounded-full font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm transition-all flex items-center gap-2">
                Request Demo <ChevronDown className="-rotate-90" size={16} />
              </div>

            </div>
          </div>


          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

              {/* 3D Animation Wrapper */}
              <div className="animate-rotate3D relative z-10">
                <img
                  src={logo}
                  className="w-100 h-auto drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                  alt="HimTech Logo"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}