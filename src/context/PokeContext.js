import { createContext, useEffect, useState } from "react";
import useFetch from "../customHooks/useFetch";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const randomStart = Math.floor(Math.random() * 808);
  const randomStart2 = Math.floor(Math.random() * 808);

  const [number, setNumber] = useState(randomStart);
  const [number2, setNumber2] = useState(randomStart2);
  const { pokemons, pokemon2 } = useFetch(number, number2);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(0);

  let poke1 = { ...pokemons };
  let poke2 = { ...pokemon2 };

  if(number == number2){
    setNumber2(randomStart)
  }

  const lessWeight = () => {
    console.log(poke1);
    if (poke2.weight < poke1.weight) {
      setWin((current) => current + 1);
      setNumber(number2);
      setNumber2(Math.floor(Math.random() * 808));
    } else {
      setLose(true);
      setWin(0);
    }
  };
  const moreWeight = () => {
    if (poke2.weight > poke1.weight) {
      setWin((current) => current + 1);
      setNumber(number2);
      setNumber2(Math.floor(Math.random() * 808));
    } else {
      setLose(true);
      setWin(0);
    }
  };

  return <PokeContext.Provider value={{number, number2, lessWeight, moreWeight, lose, win, pokemons, pokemon2 }}>{children}</PokeContext.Provider>;
};
