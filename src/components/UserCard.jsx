import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
        <h2>{user.name}</h2>
        <h3>{user.birthDate}</h3>
        <h3>{user.weight}</h3>
        <h3>{user.height}</h3>
        <p>{user.typeId}</p>
        <button>Borrar</button>
        <button>Editar</button>
    </div>
  )
}

export default UserCard