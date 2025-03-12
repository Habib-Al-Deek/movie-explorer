import { Heart, Star } from "lucide-react";
import React from "react";

function MovieCard({ movie, onClick }) {
  return (
    <div
      className=" relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
      onClick={onClick}
    >
      <img
        src="/images/panda.jpg"
        alt="image"
        className="w-full h-96 object-cover cursor-pointer"
      />
      <div className="p-4">
        <h3 className=" text-lg font-semibold mb-2">Kung Fu Panda 4</h3>
        <div className="flex items-center justify-between">
          <div className=" flex items-center">
            <Star className=" h-4 w-4 text-yellow-400 mr-1" />
            <span>10</span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
            <Heart className=" h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
