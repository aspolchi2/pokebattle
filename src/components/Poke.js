import React from "react";
import "../sass/poke.scss";
import { Zoom, Fade,Flip, AttentionSeeker, JackInTheBox, Hinge, Reveal, Slide, Bounce } from "react-awesome-reveal";


const Poke = ({ name, sprites, pokeAttack }) => {

  return (
    <Bounce >
    <div className="pokemon">
      <h1 className="pokemon__name">{name}</h1>
      <img
        className="pokemon__img"
        src={sprites?.front_default}
        alt={name}
      />
      <p className="pokemon__attack">
        Base Attack = {pokeAttack ? pokeAttack : "??"}
      </p>
    </div>
    </Bounce>
  );
};

export default Poke;
