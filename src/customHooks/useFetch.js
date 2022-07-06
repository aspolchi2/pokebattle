import { useEffect, useState } from "react";

const POKE_API = "http://pokeapi.co/api/v2/pokemon/";

const useFetch = (number) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`${POKE_API}${number || 1}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data));



      
  }, [number]);

  return { pokemons };
};

export default useFetch;
