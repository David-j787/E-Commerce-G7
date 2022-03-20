import axios from "axios";
const ENDPOINT = 'http://localhost:3001';

export default async function login(user) {
    const response = await axios.post(`${ENDPOINT}/login`, user, {withCredentials: true, credentials: 'include'});
    if(response.data.token) localStorage.setItem('jwt', response.data.token);
    return response.data;
}