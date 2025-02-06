import React from 'react';
import { Users, Heart, Route, Building, Link } from 'lucide-react';

export function CommunityResilience() {
  const features = [
    {
      icon: Users,
      title: 'Shared Maintenance',
      description: 'Coordinated system testing and servicing ensure that all community infrastructure functions optimally.',
      details: [
        {
          title: 'Regular Maintenance',
          description: 'Regular maintenance schedules and shared responsibilities among community members can prevent system failures during critical times.',
          source: {
            name: 'NIST',
            url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1190GB-16.pdf'
          }
        },
        {
          title: 'System Testing',
          description: 'Periodic testing of community infrastructure ensures reliability and identifies potential issues before they become critical.'
        }
      ]
    },
    {
      icon: Heart,
      title: 'Emergency Protocols',
      description: 'Clear evacuation and communication plans are essential for effective emergency response.',
      details: [
        {
          title: 'Comprehensive Planning',
          description: 'Establishing well-defined procedures and ensuring all community members are informed can significantly reduce risks during disasters.',
          source: {
            name: 'FEMA',
            url: 'https://www.fema.gov/sites/default/files/2020-07/whole_community_dec2011__2.pdf'
          }
        },
        {
          title: 'Community Training',
          description: 'Regular drills and training sessions ensure that all residents understand and can execute emergency procedures effectively.'
        }
      ]
    },
    {
      icon: Route,
      title: 'Future Development',
      description: 'An aligned vision for community growth ensures that development projects enhance resilience.',
      details: [
        {
          title: 'Sustainable Growth',
          description: 'Collaborative planning allows for sustainable growth while considering potential risks and community needs.',
          source: {
            name: 'SGC',
            url: 'https://sgc.ca.gov/meetings-events/council/2023/04-26/docs/20230426-Item5a_Attachment_A_CRC_Guidelines.pdf'
          }
        },
        {
          title: 'Long-term Planning',
          description: 'Strategic development plans incorporate resilience measures and adapt to changing environmental conditions.'
        }
      ]
    },
    {
      icon: Building,
      title: 'Governance Structure',
      description: 'Organized oversight of shared resources ensures effective and equitable management.',
      details: [
        {
          title: 'Resource Management',
          description: 'Establishing clear governance frameworks allows for efficient decision-making and resource allocation.',
          source: {
            name: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Community_resilience'
          }
        },
        {
          title: 'Community Engagement',
          description: 'Active participation in governance ensures that community needs are met and resources are managed transparently.'
        }
      ]
    }
  ];

  return (
    <section id="community-resilience" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Community Resilience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building a stronger, safer, and more connected community for the future requires coordinated efforts in maintenance, emergency preparedness, development planning, and governance. Through collaborative approaches and shared responsibility, communities can enhance their resilience and adapt to changing conditions.
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