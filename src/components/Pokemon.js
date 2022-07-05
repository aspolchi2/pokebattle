import React from 'react'

const Pokemon = ({name, id}) => {
  return (
    <div>
        <h1>{name} {id}</h1>
        <img src={null} />
    </div>
  )
}

export default Pokemon