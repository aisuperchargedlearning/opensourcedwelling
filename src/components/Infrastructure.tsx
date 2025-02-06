import React from 'react';
import { Router, Zap, Wifi, Shield } from 'lucide-react';

export function Infrastructure() {
  const features = [
    {
      icon: Router,
      title: 'Road Network',
      description: 'Carefully planned access routes minimizing environmental impact'
    },
    {
      icon: Zap,
      title: 'Power Systems',
      description: 'Underground utilities and renewable energy integration'
    },
    {
      icon: Wifi,
      title: 'Connectivity',
      description: 'High-speed fiber optic network throughout the community'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'State-of-the-art security systems and controlled access'
    }
  ];

  return (
    <section id="infrastructure" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Infrastructure</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Modern infrastructure seamlessly integrated with natural surroundings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-black/30 p-6 rounded-lg hover:bg-black/40 transition-colors"
            >
              <feature.icon className="text-[#E5D3C8] mb-4" size={24} />
              <h3 className="text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}