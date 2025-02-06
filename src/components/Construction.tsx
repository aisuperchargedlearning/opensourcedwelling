import React from 'react';
import { Package, Calendar, ClipboardCheck, FileText, Link } from 'lucide-react';

export function Construction() {
  const features = [
    {
      icon: Package,
      title: 'Material Procurement',
      description: 'Coordinated bulk purchasing allows communities to acquire high-quality materials at reduced costs.',
      details: [
        {
          title: 'Supply Chain Management',
          description: 'By consolidating orders, builders can negotiate better prices and ensure the availability of necessary supplies, which is crucial during large-scale rebuilding efforts.',
          source: {
            name: 'WSJ',
            url: 'https://www.wsj.com/business/the-battle-for-recovery-supplies-is-on-in-a-disaster-strewn-america-46d191bf'
          }
        },
        {
          title: 'Quality Assurance',
          description: 'Bulk purchasing enables consistent quality control and standardization of materials across multiple projects.'
        }
      ]
    },
    {
      icon: Calendar,
      title: 'Contractor Scheduling',
      description: 'Synchronized timelines across properties ensure that construction activities are well-coordinated.',
      details: [
        {
          title: 'Resource Optimization',
          description: 'Effective scheduling facilitates the efficient use of labor and equipment, allowing multiple projects to progress smoothly.',
          source: {
            name: 'CMU',
            url: 'https://www.cmu.edu/cee/projects/PMbook/09_Construction_Planning.html'
          }
        },
        {
          title: 'Timeline Management',
          description: 'Project management tools aid in aligning contractor schedules and optimizing workflow across multiple construction sites.'
        }
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Inspection Protocols',
      description: 'Establishing consistent standards for all construction projects is vital for maintaining quality and safety.',
      details: [
        {
          title: 'Quality Control Plan',
          description: 'Implementing a comprehensive quality control plan that includes regular inspections and adherence to established protocols ensures that rebuilding efforts meet the required specifications.',
          source: {
            name: 'FTQ360',
            url: 'https://blog.ftq360.com/blog/the-5-step-construction-quality-control-process'
          }
        },
        {
          title: 'Issue Resolution',
          description: 'Regular inspections help identify and rectify issues promptly, reducing the likelihood of defects and ensuring consistent quality.'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Maintaining comprehensive records of all systems and construction activities is crucial for accountability.',
      details: [
        {
          title: 'Digital Documentation',
          description: 'Utilizing digital tools can streamline the documentation process and ensure records are easily accessible for future reference and maintenance.',
          source: {
            name: 'Procore',
            url: 'https://www.procore.com/library/construction-quality-control'
          }
        },
        {
          title: 'Compliance Records',
          description: 'Detailed documentation facilitates transparency, aids in compliance with regulations, and provides valuable information for maintenance and potential future improvements.'
        }
      ]
    }
  ];

  return (
    <section id="construction" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Construction & Quality Control</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Implementing coordinated construction processes is essential for efficient and consistent rebuilding in fire-prone areas. By integrating procurement, scheduling, inspection, and documentation systems, communities can establish a robust framework that supports quality rebuilding efforts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-black/30 p-8 rounded-lg hover:bg-black/40 transition-colors"
            >
              <div className="flex items-center mb-6">
                <feature.icon className="text-[#E5D3C8] mr-4" size={32} />
                <h3 className="text-white text-xl">{feature.title}</h3>
              </div>
              <p className="text-gray-400 mb-6">{feature.description}</p>
              
              <div className="space-y-6">
                {feature.details.map((detail, index) => (
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