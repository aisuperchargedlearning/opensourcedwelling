import React from 'react';
import { Shield, Layers, Wind, Network, Link } from 'lucide-react';

export function FireResistance() {
  const sections = [
    {
      icon: Shield,
      title: 'Fire-Resistant Construction',
      description: 'Collaborating on fire-resistant construction details ensures maximum safety standards.',
      details: [
        {
          title: 'Insulating Concrete Forms (ICFs)',
          description: 'Utilizing ICFs for building foundations enhances fire resistance, as they can withstand fire exposure for up to four hours.',
          source: {
            name: 'BuildWithStrength',
            url: 'https://buildwithstrength.com/icf/'
          }
        },
        {
          title: 'Fire-Resistant Roofing',
          description: 'Selecting materials such as metal or clay tiles for roofing provides superior fire resistance. Simpler roof designs minimize areas where embers can accumulate, reducing ignition risks.',
          source: {
            name: 'NFPA',
            url: 'https://www.nfpa.org/Public-Education/Fire-causes-and-risks/Wildfire/Firewise-USA/Firewise-USA-Resources/Research-Fact-Sheet-Series'
          }
        },
        {
          title: 'Sturdy Siding',
          description: 'Employing non-combustible siding materials, including fiber-cement panels, stucco, masonry, and metal, enhances the building envelope\'s fire resistance.',
          source: {
            name: 'FEMA',
            url: 'https://www.fema.gov/sites/default/files/2020-11/fema_p-737_home-builders-guide_2008.pdf'
          }
        }
      ]
    },
    {
      icon: Layers,
      title: 'Non-Combustible Materials',
      description: 'Consistent use of fire-resistant materials throughout the community minimizes fire spread.',
      details: [
        {
          title: 'Concrete and Masonry',
          description: 'These materials are non-combustible and have low thermal conductivity, meaning that it takes a long time for fire to affect their structural, load-bearing ability, and they protect from the spread of fire.',
          source: {
            name: 'PCA',
            url: 'https://www.cement.org/learn/buildings-structures/concrete-homes/fire-resistance'
          }
        },
        {
          title: 'Metal Components',
          description: 'Steel and aluminum are non-combustible materials commonly used in construction. They do not ignite or burn when subjected to fire or heat.',
          source: {
            name: 'AISC',
            url: 'https://www.aisc.org/why-steel/fire-protection/'
          }
        },
        {
          title: 'Fiber Cement Boards',
          description: 'Composed of cement reinforced with cellulose fibers, these boards are non-combustible and offer excellent fire resistance, making them suitable for siding and roofing.',
          source: {
            name: 'James Hardie',
            url: 'https://www.jameshardie.com/why-hardie/fire-resistance'
          }
        }
      ]
    },
    {
      icon: Wind,
      title: 'Ember Protection',
      description: 'Integrated defenses against wind-blown embers are vital.',
      details: [
        {
          title: 'Ember-Resistant Vents',
          description: 'Installing vents designed to resist ember entry prevents embers from infiltrating attics and crawl spaces.',
          source: {
            name: 'Cal Fire',
            url: 'https://www.readyforwildfire.org/prepare-for-wildfire/get-ready/hardening-your-home/'
          }
        },
        {
          title: 'Gap Sealing',
          description: 'Ensuring that all gaps, cracks, and openings in the building envelope are properly sealed prevents ember intrusion.',
          source: {
            name: 'IBHS',
            url: 'https://ibhs.org/wildfire/building-vulnerability/'
          }
        },
        {
          title: 'Regular Maintenance',
          description: 'Removing combustible debris such as leaves and pine needles from roofs, gutters, and around the building reduces fuel sources for embers.',
          source: {
            name: 'NFPA',
            url: 'https://www.nfpa.org/Public-Education/Fire-causes-and-risks/Wildfire/Preparing-homes-for-wildfire'
          }
        }
      ]
    },
    {
      icon: Network,
      title: 'Infrastructure Integration',
      description: 'Shared utility conduits and communication systems enhance resilience.',
      details: [
        {
          title: 'Underground Utilities',
          description: 'Burying power lines reduces exposure to fire, thereby minimizing ignition risks and improving system reliability during severe weather events.',
          source: {
            name: 'SCE',
            url: 'https://www.sce.com/about-us/reliability/upgrading-transmission/undergrounding'
          }
        },
        {
          title: 'Communication Networks',
          description: 'Integrating communication networks ensures efficient dissemination of emergency information, facilitating coordinated responses during wildfires.',
          source: {
            name: 'FEMA',
            url: 'https://www.fema.gov/emergency-managers/practitioners/integrated-public-alert-warning-system'
          }
        },
        {
          title: 'Shared Resources',
          description: 'Developing shared infrastructure such as community water reserves and emergency shelters enhances collective resilience.',
          source: {
            name: 'Ready.gov',
            url: 'https://www.ready.gov/community-preparedness-toolkit'
          }
        }
      ]
    }
  ];

  return (
    <section id="fire-resistance" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Fire-Resistant Construction</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Collaborating on fire-resistant construction details ensures maximum safety standards through comprehensive material selection and implementation.
          </p>
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