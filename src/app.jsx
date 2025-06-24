// App.jsx
import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CategoryTabs from "./components/categoryTabs";
import ProductCard from "./components/productCard";
import products from "./data/sampleProducts";

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-96 bg-pink-100 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold max-w-lg">
          Delivering Joy, One Bouquet at a Time
        </h1>
        <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
          Shop Now
        </button>
      </div>

      {/* Category Tabs */}
      <section className="px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <CategoryTabs />
      </section>

      {/* Product Grid */}
      <section className="px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
