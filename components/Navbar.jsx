export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-900 to-blue-800 text-white shadow-lg">
      <h1 className="text-2xl font-bold">Web3 PiVerse Market 🌌</h1>
      <button className="bg-cyan-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-cyan-500">
        Connect Pi Wallet
      </button>
    </nav>
  );
}
