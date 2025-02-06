import React from 'react';
import { Sun, Droplets, Leaf, Wind } from 'lucide-react';

export function Sustainability() {
  const features = [
    {
      icon: Sun,
      title: 'Solar Integration',
      description: 'Each home is designed for optimal solar panel placement and energy efficiency.'
    },
    {
      icon: Droplets,
      title: 'Water Management',
      description: 'Advanced rainwater harvesting and greywater systems reduce water consumption.'
    },
    {
      icon: Leaf,
      title: 'Native Landscaping',
      description: 'Indigenous plants and trees preserve local ecology and reduce maintenance.'
    },
    {
      icon: Wind,
      title: 'Natural Ventilation',
      description: 'Home designs maximize natural airflow and reduce energy needs.'
    }
  ];

  return (
    <section id="sustainability" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#E5D3C8] mb-4">
            Sustainable Living
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our commitment to environmental stewardship is reflected in every aspect
            of the development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-black/30 p-6 rounded-lg">
              <feature.icon className="text-[#E5D3C8] mb-4" size={24} />
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-black/30 rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Environmental Impact
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#E5D3C8] rounded-full"></span>
                  <span>50% reduction in energy consumption</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#E5D3C8] rounded-full"></span>
                  <span>40% lower water usage than traditional homes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#E5D3C8] rounded-full"></span>
                  <span>80% of construction waste recycled</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#E5D3C8] rounded-full"></span>
                  <span>100% native plant species in landscaping</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?auto=format&fit=crop&q=80"
                alt="Sustainable features"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}