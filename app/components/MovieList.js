"use client";
import React, { useState } from "react";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";

const movies = [
  {
    id: 1,
    title: "Kung Fu Panda 4",
    imageUrl: "/images/panda.jpg",
    rating: 10,
    releaseDate: "March 6, 2024",
    overview:
      "Po must choose a worthy successor to become the next Dragon Warrior when a mysterious villain emerges with a dangerous weapon that threatens to destroy the world.",
  },
  // ...add more movies as needed
];

function MovieList() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className=" px-12 mt-8 grid grid-cols-4 gap-6 max-lg:px-8 max-md:px-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
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
