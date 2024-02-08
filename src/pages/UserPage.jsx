import React from 'react'
import {useEffect, useState} from 'react'
import {getUsersRequest} from '../api/users.api'
import UserCard from '../components/UserCard';


function UserPage() {

    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        try {
            const response = await getUsersRequest();
            console.log(response.data);
            setUsers(response.data);
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{  
        loadUsers();
    },[])

    function renderMain() {
        if(users.length===0) return <h1>No hay usuarios aún</h1>
        return users.map((user)=><UserCard user={user} key={user.userId}/>);
    }
    

    return (
        <div>
            <h1>Users</h1>
            { renderMain()}

        </div>
    )
}

export default UserPage