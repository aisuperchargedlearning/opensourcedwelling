import React from 'react';

export function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
      title: 'Project One'
    },
    {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
      title: 'Project Two'
    },
    {
      url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80',
      title: 'Project Three'
    },
    {
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80',
      title: 'Project Four'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-[#E5D3C8] mb-4">Our Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of our recent projects and achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl mb-2">{image.title}</h3>
                  <p className="text-gray-300 text-sm">View Project</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}