import React from 'react';
import { Mail } from 'lucide-react';

export function MissionContact() {
  return (
    <section id="mission-contact" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Statement */}
          <div className="space-y-6">
            <h2 className="heading-lg text-[#E5D3C8] mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At OpenSourceDwelling, our mission is to empower communities to collaboratively design and build sustainable, resilient, and affordable housing solutions through open-source principles. We aim to harness collective innovation, transparency, and shared knowledge to create dwellings that are adaptable to diverse needs and environments, fostering inclusivity and environmental stewardship.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="heading-lg text-[#E5D3C8] mb-4">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-[#E5D3C8] mt-1" size={24} />
                <div>
                  <h3 className="text-white text-lg mb-1">Email</h3>
                  <a href="mailto:resilientdwelling@gmail.com" className="text-gray-400 hover:text-[#E5D3C8] transition-colors">
                    resilientdwelling@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}