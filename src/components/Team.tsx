import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mailto:john@example.com'
      }
    },
    {
      name: 'Jane Smith',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mailto:jane@example.com'
      }
    },
    {
      name: 'Mike Johnson',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mailto:mike@example.com'
      }
    },
    {
      name: 'Sarah Williams',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'mailto:sarah@example.com'
      }
    }
  ];

  return (
    <section id="team" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet the experts behind our success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div 
              key={member.name}
              className="bg-black/30 rounded-lg overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-white hover:text-[#E5D3C8]">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-[#E5D3C8]">
                      <Twitter size={20} />
                    </a>
                    <a href={member.social.email} className="text-white hover:text-[#E5D3C8]">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}