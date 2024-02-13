import axios from 'axios'

export const getUsersRequest = async () => 
    await axios.get("http://localhost:8091/health-check/api/users/all");

export const createUserRequest = async (user) =>
    await axios.post('http://localhost:8091/health-check/api/users/save', user);


export const deleteUserRequest = async (typeId, userId) => 
    await axios.delete(`http://localhost:8091/health-check/api/users/delete/${typeId}-${userId}`);

export const healthCheckUserRequest = async (userId) => 
    await axios.get(`http://localhost:8091/health-check/api/users/${userId}`);

export const getUserRequest = async (typeId, userId) => 
    await axios.get(`http://localhost:8091/health-check/api/users/${typeId}-${userId}`);    

export const updateUserRequest = async (typeId, userId, newFields) => 
    await axios.put(`http://localhost:8091/health-check/api/users/update/${typeId}-${userId}`, newFields);

    