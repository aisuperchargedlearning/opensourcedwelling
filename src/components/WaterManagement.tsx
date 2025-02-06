import React from 'react';
import { Database, Power, Recycle, Droplets, Link } from 'lucide-react';

export function WaterManagement() {
  const sections = [
    {
      icon: Database,
      title: 'Underground Storage',
      description: 'Establishing a network of underground water storage tanks ensures a reliable water supply for both firefighting and daily use.',
      details: [
        {
          title: 'NFPA 22 Compliance',
          description: 'Underground tanks designed to supply fire pumps with water and withstand service demands.',
          source: {
            name: 'NFPA',
            url: 'https://www.nfpa.org/news-blogs-and-articles/blogs/2024/10/30/nfpa-22-and-water-storage-tanks'
          }
        },
        {
          title: 'Rural Applications',
          description: 'Particularly beneficial in rural or semi-rural areas lacking hydrant infrastructure, providing a secure and dedicated water source for emergency situations.',
          source: {
            name: 'National Storage Tank',
            url: 'https://www.nationalstoragetank.com/product-category/underground-fiberglass/fire-protection-underground-fiberglass/'
          }
        }
      ]
    },
    {
      icon: Power,
      title: 'Pumping Stations',
      description: 'A distributed system of pumping stations maintains adequate water pressure throughout the community.',
      details: [
        {
          title: 'High-Volume Delivery',
          description: 'Multiple pumping stations capable of delivering high volumes of water at substantial pressure, ensuring effective firefighting capabilities across various zones.',
          source: {
            name: 'SF Fire Department AWSS',
            url: 'https://en.wikipedia.org/wiki/San_Francisco_Fire_Department_Auxiliary_Water_Supply_System'
          }
        }
      ]
    },
    {
      icon: Recycle,
      title: 'Gray Water Recycling',
      description: 'Implementing gray water recycling systems allows for the efficient reuse of water for non-potable purposes.',
      details: [
        {
          title: 'Water Conservation',
          description: 'Reduces demand on potable water supplies by repurposing water for irrigation and toilet flushing, enhancing overall water use efficiency.'
        },
        {
          title: 'Emergency Resources',
          description: 'Provides additional water resources during emergencies, contributing to sustainability in daily operations and crisis situations.'
        }
      ]
    },
    {
      icon: Droplets,
      title: 'Fire Suppression',
      description: 'Strategic placement of fire hydrants and sprinkler systems for effective fire suppression.',
      details: [
        {
          title: 'Underground Fire Cisterns',
          description: 'Serve as reliable, year-round dedicated water sources for firefighting in areas without central piped water supply.',
          source: {
            name: 'DARCO',
            url: 'https://darcoinc.com/fire-cisterns/'
          }
        },
        {
          title: 'Homeowner Systems',
          description: 'Dedicated water storage tanks and pool water repurposing systems enhance property fire resilience.',
          source: {
            name: 'Claremont Courier',
            url: 'https://claremont-courier.com/latest-news/invention-turns-pool-water-into-fire-suppression-resource-67511/'
          }
        }
      ]
    }
  ];

  return (
    <section id="water-management" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Integrated Water Management</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Integrated Regional Water Management (IRWM) is a collaborative approach that addresses water management challenges on a regional scale. By increasing regional self-reliance and reducing conflicts, IRWM builds water and climate resilience while achieving social, environmental, and economic objectives.
          </p>
          <a
            href="https://water.ca.gov/programs/integrated-regional-water-management"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#E5D3C8] hover:text-white mt-4"
          >
            Learn more about IRWM
            <Link size={14} className="ml-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div 
              key={section.title}
              className="bg-black/30 p-8 rounded-lg hover:bg-black/40 transition-colors"
            >
              <div className="flex items-center mb-6">
                <section.icon className="text-[#E5D3C8] mr-4" size={32} />
                <h3 className="text-white text-xl">{section.title}</h3>
              </div>
              <p className="text-gray-400 mb-6">{section.description}</p>
              
              <div className="space-y-6">
                {section.details.map((detail, index) => (
                  <div key={index} className="border-t border-gray-700 pt-4">
                    <h4 className="text-[#E5D3C8] text-lg mb-2">{detail.title}</h4>
                    <p className="text-gray-400 mb-2">{detail.description}</p>
                    {detail.source && (
                      <a
                        href={detail.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#E5D3C8] hover:text-white text-sm"
                      >
                        Source: {detail.source.name}
                        <Link size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}