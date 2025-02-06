import React from 'react';
import { Map, Home, Trees, Route } from 'lucide-react';

export function MasterPlan() {
  const features = [
    {
      icon: Home,
      title: 'Home Sites',
      description: 'Strategic Placement of Homes to Optimize Sun Exposure and privacy'
    },
    {
      icon: Trees,
      title: 'Natural Preservation',
      description: 'Protected green spaces and wildlife corridors'
    },
    {
      icon: Route,
      title: 'Access Routes',
      description: 'Thoughtfully designed road network'
    },
    {
      icon: Map,
      title: 'Community Spaces',
      description: 'Shared amenities and gathering areas'
    }
  ];

  return (
    <section id="master-plan" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Master Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A harmonious balance of private luxury homes and preserved natural spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
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

          <div className="relative">
            <img
              src="https://ik.imagekit.io/a7tech/Architectural%20Planning/Hero%20images/Smallhome.jpg?updatedAt=1730594094287"
              alt="Master plan visualization"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}