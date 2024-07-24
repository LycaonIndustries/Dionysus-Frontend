import React, { useEffect, useState } from "react";
import FeaturedList from "../components/Featured";
import Hero from "../components/Hero";
import { SearchResults } from "../interfaces/General";
import localData from "../data/demo.json"; // Adjust the path to your local JSON file

const fetchSearchResults = async (): Promise<SearchResults> => {
  try {
    const response = await fetch("/api/fetch/");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "Error fetching search results, falling back to local data:",
      error
    );
    // Fallback to local JSON data
    return localData as SearchResults;
  }
};

const Home: React.FC = () => {
  const [searchResults, setSearchResults] = useState<SearchResults | null>(
    null
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const results = await fetchSearchResults();
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="pb-4 px-4 ">
      <Hero />
      {searchResults && (
        <FeaturedList
          title="X-Men Universe"
          searchResults={searchResults}
        />
      )}
    </div>
  );
};

export default Home;
