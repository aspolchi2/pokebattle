import React, { createContext, useEffect, useState } from "react";

export const context = createContext();

export const PokeContext = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const maxFetch = fetch(`https://pokeapi.co/api/v2/pokemon/`).then((res) =>
    res.json()
  );
  const random = Math.floor(Math.random() * maxFetch.length);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, [pokemon, random]);

  return (
    <context.Provider value={{ random, pokemon }}>{children}</context.Provider>
  );
};

export default PokeContext;
