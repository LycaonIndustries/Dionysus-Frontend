import React from "react";

// Define the Body component as a functional component with React.FC type
// Accepts children of type React.ReactNode as props
const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Render the main content area with gradient background and responsive padding
  return (
    <main className="mt-16 mb-6 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-slate-900 to-purple-900">
      {/* Render the children passed to the Body component */}
      {children}
    </main>
  );
};

// Export the Body component as the default export
export default Body;
