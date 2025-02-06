import React from 'react';
import { Mountain, Wind, Sun, Droplets } from 'lucide-react';

export function SiteAnalysis() {
  const analyses = [
    {
      icon: Mountain,
      title: 'Topographical Study',
      description: 'Detailed elevation analysis and natural feature mapping for optimal home placement.'
    },
    {
      icon: Wind,
      title: 'Wind Patterns',
      description: 'Assessment of prevailing winds for natural ventilation and climate control.'
    },
    {
      icon: Sun,
      title: 'Solar Exposure',
      description: 'Solar path analysis for energy efficiency and natural lighting optimization.'
    },
    {
      icon: Droplets,
      title: 'Water Management',
      description: 'Natural drainage patterns and watershed analysis for sustainable water systems.'
    }
  ];

  return (
    <section id="site-analysis" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg text-[#E5D3C8] mb-6">Site Analysis</h2>
            <p className="text-gray-400 mb-8">
              Comprehensive analysis of the 10-acre property reveals optimal
              placement opportunities while preserving natural features.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {analyses.map((item) => (
                <div 
                  key={item.title}
                  className="flex items-start space-x-4 bg-black/20 p-6 rounded-lg"
                >
                  <item.icon className="text-[#E5D3C8] mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-medium mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://ik.imagekit.io/a7tech/Architectural%20Planning/Hero%20images/Topomapimage.jpg?updatedAt=1730597845645"
              alt="Topographical map"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}