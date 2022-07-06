import React, { useContext, useState } from "react";
import { PokeContext } from "../context/PokeContext";

const Poke = ({ name, id }) => {
  



  return (
    <div>
      <h1>
        {name} {id}
      </h1>
   
    </div>
  );
};

export default Poke;
