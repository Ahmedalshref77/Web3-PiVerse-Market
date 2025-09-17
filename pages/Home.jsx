import React from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

// قائمة المنتجات
const products = [
  { id: 1, name: "Mobile", price: 10, image: "/images/product1.png" },
  { id: 2, name: "Headphones", price: 5, image: "/images/product2.png" },
  { id: 3, name: "Laptop", price: 20, image: "/images/product3.png" },
  { id: 4, name: "Smartwatch", price: 15, image: "/images/product4.png" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <header className="p-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-cyan-400 drop-shadow-[0_0_10px_cyan]">
          Welcome to Web3 PiVerse Market
        </h1>
        <p className="mt-2 text-gray-300">
          Discover and explore exclusive Pi-based products
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 border-2 border-cyan-400 shadow-cyan-500/50 shadow-lg rounded-lg p-4 hover:scale-105 transition"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </main>
    </div>
  );
}
