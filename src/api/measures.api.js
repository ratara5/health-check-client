import axios from 'axios'

export const getMeasuresRequest = async (typeId, userId) =>
    await axios.get(`http://localhost:8091/health-check/api/measures/user/${typeId}-${userId}`, typeId, userId);
