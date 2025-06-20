import React from "react";

function Footer() {
  return (
    <footer className="bg-pink-100 text-center text-sm text-gray-700 p-4 mt-10">
      <div>📍 Nairobi, Kenya | 📞 +254 700 000 000 | ✉️ info@flowershop.com</div>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-pink-600">Instagram</a>
        <a href="#" className="hover:text-pink-600">Facebook</a>
        <a href="#" className="hover:text-pink-600">WhatsApp</a>
        <a href="#" className="hover:text-pink-600">Twitter</a>
      </div>
      <div className="mt-2">© 2025 FlowerShop. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
