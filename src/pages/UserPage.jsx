import React from 'react'
import {useState, useEffect} from 'react'
import UserCard from '../components/UserCard';
import { useUsers } from '../context/UserProvider';


function UserPage() {

    const {users, loadUsers} = useUsers();


    const [q, setQ] = useState("");
    const [searchParam] = useState(["typeId", "name", "weight", "height"]); // keys for search in

    useEffect(()=>{  
        loadUsers();
    },[])

    function renderMain() {
        if(users.length===0) return <h1>No hay usuarios aún</h1>
        return search(users).map((user)=><UserCard user={user} key={user.userId}/>); //users as arg in search function
    }
    
    function search(items) {
        return items.filter((item) => {
            return searchParam.some((newItem) => { 
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(q.toLowerCase()) > -1
                );
            });
        });
    }

    return (
        <div className="wrapper">
            <h1 className='text-4xl text-white font-bold text-center'>Users</h1>
            <div className="search-wrapper m-auto gap-x-4 text-center my-2">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input mx-auto px-2  py-1 rounded-sm"
                        placeholder="Buscar por..."
                        value={q}
                        //set our param useState each time user write in input
                        onChange={(e) => setQ(e.target.value)}
                        
                    />
                   
                </label>
                <p className="text-white">...nombre, tipo de Id, peso, talla</p> 
            </div>
            <div>  
                <div className='grid grid-cols-3 gap-2'>
                    {renderMain()}
                </div>
            </div>
        </div>
    )

}

export default UserPage