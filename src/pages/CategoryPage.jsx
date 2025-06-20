import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/sampleProducts";
import ProductCard from "../components/productCard";

const CategoryPage = () => {
  const { category } = useParams();
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Category: {category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;