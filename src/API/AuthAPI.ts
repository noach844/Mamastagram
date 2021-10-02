import axios from 'axios';
import cookie from 'react-cookies';

export const AuthAPI = {
    login: (username: string, password: string): any =>
        axios.post('http://localhost:5000/auth/login', {
            username: username,
            password: password,
        }),
};
