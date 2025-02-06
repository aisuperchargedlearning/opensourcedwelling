import React from 'react';

export function About() {
  return (
    <section id="about" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg text-[#E5D3C8] mb-6">About Us</h2>
            <p className="text-gray-400 mb-6">
              We are committed to excellence in every project we undertake. Our team
              brings years of experience and a passion for innovation to deliver
              outstanding results.
            </p>
            <p className="text-gray-400">
              With a focus on quality and client satisfaction, we've built a
              reputation for delivering projects that exceed expectations and stand
              the test of time.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="About us"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}