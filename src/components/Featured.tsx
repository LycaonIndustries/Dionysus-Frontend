// components/FeaturedList.tsx
import React from 'react';

interface FeaturedListProps {
  title: string;
  items: Array<{ id: number; name: string; }>;
}

const FeaturedList: React.FC<FeaturedListProps> = ({ title, items }) => {
  return (
    <section className="my-8">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex overflow-x-auto space-x-4">
        {items.map(item => (
          <div key={item.id} className="w-32">
            <div className="bg-gray-300 h-48 mb-2"></div>
            <p className="text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedList;
