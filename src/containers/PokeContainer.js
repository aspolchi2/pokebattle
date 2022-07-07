import React, { useContext } from "react";
import Poke from "../components/Poke";
import { PokeContext } from "../context/PokeContext";
import "../sass/pokeContainer.scss";

const PokeContainer = () => {
  const {
    lessAttack,
    greaterAttack,
    lose,
    win,
    pokemons,
    pokemon2,
    pokeAttack,
    pokeAttack2
  } = useContext(PokeContext);

  if (lose) {
    return (
      <div>
        <h1>perdiste</h1>
        <div className="container">
      <div className="pokeContainer">
        <div className="pokeEach">
          <Poke
            name={pokemons.name}
            sprites={pokemons.sprites}
            pokeAttack={pokeAttack}
          />
        </div>
        <div className="pokeEach">
          <Poke 
             name={pokemon2.name}
            sprites={pokemon2.sprites}
            pokeAttack={pokeAttack2}
          />
        </div>
        <div>
          <p>Consecutive wins : {win}</p>
        </div>
      </div>
    </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="pokeContainer">
        <div className="pokeEach">
          <Poke
            name={pokemons.name}
            sprites={pokemons.sprites}
            pokeAttack={pokeAttack}
          />
        </div>
        <div className="pokeEach">
          <Poke {...pokemon2} />
          <button onClick={lessAttack}>pega menos</button>
          <button onClick={greaterAttack}>pega mas</button>
        </div>
        <div>
          <p>Consecutive wins : {win}</p>
        </div>
      </div>
    </div>
  );
};

export default PokeContainer;
