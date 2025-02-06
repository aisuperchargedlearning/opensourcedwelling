import React from 'react';
import { Shield, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/a7tech/Open%20Source%20Dwelling/Fireprotecteddesign%20copy.jpg?updatedAt=1738869355950")'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 z-20">
        <div className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-[#E5D3C8]/10 border border-[#E5D3C8]">
          <Shield className="text-[#E5D3C8]" size={32} />
        </div>

        <h1 className="text-4xl md:text-6xl font-light mb-6 text-white tracking-tight">
          <span className="block">Open Source</span>
          <span className="block text-[#E5D3C8]">Dwelling</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 font-light tracking-wide">
          A Guide for Building Fire-Resilient Communities through Coordinated Recovery and Reconstruction
        </p>

        <p className="text-base text-gray-300 max-w-2xl mb-12 font-light">
          Embracing open-source principles in housing design fosters innovation and accessibility. By sharing blueprints, materials lists, and best practices, communities can collaboratively develop fire-resistant dwellings that are both cost-effective and tailored to local needs.
        </p>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="text-[#E5D3C8] animate-bounce" size={32} />
        </div>
      </div>
    </div>
  );
}