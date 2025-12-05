import React from 'react';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  if (EDUCATION.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
       <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <span className="bg-purple-100 text-purple-700 p-2 rounded-lg">
          <GraduationCap size={28} />
        </span>
        Education
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
            <div className="mb-4 bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-tight mb-2 min-h-[3rem]">
              {edu.degree}
            </h3>
            <p className="text-purple-700 font-medium mb-1">{edu.institution}</p>
            <p className="text-sm text-slate-500">{edu.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;