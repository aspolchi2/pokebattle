import { createContext, useState } from "react";
import useFetch from "../customHooks/useFetch";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const randomStart = Math.floor(Math.random() * 808);
  const randomStart2 = Math.floor(Math.random() * 808);

  const [number, setNumber] = useState(randomStart);
  const [number2, setNumber2] = useState(randomStart2);
  const { pokemons, pokemon2, pokeAttack, pokeAttack2,isLoading } = useFetch(number, number2);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(0);


  if (number === number2) {
    setNumber2(randomStart);
  }

  const lessAttack = () => {
    if (pokemons.stats[1].base_stat >= pokemon2.stats[1].base_stat) {
      setWin((current) => current + 1);
      setNumber2(Math.floor(Math.random() * 808));
    } else {
      setLose(true);
    }
  };

  const greaterAttack = () => {
    if (pokemon2.stats[1].base_stat >= pokemons.stats[1].base_stat) {
      setWin((current) => current + 1);
      setNumber(number2);
      setNumber2(Math.floor(Math.random() * 808));

    } else {
      setLose(true);
    }
  };

  return (
    <PokeContext.Provider
      value={{
        number,
        number2,
        lessAttack,
        greaterAttack,
        lose,
        win,
        pokemons,
        pokemon2,
        pokeAttack,
        pokeAttack2,
        isLoading
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
