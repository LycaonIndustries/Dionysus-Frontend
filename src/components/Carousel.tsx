import React from "react";
import { Movie, Show } from "../interfaces/Media";
import { MovieCard, ShowCard } from "./Card";
import { SearchResults } from "../interfaces/General";

// Define the Carousel component
const Carousel: React.FC<{ data: SearchResults }> = ({ data }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2">
      <div className="flex space-x-4">
        {data.Search.map((item) => {
          if (item.Type === "movie") {
            return (
              <div key={item.imdbID} className="inline-block">
                <MovieCard movie={item as Movie} />
              </div>
            );
          } else if (item.Type === "series") {
            return (
              <div key={item.imdbID} className="inline-block">
                <ShowCard show={item as Show} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Carousel;
