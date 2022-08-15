import React, { useEffect } from "react";
import "../sass/poke.scss";

const Poke = ({ name, sprites, pokeAttack }) => { 

  return (
    <div className="pokemon">
      <h1 className="pokemon__name">{name}</h1>
      <img
        className="pokemon__img"
        src={sprites ? sprites.front_default : null}
        alt={name}
      />
      <p className="pokemon__attack">
        Base Attack = {pokeAttack ? pokeAttack : "??"}
      </p>
    </div>
  );
};

export default Poke;
