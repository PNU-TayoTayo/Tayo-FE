import axios from 'axios';

const customAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 10000, // ms 단위
    headers: {
        'Content-Type': 'application/json',
    },
});

export default customAxios;