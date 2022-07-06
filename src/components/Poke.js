import React from "react";
import "../sass/poke.scss";

const Poke = ({ name, id, sprites, weight }) => {
  return (
    <div className="pokemon">
      <h1>{name}</h1>
      <img src={sprites ? sprites.front_default : null} />
      <p>{weight}</p>
    </div>
  );
};

export default Poke;
