import React, { useContext, useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";
import useFetch from "../Hooks/useFetch";

const PokemonContainer = () => {
  const { poke } = useFetch();

  console.log(poke);

  return <Pokemon {...poke} />;
};

export default PokemonContainer;
