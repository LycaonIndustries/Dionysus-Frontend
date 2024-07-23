// Import React library
import React from "react";

// Hero component for displaying a prominent featured section
const Hero: React.FC = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center h-64 flex items-center justify-center text-white">
      {/* Centered content within the hero section */}
      <div className="text-center">
        {/* Title of the featured movie */}
        <h2 className="text-4xl font-bold mb-4">Featured Movie Title</h2>
        {/* Button to start watching the featured movie */}
        <button className="bg-brand-light text-black px-4 py-2 rounded">
          Start Watching
        </button>
      </div>
    </div>
  );
};

// Export the Hero component as the default export
export default Hero;
