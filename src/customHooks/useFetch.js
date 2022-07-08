import { useContext, useEffect, useState } from "react";
import { PokeContext } from "../context/PokeContext";

const POKE_API = "https://pokeapi.co/api/v2/pokemon/";

const useFetch = (number, number2) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon2, setPokemon2] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetch(`${POKE_API}${number}`)
      .then((res) => res.json())
      .then((data) => setPokemons(data))
      .then(setIsloading(false));
  }, [number]);

  useEffect(() => {
    setIsloading(true);
    fetch(`${POKE_API}${number2}`)
      .then((res2) => res2.json())
      .then((data2) => setPokemon2(data2))
      .then(setIsloading(false));
  }, [number2]);

  const pokeAttack = pokemons.stats;
  const pokeAttack2 = pokemon2.stats;
  return { pokemons, pokemon2, pokeAttack, pokeAttack2, isLoading };
};

export default useFetch;
