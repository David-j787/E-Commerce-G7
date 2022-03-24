import axios from "axios";
const ENDPOINT = '';

export default async function login(user) {
    const response = await axios.post(`${ENDPOINT}/login`, user, {withCredentials: true, credentials: 'include'});
    if(response.data.token) user.rememberMe ? localStorage.setItem('jwt', response.data.token) : sessionStorage.setItem('jwt', response.data.token);  
    return response.data;
}