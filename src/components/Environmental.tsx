import React from 'react';
import { Leaf, Droplets, Sun, Wind } from 'lucide-react';

export function Environmental() {
  const features = [
    {
      icon: Leaf,
      title: 'Native Ecosystems',
      description: 'Preservation of existing vegetation and wildlife habitats'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Sustainable drainage and water management systems'
    },
    {
      icon: Sun,
      title: 'Solar Integration',
      description: 'Optimal solar exposure for energy efficiency'
    },
    {
      icon: Wind,
      title: 'Natural Ventilation',
      description: 'Wind pattern analysis for comfort and efficiency'
    }
  ];

  return (
    <section id="environmental" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Environmental Integration</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Thoughtful integration with the natural environment for sustainable living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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