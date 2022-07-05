import React, { useEffect, useState } from 'react'
import useFetch from '../Hooks/useFetch'

const Pokemon = ({name, id}) => {
  const {setRandom, random} = useFetch()
  const getNumber = () => {
    setRandom(Math.floor(Math.random() * 1154))
  }

  return (
    <div>
        <h1>{name} {id}</h1>
        <img src={null} />
        <button onClick={() => getNumber()}>{random}</button>
    </div>
  )
}

export default Pokemon