import {useContext, useState} from 'react'
import {UserContext} from './UserContext'
import {getUsersRequest, 
    createUserRequest, 
    deleteUserRequest, 
    healthCheckUserRequest,
    getUserRequest,
    updateUserRequest} from '../api/users.api'



export const useUsers = () => {
    const context = useContext(UserContext);
    if(context===undefined){
        throw new Error('useUsers must be used with a UserContextProvider');
    }
    return context;
}

export const UserContextProvider = ({children}) => {

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

    const createUser = async (user) => {
        try {
            const response = await createUserRequest(user)
            //setUsers([...users, response.data])
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = async (typeId, userId) => {
        try {
            const response = await deleteUserRequest(typeId, userId);    
            setUsers(users.filter(user => user.userId !== userId && user.typeId !== typeId))
        } catch (error) {
            console.error(error)
        }      
    }

    const checkHealthUser = async (userId) => {
        try {
            const response = await healthCheckUserRequest(userId);   
            alert("IMC: " + response.data.imc + "\nEDAD: " + response.data.currentAge) 
            console.log(response.data);
        } catch (error) {
            console.error(error)
        }      
    }

    const loadUser = async (typeId, userId) => {
        try {
            const response = await getUserRequest(typeId, userId);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }

    const updateUser = async (typeId, userId, newFields) => {
        try {
            const response = await updateUserRequest(typeId, userId, newFields);
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <UserContext.Provider 
        value={{users, loadUsers, createUser, deleteUser, checkHealthUser, loadUser, updateUser}}>
            {children}
        </UserContext.Provider>
    );

};