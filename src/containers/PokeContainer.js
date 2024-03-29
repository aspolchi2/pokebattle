import React, { useContext } from "react";
import Poke from "../components/Poke";
import { PokeContext } from "../context/PokeContext";
import "../sass/pokeContainer.scss";
import Loser from "../components/Loser";
import { Zoom } from "react-awesome-reveal";
import MyButton from "../components/MyButton";
import swordUp from "../img/swordUp.png";
import swordDown from "../img/swordDown.png";

const PokeContainer = () => {
  const {
    lose,
    win,
    record,
    firstPoke,
    secondPoke,
    isLower,
    isHigher,
  } = useContext(PokeContext);
  return (
    <>
      {lose && <Loser />}
      <div className="container">
        <div className="pokeContainer">
          <div className="pokeEach">
            {firstPoke && (
              <Poke
                name={firstPoke.name}
                sprites={firstPoke.sprites}
                pokeAttack={firstPoke.stats[1].base_stat}
              />
            )}
          </div>
          <div className="pokeEach">
            {secondPoke && (
              <Poke
                {...secondPoke}
                pokeAttack={lose && secondPoke.stats[1].base_stat}
              />
            )}
          </div>
          {lose || (
            <div className="buttonsGroup">
              <MyButton onClick={isLower} src={swordDown} />
              <MyButton onClick={isHigher} src={swordUp} />
            </div>
          )}
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
