import React from 'react'
import {useUsers} from '../context/UserProvider'
import {useNavigate} from 'react-router-dom'

const UserCard = ({user}) => {

    const {deleteUser, checkHealthUser} = useUsers();
    const navigate = useNavigate();

    return (
        <div className='bg-zinc-700 text-white rounded-md p-4'>
            <header className='flex justify-between'>
                <h1 className='text-m font-bold'>{user.name}</h1>
                <p className='text-xs'>{user.typeId}</p>
            </header>
            <button 
            className='bg-blue-500 px-2 py-1 text-black' 
            onClick={()=>checkHealthUser(user.userId)}>
                IMC & Edad
            </button>
            <h3>Fecha de nacimiento: {user.birthDate}</h3>
            <h3>Peso: {user.weight}kg</h3>
            <h3>Talla: {user.height}cm</h3>
            <div className='flex gap-x-2'>
                <button 
                className='bg-red-400 px-2 py-1 text-white' 
                onClick={()=>deleteUser(user.userId)}>
                    Borrar
                </button>
                <button 
                className='bg-slate-700 px-2 py-1 text-white'
                onClick={()=>navigate(`/edit/${user.userId}`)}>
                    Editar
                </button>
            </div>
        </div>
    )
}

export default UserCard