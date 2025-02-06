import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Open Source Dwelling. Building resilient communities together.</p>
        </div>
      </div>
    </footer>
  );
}