import React from 'react';
import { Droplets, Truck, Mountain, Info } from 'lucide-react';

export function DefensiveFeatures() {
  const features = [
    {
      icon: Droplets,
      title: "Community Water Reserves",
      description: "Establishing strategically placed water storage systems ensures that adequate water is available for both daily use and emergency response. These reserves can be designed to support firefighting efforts, providing accessible water sources to suppress fires promptly.",
      details: "Incorporating gravity-fed systems or backup power for pumps enhances reliability during power outages."
    },
    {
      icon: Truck,
      title: "Emergency Vehicle Access",
      description: "Designing communities with direct and unobstructed routes is essential for rapid emergency response. Wide, well-marked roads with ample turning radii accommodate firefighting apparatus and evacuation traffic.",
      details: "Regular maintenance to clear overgrown vegetation and remove obstacles ensures these routes remain passable during emergencies."
    },
    {
      icon: Mountain,
      title: "Enhanced Natural Defense",
      description: "Reinforcing slopes and establishing vegetation barriers can significantly increase a community's protection against wildfires. Terracing, retaining walls, and erosion control measures stabilize slopes.",
      details: "Selecting fire-resistant plant species for landscaping reduces fuel loads. These strategies work together to diminish fire intensity and spread."
    }
  ];

  return (
    <section id="defensive-features" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Natural Defensive Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Integrating natural defensive features into community planning leverages the landscape to mitigate fire risks. Strategically designed greenbelts, firebreaks, and managed forests can slow the spread of wildfires and provide critical buffer zones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-black/30 p-6 rounded-lg hover:bg-black/40 transition-colors group"
            >
              <div className="flex items-start justify-between">
                <feature.icon className="text-[#E5D3C8] mb-4 group-hover:scale-110 transition-transform" size={24} />
                <Info className="text-[#E5D3C8]/60 group-hover:text-[#E5D3C8] transition-colors" size={18} />
              </div>
              <h3 className="text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>
              <p className="text-gray-500 text-sm italic">{feature.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}