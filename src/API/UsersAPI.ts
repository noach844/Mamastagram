import axios from 'axios';
import { headers } from './axios.settings';

export const UsersAPI = {
    profile: (): any =>
        axios.get('http://localhost:5000/api/users/profile', headers()),
};
