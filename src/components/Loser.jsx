import React from "react";
import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import { Zoom } from "react-awesome-reveal";

const Loser = () => {
  const { retry } = useContext(PokeContext);

  return (
    <div className="title">
      <Zoom>
        <h2>You lost</h2>
      </Zoom>
      <button type="submit" onClick={retry}>
        Retry
      </button>
    </div>
  );
};

export default Loser;
