// pages/HomePage.tsx
import React from "react";
import FeaturedList from "../components/Featured";
import Hero from "../components/Hero";
import SearchBar from "../components/Search";

const Home: React.FC = () => {
  const recommended = [
    { id: 1, name: "Movie 1" },
    { id: 2, name: "Movie 2" },
    { id: 3, name: "Movie 3" },
  ];

  const trending = [
    { id: 4, name: "Show 1" },
    { id: 5, name: "Show 2" },
    { id: 6, name: "Show 3" },
  ];

  return (
    <div className="container mx-auto px-4 pb-4 mt-4">
      <Hero />
      <SearchBar />
      <FeaturedList title="Recommended for You" items={recommended} />
      <FeaturedList title="Trending Now" items={trending} />
    </div>
  );
};

export default Home;
