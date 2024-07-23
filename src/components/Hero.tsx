// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center h-64 flex items-center justify-center text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Featured Movie Title</h2>
        <button className="bg-blue-600 px-4 py-2 rounded">Start Watching</button>
      </div>
    </div>
  );
};

export default Hero;
