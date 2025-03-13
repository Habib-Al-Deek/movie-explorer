"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import FavoritesPopup from "./components/FavoritesPopup";

export default function Home() {
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <div className="h-full bg-gray-100">
      <Navbar onFavoritesClick={() => setShowFavorites(true)} />
      <main className=" px-8 py-8 max-lg:px-4">
        <SearchBar />
        <MovieList />
      </main>
      {showFavorites && (
        <FavoritesPopup onClose={() => setShowFavorites(false)} />
      )}
    </div>
  );
}
