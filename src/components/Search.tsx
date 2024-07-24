import SearchIcon from "@mui/icons-material/Search";
import React from "react";

// SearchBar component for inputting search queries
const SearchBar: React.FC = () => {
  return (
    // <div className="flex-grow flex justify-center mx-4">
    //   <div className="relative w-full max-w-lg">
    //     <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" />
    //     <input
    //       type="text"
    //       placeholder="Search..."
    //       className="w-full px-4 py-2 bg-black text-gray-300 rounded-full pl-10"
    //       />
    //     <div> ABC </div>
    //   </div>
    // </div>

    <div className="flex-grow flex justify-center mx-4">
      <div className="relative w-full max-w-lg">
        <div className="search-container flex items-center bg-black text-gray-300 rounded-full h-12">
          <input
            type="text"
            spellCheck="false"
            id="search_string"
            name="searchString"
            autoComplete="off"
            placeholder="Search..."
            className="search-input flex-grow bg-transparent text-gray-300 placeholder-gray-500 outline-none px-4 py-2"
          />
          <button
            id="clearsearchresults"
            type="button"
            className="text-gray-500 hover:text-gray-400 transition duration-200 mr-2"
            style={{ display: "none" }}
          >
            X
          </button>
          <button
            id="SearchButtonTeacher"
            type="submit"
            className="search-button bg-brand text-white rounded-full items-center hover:bg-brand-dark transition duration-200 mr-1 py-2 px-4"
          >
            <span id="defaultSearchText" className="hidden md:block">
              Go
            </span>
            <span className="md:hidden flex items-center justify-center w-1 h-5  bg-brand text-white">
              <SearchIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Export the SearchBar component as the default export
export default SearchBar;
