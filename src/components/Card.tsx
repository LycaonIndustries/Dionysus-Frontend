import React from "react";
import { Movie, Show } from "../interfaces/Media";

// Define the MovieCard component with the Movie interface as a prop
export const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className="rounded flex overflow-hidden shadow-lg bg-brand-dark items-center">
      <img
        className="w-96"
        src={movie.Poster}
        alt={`${movie.Title} Poster`}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.Title}</div>
        <p className="text-gray-700 text-base">Year: {movie.Year}</p>
      </div>
    </div>
  );
};

export const ShowCard: React.FC<{ show: Show }> = ({ show }) => {
  return (
    <div className="show-card border rounded shadow-lg p-4">
      <img src={show.Poster} alt={show.Title} className="w-full h-auto" />
      <div className="mt-2">
        <h2 className="text-xl font-bold">{show.Title}</h2>
        <p className="text-gray-700">Year: {show.Year}</p>
        <p className="text-gray-700">Seasons: {show.numOfSeasons}</p>
      </div>
    </div>
  );
};
