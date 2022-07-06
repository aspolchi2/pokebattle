import React, { useContext, useState } from "react";
import Poke from "../components/Poke";
import { PokeContext } from "../context/PokeContext";
import "../sass/pokeContainer.scss";

const PokeContainer = () => {
const {number, number2,  lessWeight,  moreWeight, lose, win, pokemons, pokemon2} = useContext(PokeContext)

  if (lose) {
    return <div>perdiste</div>;
  }

  return (
    <div className="container">
      <div className="pokeContainer">
        <div className="pokeEach">
          <Poke {...pokemons} />
        </div>
        <div className="pokeEach">
          <Poke name={pokemon2.name} sprites={pokemon2.sprites} />
          <button onClick={lessWeight}>Pesa menos</button>
          <button onClick={moreWeight}>Pesa mas</button>
        </div>
      </div>
    </div>
  );
};

export default PokeContainer;
