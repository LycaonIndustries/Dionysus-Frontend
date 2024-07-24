// Import React library for creating components
import React from "react";

// Import components used on the Home page
import FeaturedList from "../components/Featured";
import Hero from "../components/Hero";

// Define the Home component as a functional component with React.FC type
const Home: React.FC = () => {
  // Array of recommended movies
  const recommended = [
    { id: 1, name: "Movie 1" },
    { id: 2, name: "Movie 2" },
    { id: 3, name: "Movie 3" },
  ];

  // Array of trending shows
  const trending = [
    { id: 4, name: "Show 1" },
    { id: 5, name: "Show 2" },
    { id: 6, name: "Show 3" },
  ];

  // Render the Home page
  return (
    // Container for the page with responsive padding and margin
    <div className="container mx-auto px-4 pb-4 mt-4">
      {/* Render the Hero component */}
      <Hero />
      {/* Render the FeaturedList component for recommended items */}
      <FeaturedList title="Recommended for You" items={recommended} />
      {/* Render the FeaturedList component for trending items */}
      <FeaturedList title="Trending Now" items={trending} />
    </div>
  );
};

// Export the Home component as the default export
export default Home;
