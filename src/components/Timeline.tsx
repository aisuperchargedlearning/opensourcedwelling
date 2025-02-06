import React from 'react';
import { Clock, CheckCircle } from 'lucide-react';

export function Timeline() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Site Analysis & Planning',
      status: 'Completed',
      date: 'Q4 2023',
      description: 'Comprehensive site analysis and master planning completed.'
    },
    {
      phase: 'Phase 2',
      title: 'Infrastructure Development',
      status: 'In Progress',
      date: 'Q1-Q2 2024',
      description: 'Road construction and utility installation underway.'
    },
    {
      phase: 'Phase 3',
      title: 'Home Construction',
      status: 'Upcoming',
      date: 'Q3 2024',
      description: 'Individual home construction begins.'
    },
    {
      phase: 'Phase 4',
      title: 'Completion',
      status: 'Upcoming',
      date: 'Q4 2024',
      description: 'Final landscaping and community features.'
    }
  ];

  return (
    <section id="timeline" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E5D3C8] mb-4">
            Development Timeline
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Track our progress as we bring this exclusive community to life.
          </p>
        </div>

        <div className="relative">
          {phases.map((phase, index) => (
            <div key={phase.phase} className="mb-12 md:mb-0 relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div className={`md:${index % 2 === 0 ? 'text-right' : 'col-start-2'}`}>
                <div className="bg-black/30 p-6 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    <span className="text-sm text-[#E5D3C8]">{phase.date}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{phase.description}</p>
                  <div className="flex items-center space-x-2 text-sm">
                    {phase.status === 'Completed' ? (
                      <CheckCircle className="text-green-500" size={16} />
                    ) : (
                      <Clock className="text-[#E5D3C8]" size={16} />
                    )}
                    <span className={phase.status === 'Completed' ? 'text-green-500' : 'text-[#E5D3C8]'}>
                      {phase.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}