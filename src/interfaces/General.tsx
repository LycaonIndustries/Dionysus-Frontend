import { Movie, Show } from "./Media";

// Interface for defining properties of navigation buttons
export interface NavButton {
  label: string; // Button label
  path: string; // Navigation path
  icon?: React.ReactNode; // Optional icon for the button
}

// Define the SearchResults interface to match the input data format
export interface SearchResults {
  Search: (Movie | Show)[]; // Array containing both Movie and Show objects
  totalResults: string; // Total number of results as a string
  Response: string; // Response status as a string
}