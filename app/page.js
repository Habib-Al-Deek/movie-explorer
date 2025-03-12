import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100">
      <Navbar />
      <main className="px-8 py-8 max-lg:px-4">
        <SearchBar />
      </main>
    </div>
  );
}
