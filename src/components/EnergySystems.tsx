import React from 'react';
import { Zap, Battery, Activity, Power, Link } from 'lucide-react';

export function EnergySystems() {
  const features = [
    {
      icon: Zap,
      title: 'Micro-Grid Capabilities',
      description: 'Microgrids are localized networks that integrate various energy sources to operate independently or in conjunction with the main grid.',
      details: [
        {
          title: 'BlockEnergy System',
          description: 'Comprises microgrids and nanogrids, enabling off-grid energy service and the ability to share excess energy produced back to the grid, enhancing system reliability.',
          source: {
            name: 'Power Magazine',
            url: 'https://www.powermag.com/power-to-the-people-microgrid-gives-community-control-of-its-energy/'
          }
        },
        {
          title: 'Energy Independence',
          description: 'Provides communities with the flexibility to manage their energy resources effectively, reducing dependence on centralized grids.'
        }
      ]
    },
    {
      icon: Battery,
      title: 'Shared Backup Power',
      description: 'Pooling resources for generators and fuel storage allows communities to maintain power during outages.',
      details: [
        {
          title: 'Resource Optimization',
          description: 'Shared backup power systems distribute the load among multiple users, optimizing resource utilization and reducing individual costs.'
        },
        {
          title: 'Emergency Operations',
          description: 'Ensures that essential services remain operational during emergencies through collaborative power management.'
        }
      ]
    },
    {
      icon: Activity,
      title: 'Load Balancing',
      description: 'Coordinated electricity use across the community enhances efficiency and prevents overloading.',
      details: [
        {
          title: 'Home Energy Management',
          description: 'Cost-effective Home Energy Management (HEM) scheme within a microgrid framework promotes energy usage reduction and utility tariff savings.',
          source: {
            name: 'MDPI',
            url: 'https://www.mdpi.com/1996-1073/14/4/1060'
          }
        },
        {
          title: 'Demand Response',
          description: 'Implementing load management strategies and real-time monitoring helps balance supply and demand effectively.'
        }
      ]
    },
    {
      icon: Power,
      title: 'Power Management',
      description: 'Community-wide monitoring and distribution systems enable effective power management.',
      details: [
        {
          title: 'Commelec Framework',
          description: 'Advanced control strategies offer distributed and real-time control of electrical grids by using explicit setpoints for active/reactive power absorptions/injections.',
          source: {
            name: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Commelec'
          }
        },
        {
          title: 'Real-Time Monitoring',
          description: 'Provides continuous data on energy consumption and generation for optimal system performance and stability.'
        }
      ]
    }
  ];

  return (
    <section id="energy-systems" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Community Energy Systems</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Developing a resilient energy grid is essential for ensuring power availability during critical times, especially in fire-prone areas. Community energy systems focus on localized power generation and distribution, enhancing reliability and sustainability. By decentralizing energy production, these systems reduce dependence on centralized grids and improve resilience against natural disasters.
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