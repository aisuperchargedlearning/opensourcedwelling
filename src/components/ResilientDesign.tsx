import React from 'react';
import { Flame, Shield, Droplets, Wind, Link } from 'lucide-react';

export function ResilientDesign() {
  const features = [
    {
      icon: Flame,
      title: 'Fire-Resistant Architecture',
      description: "Implementing fire-resistant architecture entails the deliberate selection of building materials and design elements that minimize a structure's vulnerability to fire.",
      details: [
        {
          title: 'Non-Combustible Materials',
          description: 'Utilizing materials such as concrete, brick, and metal for structural elements significantly reduces the risk of ignition. Modern stucco, composed of Portland cement, sand, and lime, serves as an excellent and durable fire-resistant finish for buildings.',
          source: {
            name: 'HOWSTUFFWORKS',
            url: 'https://home.howstuffworks.com/home-improvement/construction/materials/fire-resistant-building-materials.htm'
          }
        },
        {
          title: 'Fire-Resistant Roofing',
          description: 'Choosing roofing materials with high fire resistance, such as metal or clay tiles, can prevent roof ignition from airborne embers. Simpler roof designs also minimize areas where embers can accumulate.',
          source: {
            name: 'THIS OLD HOUSE',
            url: 'https://www.thisoldhouse.com/roofing/21018219/fire-resistant-roofing-and-siding'
          }
        },
        {
          title: 'Protected Openings',
          description: 'Installing double-pane tempered glass windows and incorporating fire shutters can offer better protection against heat and flames. Ensuring that vents are designed to resist ember entry is also crucial.',
          source: [
            {
              name: 'VULCAN VENTS',
              url: 'https://www.vulcanvents.com/how-do-ember-resistant-vents-work/'
            },
            {
              name: 'SMART WINDOW COMPANY',
              url: 'https://smartwindowcompany.com/fire-preventative-windows-the-benefits-of-tempered-glass/'
            }
          ]
        },
        {
          title: 'Intumescent Coatings',
          description: 'Applying fire-resistant coatings to structural elements can enhance their ability to withstand high temperatures, providing additional time for evacuation and firefighting efforts.',
          source: {
            name: 'FIREFREE',
            url: 'https://www.firefree.com/fire-retardant-fire-resistant-paint-products/ff88-intumescent-coating.php'
          }
        }
      ]
    },
    {
      icon: Shield,
      title: 'Shared Defensive Spaces',
      description: 'Shared defensive spaces, also known as defensible spaces, are collaboratively maintained buffer zones between structures and surrounding vegetation.',
      details: [
        {
          title: 'Vegetation Management',
          description: 'Creating a buffer zone by removing dead plants, dry leaves, and pine needles from yards, gutters, and decks reduces available fuel for fires.',
          source: {
            name: 'KENTFIELD FIRE PROTECTION DISTRICT',
            url: 'https://www.kentfieldfire.org/defensible-space'
          }
        },
        {
          title: 'Zoning',
          description: 'Implementing zones around structures, such as a minimum of 30 feet for firefighters to protect a structure from wildfire, with increased distances on slopes.',
          source: {
            name: 'FIRE SAFE MARIN',
            url: 'https://firesafemarin.org/create-a-fire-smart-yard/'
          }
        },
        {
          title: 'Community Collaboration',
          description: 'Coordinated efforts among neighbors to maintain defensible spaces can create a more effective barrier against wildfires, enhancing the overall resilience of the community.'
        }
      ]
    },
    {
      icon: Droplets,
      title: 'Integrated Drainage',
      description: 'An integrated drainage system is essential for effective water management within a community.',
      details: [
        {
          title: 'Stormwater Management',
          description: 'Implementing swales, retention basins, and permeable surfaces helps manage stormwater runoff, reducing erosion and preventing water accumulation that could hinder firefighting efforts.'
        },
        {
          title: 'Erosion Control',
          description: 'Stabilizing soil through terracing, the use of ground cover, and retaining walls prevents landslides and sediment flow, which can be exacerbated after wildfires due to the loss of vegetation.'
        },
        {
          title: 'Water Reuse Systems',
          description: 'Incorporating gray water recycling systems allows for the reuse of water in landscaping, reducing the demand on potable water sources and maintaining vegetation that can act as a fire buffer.'
        }
      ]
    },
    {
      icon: Wind,
      title: 'Wind Management',
      description: 'Strategic wind management involves optimizing the placement of buildings and landscaping to reduce the risk of fire spread.',
      details: [
        {
          title: 'Building Orientation',
          description: 'Positioning structures to minimize exposure to prevailing winds can reduce the likelihood of wind-driven embers igniting the building.'
        },
        {
          title: 'Windbreaks',
          description: 'Planting rows of trees or constructing barriers perpendicular to prevailing winds can slow wind speeds, reducing the spread of fire and the distance embers can travel.'
        },
        {
          title: 'Spacing and Density',
          description: 'Maintaining adequate spacing between structures and vegetation prevents the rapid transmission of fire facilitated by wind.'
        }
      ]
    }
  ];

  return (
    <section id="resilient-design" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Ultra-Resilient Design</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            When neighbors coordinate building designs, it enhances everyone's safety. Implementing uniform fire-resistant materials, shared defensible spaces, and synchronized maintenance schedules creates a cohesive defense system.
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
                      Array.isArray(detail.source) ? (
                        <div className="space-y-2">
                          {detail.source.map((src, idx) => (
                            <a
                              key={idx}
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[#E5D3C8] hover:text-white text-sm block"
                            >
                              Source: {src.name}
                              <Link size={14} className="ml-1" />
                            </a>
                          ))}
                        </div>
                      ) : (
                        <a
                          href={detail.source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#E5D3C8] hover:text-white text-sm"
                        >
                          Source: {detail.source.name}
                          <Link size={14} className="ml-1" />
                        </a>
                      )
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