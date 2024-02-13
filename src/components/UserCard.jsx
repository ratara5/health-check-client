import React from 'react'
import {useEffect} from 'react'
import {useUsers} from '../context/UserProvider'
import {useMeasures} from '../context/MeasureProvider'
import {useNavigate} from 'react-router-dom'

const UserCard = ({user}) => {

    const {deleteUser} = useUsers();
    const {loadMeasures} = useMeasures();
    const navigate = useNavigate();


    return (
        <div className='bg-zinc-700 text-white rounded-md p-4'>
            <header className='flex justify-between'>
                <h1 className='text-m font-bold'>{user.name}</h1>
                <p className='text-xs'>{user.typeId}-{user.userId}</p>
            </header>
            <h3>Fecha de nacimiento: {user.birthDate}</h3>
            {/*<h3>Peso: {user.measures[0].weight}kg</h3>
            <h3>Talla: {user.height}cm</h3>*/} {/*Show Averages*/}
            <button 
                className='bg-green-700 px-2 py-1 text-white'
                onClick={()=>loadMeasures(user.typeId, user.userId)}>
                    Ver histórico
                </button>
            <div className='flex gap-x-2'>
                <button 
                className='bg-red-400 px-2 py-1 text-white' 
                onClick={()=>deleteUser(user.typeId, user.userId)}>
                    Borrar
                </button>
                <button 
                className='bg-slate-700 px-2 py-1 text-white'
                onClick={()=>navigate(`/edit/${user.typeId}-${user.userId}`)}>
                    Editar
                </button>
            </div>
        </div>
    )
}

export default UserCard