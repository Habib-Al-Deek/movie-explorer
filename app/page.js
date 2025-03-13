"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import FavoritesPopup from "./components/FavoritesPopup";
import MovieDetails from "./components/MovieDetails";

export default function Home() {
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Disable scrolling on the body when the favorites popup or movie details is open
  useEffect(() => {
    if (showFavorites || selectedMovie) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showFavorites, selectedMovie]);

  return (
    <div className="h-full bg-gray-100">
      <Navbar onFavoritesClick={() => setShowFavorites(true)} />
      <main className="px-8 py-8 max-lg:px-4">
        <SearchBar />
        <MovieList />
      </main>
      {showFavorites && (
        <FavoritesPopup
          onClose={() => setShowFavorites(false)}
          onMovieSelect={(movie) => setSelectedMovie(movie)}
        />
      )}
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onBack={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
