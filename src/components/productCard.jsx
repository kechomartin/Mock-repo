import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-pink-600 font-bold">${product.price}</p>
      <button className="mt-2 px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
