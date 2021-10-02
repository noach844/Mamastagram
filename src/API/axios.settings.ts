import cookie from 'react-cookies';

export const headers = () => ({
    headers: {
        Authorization: 'Bearer ' + cookie.load('access_token'),
    },
});
