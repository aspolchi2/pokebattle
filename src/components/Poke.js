import React, { useContext } from 'react'
import { PokeContext } from '../context/PokeContext'

const Poke = ({name, id}) => {
    const { nextPoke } = useContext(PokeContext)
  return (
    <div>
    <h1>{name} {id}</h1>
    <button onClick={nextPoke}> next </button>
    </div>
  )
}

export default Poke