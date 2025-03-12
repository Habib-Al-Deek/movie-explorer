import React from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  return (
    <div className=" px-12 mt-8 grid grid-cols-4 gap-6 max-lg:px-8 max-md:px-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}

export default MovieList;
