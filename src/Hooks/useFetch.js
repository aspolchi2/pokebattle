import { useEffect, useState } from "react";
const POKE_API = "https://pokeapi.co/api/v2/pokemon/";

const useFetch = () => {
  const [poke, setPoke] = useState([]);
  const [random, setRandom] = useState();

  useEffect(() => {
    const fetchFunc = async () => {
      const fetchApi = await fetch(`${POKE_API}${random ? random : 1}`);
      const response = await fetchApi.json();
      setPoke(response);
      
    };
    fetchFunc();
  }, [random]);
  return { poke, setRandom, random };
};
export default useFetch;
