import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

export default function Home() {
  return (
    <div className="h-full bg-gray-100">
      <Navbar />
      <main className=" px-8 py-8 max-lg:px-4">
        <SearchBar />
        <MovieList />
      </main>
    </div>
  );
}
