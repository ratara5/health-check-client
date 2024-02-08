import React from 'react'
import {healthCheckUserRequest, deleteUserRequest} from '../api/users.api'

const UserCard = ({user}) => {

    const handleHealthCheck = async (userId) => {
        try {
            const response = await healthCheckUserRequest(userId);    
            console.log(response);
        } catch (error) {
            console.error(error)
        }      
    }

    const handleDelete = async (userId) => {
        try {
            const response = await deleteUserRequest(userId);    
            console.log(response);
        } catch (error) {
            console.error(error)
        }      
    }

    return (
        <div>
            <button onClick={()=>handleHealthCheck(user.userId)}>IMC & Edad</button>
            <h2>{user.name}</h2>
            <h3>{user.birthDate}</h3>
            <h3>{user.weight}</h3>
            <h3>{user.height}</h3>
            <p>{user.typeId}</p>
            <button onClick={()=>handleDelete(user.userId)}>Borrar</button>
            <button>Editar</button>
        </div>
    )
}

export default UserCard