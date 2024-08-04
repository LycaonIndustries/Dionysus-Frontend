import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";

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
      <div className="search-container flex items-center bg-background-950 text-primary-50 rounded-full h-12">
        <input
          type="text"
          spellCheck="false"
          id="search_string"
          name="searchString"
          autoComplete="off"
          placeholder="Search..."
          className="search-input flex-grow bg-transparent text-primary-50 placeholder-primary-200 outline-none px-4 py-2"
          value={searchText}
          onChange={handleInputChange}
        />
        {searchText && (
          <button
            id="clearsearchresults"
            type="button"
            className="bg-transparent border-none p-0 text-primary-50 hover:text-brand transition duration-200 mr-2"
            onClick={clearSearch}
          >
            <GrFormClose />
          </button>
        )}
        <button
          id="SearchButtonTeacher"
          type="submit"
          className="search-button bg-primary-300 text-brand-dark rounded-full items-center hover:bg-secondary-300 transition duration-200 mr-1 p-2"
        >
          <span className="flex items-center justify-center bg-transparent text-secondary-900">
            <FaSearch />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
