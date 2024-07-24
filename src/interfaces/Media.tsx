// Interface for defining common properties of media items
export interface Media {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

// Interface for defining properties of a movie, extending Media
export interface Movie extends Media {
  Type: "movie"; // Specific type for movies
}

// Interface for defining properties of a show, extending Media
export interface Show extends Media {
  Type: "series"; // Specific type for shows
  numOfSeasons: number; // Number of seasons in the show
  Seasons: Map<number, Season>; // Map of season numbers to Season objects
}

// Interface for defining properties of a season, extending Media
export interface Season extends Media {
  Type: "season";
  show: string; // Reference by show title to avoid circular dependency
  number: number; // Season number
  numOfEpisodes: number; // Number of episodes in the season
  Episodes: Map<number, Episode>; // Map of episode numbers to Episode objects
}

// Interface for defining properties of an episode, extending Media
export interface Episode extends Media {
  Type: "episode";
  show: string; // Reference by show title to avoid circular dependency
  season: number; // Reference by season number
  number: number; // Episode number
}
