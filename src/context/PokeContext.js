import { createContext, useState } from "react";
import useFetch from "../customHooks/useFetch";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
  const randomStart = Math.floor(Math.random() * 905);
  const randomStart2 = Math.floor(Math.random() * 905);

  const [number, setNumber] = useState(randomStart);
  const [number2, setNumber2] = useState(randomStart2);
  const { pokemons, pokemon2, pokeAttack, pokeAttack2, isLoading, setIsloading } = useFetch(
    number,
    number2
  );
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(0);
  const [record, setRecord] = useState(
    window.localStorage.getItem("record") || win
  );

  if (win > record) {
    setRecord(win);
    window.localStorage.setItem("record", record + 1);
  }

  if (number === number2) {
    setNumber2(randomStart);
  }

  const lessAttack = () => {
    if (pokemons.stats[1].base_stat >= pokemon2.stats[1].base_stat) {
      setIsloading(true)
      setNumber2(Math.floor(Math.random() * 905));
      setWin((current) => current + 1);
     
    } else {
      setLose(true);
    }
  };

  const greaterAttack = () => {
    if (pokemon2.stats[1].base_stat >= pokemons.stats[1].base_stat) {
      setIsloading(true)
      console.log(isLoading)
      setWin((current) => current + 1);
      setNumber(number2);
      setNumber2(Math.floor(Math.random() * 905));
    } else {
      setLose(true);
    }
  };
  const retry = () => {
    setLose(false);
    setNumber(randomStart);
    setNumber2(randomStart2);
    setWin(0);
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
        retry,
        record,
        isLoading
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
