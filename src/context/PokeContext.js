import { createContext, useEffect, useState } from "react";

export const PokeContext = createContext();
const POKE_API = "https://pokeapi.co/api/v2/pokemon/";

export const PokeProvider = ({ children }) => {
  const [poke, setPoke] = useState();
  const [randomId, setRandomid] = useState(1);
  const [pokeId, setPokeId] = useState(randomId);

  const nextPoke = () => {
    setRandomid(curr => curr + 1)
  }

  useEffect(() => {
    fetch(`${POKE_API}${pokeId}`)
      .then((res) => res.json())
      .then((data) => setPoke(data));
  }, [randomId]);

  return <PokeContext.Provider value={{poke, nextPoke}}>{children}</PokeContext.Provider>;
};
