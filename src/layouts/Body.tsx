import React from "react";

const Body: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="mt-16 mb-6 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-slate-900 to-purple-900">
      {children}
      <div className="min-h-screen">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos dignissimos doloremque enim necessitatibus accusamus dolorum aperiam, at tempora vel?</p>
      </div>
      <div className="min-h-screen">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat quos dignissimos doloremque enim necessitatibus accusamus dolorum aperiam, at tempora vel?</p>
      </div>
    </main>
  );
};

export default Body;
