import React, { useContext, useState } from "react";
import Poke from "../components/Poke";
import { PokeContext } from "../context/PokeContext";
import useFetch from "../customHooks/useFetch";

const PokeContainer = () => {
  const [number, setNumber] = useState(0);
  const { pokemons } = useFetch(number);

  const handleClick = () => {
    setNumber((curr) => curr + 1);
  };

  return (
    <div>
      <Poke {...pokemons} />
      <button onClick={handleClick}>Update {number}</button>
    </div>
  );
};

export default PokeContainer;
