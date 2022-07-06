import { useEffect, useState } from "react";

const POKE_API = "http://pokeapi.co/api/v2/pokemon/";

const useFetch = (number, number2) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon2, setPokemon2] = useState([]);

  useEffect(() => {
    fetch(`${POKE_API}${number || 1}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data));
      console.log(pokemons);
  }, [number]);

  useEffect(() => {
    fetch(`${POKE_API}${number2 || 1}`)
      .then((res2) => res2.json())
      .then((data2) => setPokemon2(data2));
  }, [number2]);

  return { pokemons, pokemon2 };
};

export default useFetch;
