import React from "react";
import { Movie, Show } from "../interfaces/Media";

type Media = Movie | Show;

// Define the MediaCard component
export const MediaCard: React.FC<{ media: Media }> = ({ media }) => {
  const isShow = "numOfSeasons" in media;

  return (
    <div className="flex flex-col bg-gradient-to-t from-background-900 to-background-300 shadow-lg rounded-xl w-56 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="h-80">
        <a href={`/${media.Type}s?id=${media.imdbID}`}>
          <img
            src={media.Poster}
            alt={`${media.Title} Poster`}
            className="h-80 w-56 object-cover rounded-lg  border-none "
          />
        </a>
      </div>
      <div className="text-section text-left p-4">
        <a href={`/${media.Type}s/${media.imdbID}`}>
          <div className="text-md font-bold mb-2 text-primary-300">
            {media.Title}
          </div>
        </a>
        <p className="text-secondary-100 text-sm">
          Year: {media.Year} <br />
          {isShow && `Seasons: ${(media as Show).numOfSeasons}`}
        </p>
      </div>
    </div>
  );
};
