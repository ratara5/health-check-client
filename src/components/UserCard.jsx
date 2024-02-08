import React from 'react'
import {useUsers} from '../context/UserProvider'

const UserCard = ({user}) => {

    const {deleteUser, checkHealthUser} = useUsers();

    return (
        <div>
            <button onClick={()=>checkHealthUser(user.userId)}>IMC & Edad</button>
            <h2>{user.name}</h2>
            <h3>{user.birthDate}</h3>
            <h3>{user.weight}</h3>
            <h3>{user.height}</h3>
            <p>{user.typeId}</p>
            <button onClick={()=>deleteUser(user.userId)}>Borrar</button>
            <button>Editar</button>
        </div>
    )
}

export default UserCard