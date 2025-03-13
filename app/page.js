"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import FavoritesPopup from "./components/FavoritesPopup";
import MovieDetails from "./components/MovieDetails";
import { fetchMovies, searchMovies } from "./api/movieApi";

export default function Home() {
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Update movies based on the search query
  useEffect(() => {
    async function loadMovies() {
      try {
        if (searchQuery.trim() !== "") {
          const data = await searchMovies(searchQuery);
          setMovies(data.results);
        } else {
          const data = await fetchMovies();
          setMovies(data.results);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    loadMovies();
  }, [searchQuery]);

  // Disable scrolling when modals are open
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
        <SearchBar onSearchChange={setSearchQuery} />
        <MovieList
          movies={movies}
          onSelectMovie={(movie) => setSelectedMovie(movie)}
        />
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
