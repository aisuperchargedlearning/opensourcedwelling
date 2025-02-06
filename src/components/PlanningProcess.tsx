import React from 'react';
import { Compass, Map, TreePine, Ruler, Users, FileText } from 'lucide-react';

export function PlanningProcess() {
  const phases = [
    {
      icon: Compass,
      phase: '01',
      title: 'Site Analysis',
      description: 'Comprehensive topographical and environmental assessment',
      status: 'Upcoming'
    },
    {
      icon: Map,
      phase: '02',
      title: 'Master Planning',
      description: 'Strategic layout and infrastructure integration',
      status: 'Upcoming'
    },
    {
      icon: TreePine,
      phase: '03',
      title: 'Environmental Integration',
      description: 'Natural preservation and sustainable systems',
      status: 'Upcoming'
    },
    {
      icon: Ruler,
      phase: '04',
      title: 'Infrastructure Design',
      description: 'Utility planning and road layout optimization',
      status: 'Upcoming'
    },
    {
      icon: Users,
      phase: '05',
      title: 'Community Spaces',
      description: 'Shared amenities and recreation areas',
      status: 'Upcoming'
    },
    {
      icon: FileText,
      phase: '06',
      title: 'Documentation',
      description: 'Detailed planning and permit documentation',
      status: 'Upcoming'
    }
  ];

  return (
    <section id="planning-process" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-[#E5D3C8] mb-4 tracking-tight">
            Planning Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Our systematic approach ensures thorough consideration of all aspects
            before any architectural design begins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <div 
              key={phase.phase}
              className="relative bg-black/30 p-8 rounded-lg border border-gray-800 hover:border-[#E5D3C8] transition-colors group"
            >
              <div className="flex items-start justify-between mb-6">
                <phase.icon className="text-[#E5D3C8] group-hover:scale-110 transition-transform" size={24} />
                <span className="text-4xl font-light text-[#E5D3C8]/20 group-hover:text-[#E5D3C8]/30 transition-colors">
                  {phase.phase}
                </span>
              </div>
              
              <h3 className="text-xl font-light text-white mb-2 tracking-tight">
                {phase.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {phase.description}
              </p>
              
              <span className={`text-sm ${
                phase.status === 'Completed' ? 'text-green-400' :
                phase.status === 'In Progress' ? 'text-[#E5D3C8]' :
                'text-gray-500'
              }`}>
                {phase.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}