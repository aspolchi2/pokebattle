import React, { useContext } from "react";
import Poke from "../components/Poke";
import { PokeContext } from "../context/PokeContext";

const PokeContainer = () => {
  const { poke } = useContext(PokeContext);

  return <Poke {...poke} />;
};

export default PokeContainer;
