import React from 'react';
import { Wind, Activity, Shield, Network, Link } from 'lucide-react';

export function EnvironmentalControl() {
  const features = [
    {
      icon: Wind,
      title: 'Air Quality Monitoring',
      description: 'Real-time detection of smoke and pollutants enables communities to respond promptly to deteriorating air conditions.',
      details: [
        {
          title: 'Sensor Network',
          description: 'Establishing a network of air quality sensors provides localized data, facilitating informed decision-making during emergencies.',
          source: {
            name: 'EPA',
            url: 'https://www.epa.gov/amtic/CommunityAirMonitoringWebinars'
          }
        },
        {
          title: 'Data Analysis',
          description: 'Continuous monitoring and analysis of air quality metrics helps identify trends and potential risks before they become critical.'
        }
      ]
    },
    {
      icon: Activity,
      title: 'Smoke Management',
      description: 'Enhanced ventilation and filtration systems are vital for reducing indoor smoke exposure.',
      details: [
        {
          title: 'HEPA Filtration',
          description: 'Utilizing high-efficiency particulate air (HEPA) filters in homes and public buildings can significantly improve indoor air quality during wildfire events.',
          source: {
            name: 'BAAQMD',
            url: 'https://www.baaqmd.gov/about-air-quality/wildfire-air-quality-response-program/clean-air-filtration-program'
          }
        },
        {
          title: 'Ventilation Systems',
          description: 'Advanced ventilation systems with smoke detection and automated responses help maintain safe indoor air quality levels.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Response Protocols',
      description: 'Unified community action plans ensure a coordinated response to air quality emergencies.',
      details: [
        {
          title: 'Emergency Guidelines',
          description: 'Clear guidelines for residents on when to stay indoors, how to create clean air spaces, and proper use of air filtration devices.',
          source: {
            name: 'EPA',
            url: 'https://www.epa.gov/air-research/smoke-ready-toolbox-wildfires'
          }
        },
        {
          title: 'Communication Systems',
          description: 'Robust notification systems keep residents informed about air quality conditions and recommended actions.'
        }
      ]
    },
    {
      icon: Network,
      title: 'Shared Infrastructure',
      description: 'Coordinated filtration and monitoring networks allow communities to pool resources for better air quality management.',
      details: [
        {
          title: 'Clean Air Centers',
          description: 'Establishing clean air centers equipped with advanced filtration systems offers residents safe spaces during periods of heavy smoke.',
          source: {
            name: 'CARB',
            url: 'https://ww2.arb.ca.gov/smokereadyca'
          }
        },
        {
          title: 'Resource Sharing',
          description: 'Community-wide coordination of air quality management resources ensures efficient response during emergencies.'
        }
      ]
    }
  ];

  return (
    <section id="environmental-control" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Environmental Control</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Implementing community-wide systems for maintaining air quality during emergencies is crucial for safeguarding public health in fire-prone areas. By integrating monitoring, filtration, and response protocols, communities can develop resilient environmental control infrastructure that protects residents during wildfire events.
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