export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-gradient-to-r from-purple-900 to-blue-800 text-white shadow-lg">
      <div>
        <h1 className="text-2xl font-bold">Web3 PiVerse Market 🌌</h1>
        <p className="text-cyan-200 text-sm mt-1">ماركت Web3 متكامل</p>
      </div>
      <button className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-cyan-500 mt-2 md:mt-0">
        Connect Pi Wallet
      </button>
    </nav>
  );
} 
