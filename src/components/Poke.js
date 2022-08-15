import React, { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import "../sass/poke.scss";
import { Zoom } from "react-awesome-reveal";


const Poke = ({ name, sprites, pokeAttack }) => {
  const { isLoading } = useContext(PokeContext);

  return (
    <Zoom>
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
    </Zoom>
  );
};

export default Poke;
