import React from 'react';
import { Building2, PenTool, Ruler, FileCheck } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Project Planning',
      description: 'Comprehensive planning and strategy development for successful project execution.'
    },
    {
      icon: PenTool,
      title: 'Design Services',
      description: 'Innovative and functional design solutions tailored to your needs.'
    },
    {
      icon: Ruler,
      title: 'Technical Analysis',
      description: 'Detailed technical analysis and feasibility studies.'
    },
    {
      icon: FileCheck,
      title: 'Documentation',
      description: 'Complete project documentation and compliance management.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your project needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-black/30 p-8 rounded-lg hover:bg-black/40 transition-colors group"
            >
              <service.icon className="text-[#E5D3C8] mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-white text-xl mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}