import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Timeline: React.FC = () => {
  // Use a generic state to track which item is open. 
  // Storing index of the open item, -1 means none (or we can allow multiple).
  // Let's allow multiple open for better UX, or just toggle.
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0, 1, 2]));

  const toggleItem = (index: number) => {
    const newSet = new Set(expandedItems);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedItems(newSet);
  };

  return (
    <div className="space-y-8">
       <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <span className="bg-blue-100 text-blue-700 p-2 rounded-lg">
          <Briefcase size={28} />
        </span>
        Experience History
      </h2>
      
      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-10">
        {EXPERIENCE.map((job, index) => {
          const isExpanded = expandedItems.has(index);
          return (
            <div key={index} className="relative pl-8 md:pl-10">
              {/* Timeline Dot */}
              <div 
                className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-4 border-white transition-colors duration-300 ${isExpanded ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-300'}`}
              ></div>

              <div 
                className={`bg-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-md ${isExpanded ? 'ring-1 ring-blue-200' : ''}`}
                onClick={() => toggleItem(index)}
              >
                <div className="p-5 md:p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                      <div className="text-lg font-semibold text-blue-600 mt-1">{job.company}</div>
                    </div>
                    <button className="text-slate-400 hover:text-blue-500 transition-colors">
                      {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-slate-400"/>
                      <span>{job.period}</span>
                      {job.duration && <span className="bg-slate-100 px-2 py-0.5 rounded text-xs text-slate-600">{job.duration}</span>}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-400"/>
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                <div 
                  className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 border-t border-slate-50' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 bg-slate-50/50">
                    {job.description.length > 0 ? (
                      <ul className="space-y-2 mt-4">
                        {job.description.map((desc, i) => (
                          <li key={i} className="flex gap-3 text-slate-700 leading-relaxed text-sm md:text-base">
                            <span className="text-blue-400 mt-1.5">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-4 text-slate-400 italic text-sm">No detailed description provided for this role.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
