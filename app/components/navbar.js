import React from "react";
import { Film, Heart } from "lucide-react";

function navbar() {
  return (
    <div className=" flex justify-between">
      <div className=" flex">
        <Film />
        <p>Movie Explorer</p>
      </div>
      <div>
        <button className=" flex border-2">
          <Heart /> Favorites
        </button>
      </div>
    </div>
  );
}

export default navbar;
