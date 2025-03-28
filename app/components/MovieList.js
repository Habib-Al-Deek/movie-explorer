"use client";
import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, onSelectMovie }) {
  return (
    <div className="px-12 mt-8 grid grid-cols-4 gap-6 max-lg:px-8 max-md:px-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => onSelectMovie(movie)}
        />
      ))}
    </div>
  );
}

export default MovieList;
