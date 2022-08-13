import React, { useContext } from "react";
import Poke from "../components/Poke";
import { PokeContext } from "../context/PokeContext";
import "../sass/pokeContainer.scss";
import swordUp from "../img/swordUp.png";
import swordDown from "../img/swordDown.png";
import { Zoom } from "react-awesome-reveal";
import Loser from "../components/Loser";
import MyButton from "../components/MyButton";
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
    record,
    isLoading,
    data,
  } = useContext(PokeContext);

  return (
    <>
      {lose && <Loser />}
      <div className="container">
        <div className="pokeContainer">
          <div className="pokeEach">
            <Poke
              name={data.name}
              sprites={data.sprites}
              pokeAttack={pokeAttack}
            />
          </div>
          {/* <div className="pokeEach">
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
            <MyButton onClick={lessAttack} src={swordDown} />
            <MyButton onClick={greaterAttack} src={swordUp} />
          </div> */}
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
