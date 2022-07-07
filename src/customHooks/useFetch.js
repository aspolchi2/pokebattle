import { useEffect, useState } from "react";

const POKE_API = "https://pokeapi.co/api/v2/pokemon/";

const useFetch = (number, number2) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon2, setPokemon2] = useState([]);

  useEffect(() => {
    fetch(`${POKE_API}${number || 1}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data))
    }, [number]);
    
    useEffect(() => {
      fetch(`${POKE_API}${number2 || 1}`) 
      .then((res2) => res2.json())
      .then((data2) => setPokemon2(data2))
  }, [number2]);

  const pokeAttack = pokemons.stats
  const pokeAttack2 = pokemon2.stats
  return { pokemons, pokemon2, pokeAttack, pokeAttack2 };
};

export default useFetch;
