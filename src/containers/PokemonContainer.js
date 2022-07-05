import React, { useContext, useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";
import { context } from "../context/PokeContext";

const PokemonContainer =  () => {
  const {pokemon} = useContext(context)
  return <Pokemon {...pokemon} />;
};

export default PokemonContainer;
