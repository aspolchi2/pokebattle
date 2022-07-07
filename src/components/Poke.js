import React from "react";
import useFetch from "../customHooks/useFetch";
import "../sass/poke.scss";

const Poke = ({ name, id, sprites, pokeAttack }) => {

  
  return (
    <div className="pokemon">
      <h1 className="pokemon__name">{name}</h1>
      <img className="pokemon__img" src={sprites ? sprites.front_default : null} alt={name}/>
      <p className="pokemon__attack">Base Attack = {pokeAttack ? pokeAttack[1].base_stat : "??"}</p>
    </div>
  );
};

export default Poke;
