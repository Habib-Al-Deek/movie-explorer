"use client";
import { Heart, Star } from "lucide-react";
import React, { useState, useEffect } from "react";

function MovieCard({ movie, onClick }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const [isFavorite, setIsFavorite] = useState(false);

  // Check localStorage for this movie's favorite status (storing full movie objects)
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favorited = favorites.some((fav) => fav.id === movie.id);
    setIsFavorite(favorited);
  }, [movie.id]);

  // Toggle favorite status and update localStorage with the full movie object
  const handleFavoriteToggle = (e) => {
    // Prevent click from triggering the card's onClick
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let updatedFavorites;

    if (isFavorite) {
      // Remove the movie object by filtering out the one with the same id
      updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    } else {
      // Add the entire movie object to favorites
      updatedFavorites = [...favorites, movie];
    }
    // Save the updated favorites list to localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    // Update local state so the UI reflects the change
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-96 object-cover cursor-pointer"
        onClick={onClick}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{movie.vote_average}</span>
          </div>
          <button
            onClick={handleFavoriteToggle}
            className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
