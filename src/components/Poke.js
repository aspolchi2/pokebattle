import React from "react";
import "../sass/poke.scss";
import { Zoom } from "react-awesome-reveal";


const Poke = ({ name, sprites, pokeAttack }) => {

  return (
    <Zoom>
    <div className="pokemon">
      <h1 className="pokemon__name">{name}</h1>
      <img
        className="pokemon__img"
        src={sprites?.front_default}
        alt={name}
      />
      <p className="pokemon__attack">
        Base Attack = {pokeAttack ? pokeAttack : "??"}
      </p>
    </div>
    </Zoom>
  );
};

export default Poke;
