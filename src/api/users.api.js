import axios from 'axios'

export const getUsersRequest = async () => 
    await axios.get("http://localhost:8091/health-check/api/users/all");

export const createUserRequest = async (user) =>
    await axios.post('http://localhost:8091/health-check/api/users/save', user);