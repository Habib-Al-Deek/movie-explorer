import React from "react";
import { Film, Heart } from "lucide-react";

function navbar() {
  return (
    <header className=" bg-white shadow">
      <div className=" flex justify-between px-24 py-6 max-lg:15 max-md:px-12 max-sm:px-4">
        <div className=" flex items-center">
          <Film className=" h-8 w-8 text-blue-500 mr-4 max-sm:mr-2" />
          <h1 className=" text-3xl font-bold text-gray-900 max-sm:text-xl">
            Movie Explorer
          </h1>
        </div>
        <button className=" flex items-center px-4 py-2 rounded-lg bg-gray-200 text-gray-700">
          <Heart className=" h-5 w-5 mr-2" /> Favorites
        </button>
      </div>
    </header>
  );
}

export default navbar;
