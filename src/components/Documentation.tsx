import React from 'react';
import { FileText, Download } from 'lucide-react';

export function Documentation() {
  const documents = [
    {
      title: 'Site Analysis Report',
      description: 'Comprehensive analysis of topography and environmental factors',
      size: '2.4 MB'
    },
    {
      title: 'Master Plan Overview',
      description: 'Detailed planning documentation and specifications',
      size: '3.1 MB'
    },
    {
      title: 'Environmental Impact Study',
      description: 'Assessment of environmental considerations and preservation strategies',
      size: '1.8 MB'
    },
    {
      title: 'Infrastructure Specifications',
      description: 'Technical details of community infrastructure',
      size: '2.2 MB'
    }
  ];

  return (
    <section id="documentation" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Documentation</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Documents we prepare for your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {documents.map((doc) => (
            <div 
              key={doc.title}
              className="bg-black/30 p-6 rounded-lg hover:bg-black/40 transition-colors group"
            >
              <div className="flex justify-between items-start mb-4">
                <FileText className="text-[#E5D3C8]" size={24} />
                <button className="flex items-center space-x-2 text-[#E5D3C8] hover:text-white">
                  <Download size={16} />
                  <span className="text-sm">{doc.size}</span>
                </button>
              </div>
              <h3 className="text-white text-lg mb-2">{doc.title}</h3>
              <p className="text-gray-400">{doc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}