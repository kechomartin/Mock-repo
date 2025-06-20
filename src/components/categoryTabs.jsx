import React from "react";

const categories = ["Roses", "Tulips", "Bouquets", "Indoor Plants", "Gifts"];

function CategoryTabs() {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat, i) => (
        <button key={i} className="px-4 py-2 bg-pink-200 rounded-full text-sm hover:bg-pink-300">
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
