import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  // State to manage the search input value
  const [searchText, setSearchText] = useState("");

  // Handler to update the search text state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  // Handler to clear the search text
  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <div className="w-full">
      <div className="search-container flex items-center bg-black text-gray-300 rounded-full h-12">
        <input
          type="text"
          spellCheck="false"
          id="search_string"
          name="searchString"
          autoComplete="off"
          placeholder="Search..."
          className="search-input flex-grow bg-transparent text-gray-300 placeholder-gray-500 outline-none px-4 py-2"
          value={searchText}
          onChange={handleInputChange}
        />
        {searchText && (
          <button
            id="clearsearchresults"
            type="button"
            className="bg-transparent border-none p-0 text-white hover:text-brand transition duration-200 mr-2"
            onClick={clearSearch}
          >
            <CloseIcon className="p-0"/>
          </button>
        )}
        <button
          id="SearchButtonTeacher"
          type="submit"
          className="search-button bg-brand-light text-brand-dark rounded-full items-center hover:bg-brand-dark transition duration-200 mr-1 py-2 px-4"
        >
          <span id="defaultSearchText" className="hidden md:block">
            Go
          </span>
          <span className="md:hidden flex items-center justify-center w-1 h-5  bg-transparent text-brand-dark text-white">
            <SearchIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
