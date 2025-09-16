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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
