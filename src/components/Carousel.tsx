import React from "react";
import { SearchResults } from "../interfaces/General";
import { Movie, Show } from "../interfaces/Media";
import { MediaCard } from "./Card";

// Define the Carousel component
const Carousel: React.FC<{ data: SearchResults }> = ({ data }) => {
  // Extract Results from data
  const results = data.Search;

  return (
    <div className="overflow-x-auto whitespace-nowrap ">
      <div className="flex space-x-6 overflow-y-scroll no-scrollbar">
        {results.map((item) => (
          <div key={item.imdbID} className="inline-block">
            <MediaCard media={item as Movie | Show} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
