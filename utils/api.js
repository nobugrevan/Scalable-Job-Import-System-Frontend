import axios from 'axios'; 

const API = axios.create({
baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export const getImportLogs = () => API.get('/jobs/logs');

export default API;