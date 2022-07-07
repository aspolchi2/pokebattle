import React from "react";
import useFetch from "../customHooks/useFetch";
import "../sass/poke.scss";

const Poke = ({ name, id, sprites, pokeAttack }) => {

  
  return (
    <div className="pokemon">
      <h1>{name}</h1>
      <img src={sprites ? sprites.front_default : null} alt={name}/>
      <p>Base Attack = {pokeAttack ? pokeAttack[1].base_stat : "??"}</p>
    </div>
  );
};

export default Poke;
