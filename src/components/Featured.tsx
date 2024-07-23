import React from "react";

// Define the type for props used in FeaturedList component
interface FeaturedListProps {
  title: string; // Title of the featured list
  items: Array<{ id: number; name: string }>; // List of items with id and name
}

// FeaturedList component to display a list of featured items
const FeaturedList: React.FC<FeaturedListProps> = ({ title, items }) => {
  return (
    <section className="my-8">
      {/* Section title */}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      {/* Container for list items with horizontal scrolling */}
      <div className="flex overflow-x-auto space-x-4">
        {/* Map over items to create a list of featured items */}
        {items.map((item) => (
          <div key={item.id} className="w-32">
            {/* Placeholder for item image or content */}
            <div className="bg-gray-300 h-48 mb-2"></div>
            {/* Item name */}
            <p className="text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Export the FeaturedList component as the default export
export default FeaturedList;
