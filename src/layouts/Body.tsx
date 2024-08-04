import React from "react";

// Define the Body component as a functional component with React.FC type
// Accepts children of type React.ReactNode as props
const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Render the main content area with gradient background and responsive padding
  return (
    <main className="h-full pt-24 min-h-screen w-full min-w-full bg-gradient-to-b from-background-950 from-10% via-primary-900 to-90% to-background-950">
      {/* Render the children passed to the Body component */}
      {children}
    </main>
  );
};

// Export the Body component as the default export
export default Body;
