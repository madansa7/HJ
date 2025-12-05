
import React from 'react';
import { Mic, Users, Presentation, TrendingUp } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap = {
  Mic: Mic,
  Users: Users,
  Presentation: Presentation,
  TrendingUp: TrendingUp
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Services Offered
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Empowering individuals and organizations through specialized coaching and strategic development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Icon size={28} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
