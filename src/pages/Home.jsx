import React from "react";
import ProductCard from "../components/croductCard";
import products from "../data/sampleProducts";
import CategoryTabs from "../components/categoryTabs";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Featured Flowers</h1>
      <CategoryTabs />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;