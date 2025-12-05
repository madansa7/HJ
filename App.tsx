import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import SkillsChart from './components/SkillsChart';
import Education from './components/Education';
import { PROFILE } from './constants';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <Hero />
      
      <main className="max-w-5xl mx-auto px-6 space-y-24 -mt-10 relative z-20">
        {/* About Section */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Professional Summary</h2>
          <p className="text-lg text-slate-600 leading-relaxed text-justify">
            {PROFILE.summary}
          </p>
        </div>

        {/* Skills & Certs */}
        <section>
          <SkillsChart />
        </section>

        {/* Experience */}
        <section>
          <Timeline />
        </section>

        {/* Education */}
        <section>
          <Education />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-32 border-t border-slate-200 bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-slate-900 font-semibold text-xl mb-2">{PROFILE.name}</p>
          <p className="text-slate-500 mb-8">{PROFILE.tagline}</p>
          <div className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to top FAB */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 z-50 hover:bg-blue-700 hover:scale-110 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;
