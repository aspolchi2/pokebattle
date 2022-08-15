import { createContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export const PokeContext = createContext();
const POKE_API = "https://pokeapi.co/api/v2/pokemon/";
const randomNumber = Math.floor(Math.random() * 908);

export const PokeProvider = ({ children }) => {
  const [firstRandom, setFirstRandom] = useState(
    Math.floor(Math.random() * 908)
  );

  const [firstPoke, setFirstPoke] = useState();
  const [secondPoke, setSecondPoke] = useState();
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(0);
  const [record, setRecord] = useState(
    window.localStorage.getItem("record") || win
  );

  if (win > record) {
    setRecord(win);
    window.localStorage.setItem("record", record + 1);
  }
  async function getPokes({ queryKey }) {
    const response = await fetch(`${POKE_API}${queryKey[1]}`);
    return response.json();
  }

  const { data, isLoading } = useQuery(["pokemon", firstRandom], getPokes);

  useEffect(() => {
    function catchFirstPoke() {
      fetch(`${POKE_API}${randomNumber}`)
        .then((res) => res.json())
        .then((data) => setFirstPoke(data));
    }
    catchFirstPoke();
  }, []);

  useEffect(() => {
    setSecondPoke(data);
    // setBaseStatSecondPoke(firstPoke?.stats[1].base_stat)
  }, [data]);

  const setRandom = () => {
    setFirstRandom(Math.floor(Math.random() * 908));
  };

  const isLower = () => {
    if (firstPoke?.stats[1].base_stat >= secondPoke?.stats[1].base_stat) {
      setFirstRandom(Math.floor(Math.random() * 908));
      setFirstPoke(secondPoke);
      setWin((prev) => prev + 1);
    } else {
      setLose(true);
    }
  };
  const isHigher = () => {
    if (firstPoke?.stats[1].base_stat <= secondPoke?.stats[1].base_stat) {
      setFirstRandom(Math.floor(Math.random() * 908));
      setFirstPoke(secondPoke);
      setWin((prev) => prev + 1);
    } else {
      setLose(true);
    }
  };

  const retry = () => {
    setLose(false);
    setWin(0);
    setFirstRandom(Math.floor(Math.random() * 908));
    setFirstPoke(secondPoke);
  };

  return (
    <PokeContext.Provider
      value={{
        lose,
        win,
        record,
        isLoading,
        data,
        firstPoke,
        secondPoke,
        setRandom,
        isLower,
        isHigher,
        retry,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
