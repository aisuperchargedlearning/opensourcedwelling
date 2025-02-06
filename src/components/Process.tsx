import React from 'react';
import { ClipboardList, Lightbulb, Wrench, CheckCircle } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: ClipboardList,
      phase: '01',
      title: 'Planning',
      description: 'Initial consultation and project scope definition'
    },
    {
      icon: Lightbulb,
      phase: '02',
      title: 'Concept',
      description: 'Development of ideas and preliminary designs'
    },
    {
      icon: Wrench,
      phase: '03',
      title: 'Execution',
      description: 'Implementation and project management'
    },
    {
      icon: CheckCircle,
      phase: '04',
      title: 'Delivery',
      description: 'Final review and project handover'
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Our Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A systematic approach to ensure project success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.phase}
              className="relative bg-black/30 p-8 rounded-lg border border-gray-800 hover:border-[#E5D3C8] transition-colors group"
            >
              <div className="flex items-start justify-between mb-6">
                <step.icon className="text-[#E5D3C8] group-hover:scale-110 transition-transform" size={24} />
                <span className="text-4xl font-light text-[#E5D3C8]/20 group-hover:text-[#E5D3C8]/30 transition-colors">
                  {step.phase}
                </span>
              </div>
              
              <h3 className="text-xl font-light text-white mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}