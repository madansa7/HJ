
import React from 'react';
import { Mail, Phone, Linkedin, MapPin, CalendarCheck } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pb-24 pt-32 lg:pt-40 px-6 rounded-b-[3rem] lg:rounded-b-[5rem] overflow-hidden shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         {/* Abstract background pattern */}
        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-purple-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        <div className="flex-shrink-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://niftytechfinds.com/wp-content/uploads/2025/12/Gemini_Generated_Image_swfe9lswfe9lswfe.png" 
              alt={PROFILE.name} 
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-slate-900 shadow-xl"
            />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left space-y-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              {PROFILE.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mt-2 font-medium max-w-2xl leading-relaxed">
              {PROFILE.tagline}
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base text-slate-300">
             <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
               <MapPin size={16} className="text-blue-400" />
               {PROFILE.location}
             </div>
             <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
               <Mail size={16} className="text-blue-400" />
               {PROFILE.email}
             </a>
             <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
               <Phone size={16} className="text-blue-400" />
               {PROFILE.phone}
             </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <a 
              href="#contact"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1"
            >
              <CalendarCheck size={20} />
              Book a Consultation
            </a>
            <a 
              href={`https://${PROFILE.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all backdrop-blur-sm border border-white/10"
            >
              <Linkedin size={20} />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
