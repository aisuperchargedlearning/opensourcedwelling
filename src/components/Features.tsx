import React from 'react';
import { Shield, Zap, Target, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Highest standards in every project we undertake'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Efficient project delivery without compromising quality'
    },
    {
      icon: Target,
      title: 'Precision Focus',
      description: 'Attention to detail in every aspect of our work'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your vision and satisfaction are our priority'
    }
  ];

  return (
    <section id="features" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We bring excellence and innovation to every project.
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