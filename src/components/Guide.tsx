import React from 'react';
import { BookOpen, Target, Users, FileText } from 'lucide-react';

export function Guide() {
  const sections = [
    {
      icon: BookOpen,
      title: 'Comprehensive Guide',
      description: 'A roadmap for communities aiming to rebuild with enhanced fire resilience, covering hazard assessment, community planning, building design, and landscaping.'
    },
    {
      icon: Target,
      title: 'Get Started',
      description: 'Initiating the journey toward a fire-resilient community begins with understanding specific risks and resources unique to your area. Follow actionable steps to assess vulnerabilities and develop a tailored action plan.'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Early engagement and thorough planning are crucial to successful resilience-building efforts. Learn how to effectively involve stakeholders and build community support.'
    },
    {
      icon: FileText,
      title: 'Learn More',
      description: 'Access a curated collection of resources, including articles, case studies, and expert interviews, to deepen understanding of fire dynamics, resilient building practices, and community preparedness.'
    }
  ];

  return (
    <section id="guide" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Building Fire-Resilient Communities</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive guide for coordinated recovery and reconstruction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div 
              key={section.title}
              className="bg-black/30 p-8 rounded-lg hover:bg-black/40 transition-colors"
            >
              <section.icon className="text-[#E5D3C8] mb-6" size={32} />
              <h3 className="text-white text-xl mb-4">{section.title}</h3>
              <p className="text-gray-400">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}