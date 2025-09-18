import React from "react";                       // استيراد React
import ProductCard from "../components/ProductCard";  // استيراد المكون الخاص بالمنتجات
import "./Home.css";                              // استيراد ملف CSS لتنسيق الصفحة

// قائمة المنتجات
const products = [
  { id: 1, name: "Mobile", price: 10, image: "/images/product1.png" },
  { id: 2, name: "Headphones", price: 5, image: "/images/product2.png" },
  { id: 3, name: "Laptop", price: 20, image: "/images/product3.png" },
  { id: 4, name: "Smartwatch", price: 15, image: "/images/product4.png" },
  { id: 5, name: "Tablet", price: 18, image: "/images/product5.png" },
  { id: 6, name: "Camera", price: 25, image: "/images/product6.png" },
  { id: 7, name: "Speaker", price: 8, image: "/images/product7.png" },
  { id: 8, name: "Mouse", price: 3, image: "/images/product8.png" },
  { id: 9, name: "Keyboard", price: 7, image: "/images/product9.png" },
];

export default function Home() {
  return (
    <div className="home">
      {/* الهيدر */}
      <header className="header">
        <img src="/images/pi-logo.png" alt="Pi Logo" className="logo" />
        <h1 className="project-name">Web3 Pi Verse Marker</h1>
      </header>

      {/* قسم الترحيب */}
      <div className="welcome-section">
        <div className="market-icon">
          {/* أيقونة السوق هنا */}
        </div>
        <h2 className="welcome-text">Welcome</h2>
        <p className="project-text">Web3 Pi Verse Marker</p>
      </div>

      {/* شبكة المنتجات */}
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
