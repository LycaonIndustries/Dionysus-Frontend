// Import React library
import React from "react";

// Hero component for displaying a prominent featured section
const Hero: React.FC = () => {
  return (
    <div className="bg-hero-image bg-cover bg-center flex items-center justify-center text-white">
      <div className="text-center">
        <button className="bg-primary-300 text-black rounded-xl">
          Start Watching
        </button>
      </div>
    </div>
  );
};

// Export the Hero component as the default export
export default Hero;
