import React, { useState } from 'react';
import { Menu, X, BookOpen, Shield, Flame, Droplets, Zap, Wind, ClipboardCheck, Users } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: BookOpen, label: 'Guide', href: '#guide' },
    { icon: Shield, label: 'Defensive Features', href: '#defensive-features' },
    { icon: Flame, label: 'Fire Resistance', href: '#fire-resistance' },
    { icon: Droplets, label: 'Water Management', href: '#water-management' },
    { icon: Zap, label: 'Energy Systems', href: '#energy-systems' },
    { icon: Wind, label: 'Environmental', href: '#environmental-control' },
    { icon: ClipboardCheck, label: 'Construction', href: '#construction' },
    { icon: Users, label: 'Community', href: '#community-resilience' },
  ];

  return (
    <nav className="fixed w-full bg-[#1A1A1A]/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-[#E5D3C8] font-light text-sm tracking-wider">OPEN SOURCE DWELLING</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-[#E5D3C8] transition-colors flex items-center space-x-2 text-sm tracking-wide"
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#E5D3C8]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1A1A1A]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-[#E5D3C8] block px-3 py-2 rounded-md text-base font-light tracking-wide flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}