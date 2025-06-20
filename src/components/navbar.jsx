import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-pink-600">🌸 FlowerShop</div>
      <div className="space-x-4">
        <a href="#" className="text-gray-700 hover:text-pink-500">Home</a>
        <a href="#" className="text-gray-700 hover:text-pink-500">Categories</a>
        <a href="#" className="text-gray-700 hover:text-pink-500">Contact</a>
        <button className="px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600">
          Login
        </button>
        <span className="ml-4">🛒(0)</span>
      </div>
    </nav>
  );
}

export default Navbar;
