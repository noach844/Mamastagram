import { encrypt } from '../Helpers/crypto';
import { AuthAPI } from '../API/AuthAPI';
import cookie from 'react-cookies';
import { useDispatch } from 'react-redux';
import { login, logout } from '../Redux/user';
import { UsersAPI } from '../API/UsersAPI';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

export const useAuth: () => { signIn: Function; signOut: Function } = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const signIn: (username: string, password: string) => void = async (
        username,
        password
    ) => {
        try {
            const res = await AuthAPI.login(username, encrypt(password));
            cookie.save('access_token', res.data.access_token, {
                path: '/',
                expires: new Date(1000 * res.data.exp),
            });
            const profile = (await UsersAPI.profile()).data;
            dispatch(
                login({
                    userId: profile.userId,
                    username: profile.username,
                    email: profile.email,
                })
            );
            history.push('/');
        } catch (e) {
            toast('User is not authorized!', {
                position: 'bottom-right',
                type: 'error',
                theme: 'dark',
            });
        }
    };

    const signOut = () => {
        cookie.remove('access_token');
        dispatch(logout());
        history.push('/sign');
    };

    return { signIn, signOut };
};
