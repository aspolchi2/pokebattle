import React, { useContext } from "react";
import Poke from "../components/Poke";
import { PokeContext } from "../context/PokeContext";
import "../sass/pokeContainer.scss";
import swordUp from "../img/swordUp.png";
import swordDown from "../img/swordDown.png";
import { Button } from "@mui/material";
import { Zoom } from "react-awesome-reveal";
const PokeContainer = () => {
  const {
    lessAttack,
    greaterAttack,
    lose,
    win,
    pokemons,
    pokemon2,
    pokeAttack,
    pokeAttack2,
    retry,
    record,
    isLoading,
  } = useContext(PokeContext);

  return (
    <>
      <div className="title">
        {lose && (
          <>
            <Zoom>
              <h2>You lost</h2>
            </Zoom>
            <button type="submit" onClick={retry}>
              Retry
            </button>
          </>
        )}
      </div>
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
            {lose ? (
              <Zoom>
                <Poke {...pokemon2} pokeAttack={pokeAttack2} />
              </Zoom>
            ) : (
              <Zoom>
                <Poke {...pokemon2} isLoading={isLoading} />
              </Zoom>
            )}
          </div>
          <div className="buttonsGroup">
            <Button variant="text" onClick={lessAttack}>
              <img src={swordDown} alt="Down" />
            </Button>
            <Button variant="text" onClick={greaterAttack}>
              <img src={swordUp} alt="up" />
            </Button>
          </div>
        </div>
        <div className="win">
          <p>Consecutive wins : {win}</p>
          <p>Best : {record}</p>
        </div>
      </div>
    </>
  );
};

export default PokeContainer;
