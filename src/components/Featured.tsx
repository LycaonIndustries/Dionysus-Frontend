// Import necessary React components and interfaces
import React from "react";
import { SearchResults } from "../interfaces/General";
import Carousel from "./Carousel";

// Define the type for props used in FeaturedList component
interface FeaturedListProps {
  title: string; // Title of the featured list
  searchResults: SearchResults; // Search results containing movies and shows
}

// FeaturedList component to display a list of featured items
const FeaturedList: React.FC<FeaturedListProps> = ({
  title,
  searchResults,
}) => {
  return (
    <section className="w-full">
      {/* Section title */}
      <h3 className="text-2xl pl-5 font-bold my-4 text-primary-100">{title}</h3>

      {/* Render the Carousel with search results */}
      <Carousel data={searchResults} />
    </section>
  );
};

// Export the FeaturedList component as the default export
export default FeaturedList;
