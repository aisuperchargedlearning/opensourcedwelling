import React from 'react';
import { Map, TreePine, Home, Droplets } from 'lucide-react';

export function SitePlan() {
  const features = [
    {
      icon: TreePine,
      title: 'Natural Integration',
      description: 'Preserving existing trees and natural features for privacy and beauty'
    },
    {
      icon: Home,
      title: 'Strategic Placement',
      description: 'Homes positioned to maximize views and maintain privacy'
    },
    {
      icon: Droplets,
      title: 'Sustainable Systems',
      description: 'Advanced septic and water management systems'
    },
    {
      icon: Map,
      title: 'Smart Layout',
      description: 'Thoughtfully designed infrastructure and community spaces'
    }
  ];

  return (
    <section id="site-plan" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E5D3C8] mb-4">
            Master Site Plan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every aspect of the development has been carefully considered to create
            a harmonious balance between luxury living and natural preservation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-black/30 p-8 rounded-lg">
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <img
                src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&q=80"
                alt="Aerial site view"
                className="rounded-lg object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Topographical Integration
            </h3>
            <p className="text-gray-400">
              The development follows natural contours of the land, minimizing
              environmental impact while maximizing each home's connection to nature.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="bg-black/30 p-6 rounded-lg">
                <feature.icon className="text-[#E5D3C8] mb-4" size={24} />
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}