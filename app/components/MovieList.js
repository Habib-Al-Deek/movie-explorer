"use client";
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import { fetchMovies } from "../api/movieApi";

function MovieList() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    loadMovies();
  }, []);

  useEffect(() => {
    if (selectedMovie) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedMovie]);

  return (
    <div className="px-12 mt-8 grid grid-cols-4 gap-6 max-lg:px-8 max-md:px-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => setSelectedMovie(movie)}
        />
      ))}

      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onBack={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}

export default MovieList;
