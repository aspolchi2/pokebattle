import { createContext, useEffect, useState } from "react";

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {


  return (
    <PokeContext.Provider value={{  }}>
      {children}
    </PokeContext.Provider>
  );
};
