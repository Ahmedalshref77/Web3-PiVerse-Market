import ProductCard from "../components/ProductCard";

// قائمة منتجات تجريبية
const products = [
  { id: 1, name: "Digital Art NFT", price: 10, image: "/images/product1.png" },
  { id: 2, name: "Exclusive Pi Sticker", price: 5, image: "/images/product2.png" },
  { id: 3, name: "Pi T-Shirt", price: 20, image: "/images/product3.png" },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
