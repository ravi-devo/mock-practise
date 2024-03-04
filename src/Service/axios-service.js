import axios from 'axios';

const baseUrl = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
    const response = await axios.get(`${baseUrl}/users`);
    return response;
}