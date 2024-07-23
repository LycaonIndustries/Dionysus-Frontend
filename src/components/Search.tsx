import React from "react";

// SearchBar component for inputting search queries
const SearchBar: React.FC = () => {
  return (
    <div className="my-4">
      {/* Input field for searching with placeholder text */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

// Export the SearchBar component as the default export
export default SearchBar;
