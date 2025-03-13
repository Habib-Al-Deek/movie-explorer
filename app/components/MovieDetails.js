import { ArrowLeft, Heart, Star } from "lucide-react";
import React from "react";

function MovieDetails({ movie, onBack }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="fixed inset-0 z-50 bg-gray-100 flex overflow-y-auto">
      <div className="m-auto w-full  p-4 sm:p-6 md:p-8">
        <div className="bg-white rounded-lg shadow-xl">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <button
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                onClick={onBack}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img
                  src={posterUrl}
                  alt={movie.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {movie.title}
                </h1>
                <div className="flex items-center mb-6">
                  <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="font-semibold">{movie.vote_average}</span>
                  </div>
                  <span className="mx-4 text-gray-400">•</span>
                  <span className="text-gray-600">{movie.release_date}</span>
                </div>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Overview</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {movie.overview}
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Details</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500">Release Date</p>
                        <p className="font-medium">{movie.release_date}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Rating</p>
                        <p className="font-medium">{movie.vote_average}/10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
