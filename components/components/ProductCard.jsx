export default function ProductCard({ product }) {
  return (
    <div className="bg-gradient-to-r from-purple-700 to-blue-500 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform">
      <img src={product.image} alt={product.name} className="rounded-xl w-full h-40 object-cover" />
      <h3 className="text-white font-bold mt-4 text-lg">{product.name}</h3>
      <p className="text-cyan-200 mt-2">Price: {product.price} Pi</p>
      <button className="mt-4 bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500">
        Buy Now
      </button>
    </div>
  );
}
