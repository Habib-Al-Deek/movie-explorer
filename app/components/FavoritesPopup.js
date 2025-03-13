import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

function FavoritesPopup({ onClose, onMovieSelect }) {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-20 px-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">My Favorites</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {favorites.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => {
                    onMovieSelect(movie);
                    onClose();
                  }}
                  className="cursor-pointer p-4 rounded-lg shadow-2xl transition-transform hover:scale-105"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-48 object-cover mb-2"
                  />
                  <h3 className="text-lg font-bold">{movie.title}</h3>
                  <p className="text-gray-500">Rating: {movie.vote_average}</p>
                  <p className="text-gray-500">Release: {movie.release_date}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                You have not added any favorites yet
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FavoritesPopup;
