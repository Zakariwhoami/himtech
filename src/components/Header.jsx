import React from 'react';
import { 
  Play, 
  ChevronDown, 
  Zap, 
  Calendar, 
  Video, 
  MessageSquare, 
  FileText, 
  CheckCircle,
  Mail,
  Clock
} from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden font-sans selection:bg-orange-500/30">
      
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top Orange Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/40 via-[#050505]/0 to-transparent blur-3xl opacity-60" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* Navigation */}
      

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center pt-16 pb-32 px-4">
        
        {/* Headline */}
        <div className="text-center max-w-5xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1]">
            HIMTECH<br></br>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Fast Cloud Processing
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Manage attendance, fees, exams and communication — all in one platform
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
          <button className="px-8 py-3.5 bg-white text-black rounded-full font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1">
            Get Started Today!
          </button>
          <button className="text-white hover:text-gray-300 font-medium transition-colors">
            Reruest Demo
          </button>
        </div>

        {/* Complex UI Mockup Section */}
        
      </main>
    </div>
  );
};


export default HeroSection;