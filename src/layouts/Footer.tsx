import React from "react";

// Define the Footer component as a functional component with React.FC type
const Footer: React.FC = () => {
  // Render the footer section with background color and centered text
  return (
    <footer className="bg-slate-800 text-opacity-1 bottom-0 left-0 p-4 text-center">
      {/* Display the copyright notice */}
      <p className="text-sm text-gray-500">
        © 2024 Dionysus. All rights reserved.
      </p>
    </footer>
  );
};

// Export the Footer component as the default export
export default Footer;
