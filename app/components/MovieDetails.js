import { ArrowLeft, Heart, Star } from "lucide-react";
import React from "react";

function MovieDetails({ movie, onBack }) {
  return (
    <div className="absolute bg-gray-100 flex items-center justify-center top-0 left-0 h-full max-md:h-fit">
      <div className="px-16 py-12 max-md:px-8">
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
                  src="/images/panda.jpg"
                  alt="image"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Kung Fu Panda 4
                </h1>
                <div className="flex items-center mb-6">
                  <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
                    <Star className="h-5 w-5 text-yellow-500 mr-1" />
                    <span className="font-semibold">10</span>
                  </div>
                  <span className="mx-4 text-gray-400">•</span>
                  <span className="text-gray-600">March 6, 2024</span>
                </div>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">Overview</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Po must choose a worthy successor to become the next Dragon
                    Warrior when a mysterious villain emerges with a dangerous
                    weapon that threatens to destroy the world.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Details</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500">Release Date</p>
                        <p className="font-medium">March 6, 2024</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Rating</p>
                        <p className="font-medium">10/10</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of grid columns change */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
