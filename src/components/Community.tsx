import React from 'react';
import { Users, TreePine, Bike, Coffee } from 'lucide-react';

export function Community() {
  const features = [
    {
      icon: TreePine,
      title: 'Natural Trails',
      description: 'Connected network of walking and hiking trails'
    },
    {
      icon: Bike,
      title: 'Recreation Areas',
      description: 'Outdoor fitness and activity spaces'
    },
    {
      icon: Coffee,
      title: 'Gathering Spaces',
      description: 'Community pavilion and social areas'
    },
    {
      icon: Users,
      title: 'Shared Amenities',
      description: 'Thoughtfully designed common facilities'
    }
  ];

  return (
    <section id="community" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Community Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Shared spaces that foster connection while preserving privacy.
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