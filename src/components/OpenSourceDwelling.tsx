import React from 'react';
import { Share2, FileCode, Users, Lightbulb } from 'lucide-react';

export function OpenSourceDwelling() {
  const features = [
    {
      icon: Share2,
      title: 'Shared Blueprints',
      description: 'Access to detailed construction plans and specifications for fire-resistant homes'
    },
    {
      icon: FileCode,
      title: 'Materials Lists',
      description: 'Comprehensive documentation of fire-resistant materials and suppliers'
    },
    {
      icon: Users,
      title: 'Community Collaboration',
      description: 'Platform for sharing experiences and best practices in fire-resistant construction'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Continuous improvement through community feedback and technological advances'
    }
  ];

  return (
    <section id="open-source" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Open Source Dwelling</h2>
          <p className="text-[#E5D3C8] max-w-2xl mx-auto whitespace-pre-line">
            To the Los Angeles Community and others facing the daunting task of rebuilding your home and your life,

            Our work here is to assist you with building back stronger and smarter. We are proposing tech that will allow you to get the insurance coverage you need. This platform is evolving. 
            Our goal is to provide the technical resources and expert guidance you need to implement resilient design principles that will protect your home against future challenges.
            We've created this space as both a resource hub and a collaborative community. Here, homeowners, designers, and builders can share their expertise and find practical solutions for resilient reconstruction. Together, we can transform this moment of rebuilding into one of innovation and lasting change.
            With determination,
            Eric Thompson
            Founder
            OpenSourceDwelling.com
          </p>
          
          <p className="text-[#E5D3C8] mt-8 font-medium">Contact for specific questions or contributions:</p>
          <p className="text-[#E5D3C8] text-xl mt-2">resilientdwelling@gmail.com</p>
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