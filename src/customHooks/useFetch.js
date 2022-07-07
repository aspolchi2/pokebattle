import { useEffect, useState } from "react";

const POKE_API = "http://pokeapi.co/api/v2/pokemon/";

const useFetch = (number, number2) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon2, setPokemon2] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(`${POKE_API}${number || 1}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .then(setIsLoading(false))
    }, [number]);
    
    useEffect(() => {
      setIsLoading(true)
      fetch(`${POKE_API}${number2 || 1}`)
      .then((res2) => res2.json())
      .then((data2) => setPokemon2(data2))
      .then(setIsLoading(false))
  }, [number2]);

  const pokeAttack = pokemons.stats
  const pokeAttack2 = pokemon2.stats
  return { pokemons, pokemon2, pokeAttack, pokeAttack2, isLoading };
};

export default useFetch;
