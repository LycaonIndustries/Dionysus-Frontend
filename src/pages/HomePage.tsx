// pages/HomePage.tsx
import React from 'react';
import Header from '../layouts/Header';
import Hero from '../components/Hero';
import FeaturedList from '../components/Featured';
import SearchBar from '../components/Search';
import Footer from '../layouts/Footer';

const HomePage: React.FC = () => {
  const recommended = [
    { id: 1, name: 'Movie 1' },
    { id: 2, name: 'Movie 2' },
    { id: 3, name: 'Movie 3' },
  ];

  const trending = [
    { id: 4, name: 'Show 1' },
    { id: 5, name: 'Show 2' },
    { id: 6, name: 'Show 3' },
  ];

  return (
    <div>
      <Header />
      <Hero />
      <div className="container mx-auto px-4">
        <SearchBar />
        <FeaturedList title="Recommended for You" items={recommended} />
        <FeaturedList title="Trending Now" items={trending} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
