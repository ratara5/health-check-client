import React from 'react'
import {useEffect} from 'react'
import UserCard from '../components/UserCard';
import { useUsers } from '../context/UserProvider';


function UserPage() {

    const {users, loadUsers} = useUsers();


    useEffect(()=>{  
        loadUsers();
    },[])

    function renderMain() {
        if(users.length===0) return <h1>No hay usuarios aún</h1>
        return users.map((user)=><UserCard user={user} key={user.userId}/>);
    }
    

    return (
        <div>
            <h1 className='text-5xl text-white font-bold text-center'>Users</h1>
            <div className='grid grid-cols-3 gap-2'>
                {renderMain()}
            </div>
        </div>
    )

}

export default UserPage