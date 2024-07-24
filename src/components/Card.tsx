import React from "react";
import { Movie, Show } from "../interfaces/Media";

type Media = Movie | Show;

// Define the MediaCard component
export const MediaCard: React.FC<{ media: Media }> = ({ media }) => {
  const isShow = "numOfSeasons" in media;

  return (
    <div className="flex flex-col bg-transparent shadow-lg w-56 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="h-80">
        <a href={`/${media.Type}s/${media.imdbID}`}>
          <img
            src={media.Poster}
            alt={`${media.Title} Poster`}
            className="h-80 w-56 object-cover rounded-lg border border-l-brand-light"
          />
        </a>
      </div>
      <div className="text-section text-left p-4">
        <a href={`/${media.Type}s/${media.imdbID}`}>
          <div className="text-md font-bold mb-2 text-brand-light">
            {media.Title}
          </div>
        </a>
        <p className="text-brand text-sm">
          Year: {media.Year} <br />
          {isShow && `Seasons: ${(media as Show).numOfSeasons}`}
        </p>
      </div>
    </div>
  );
};
