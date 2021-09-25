import { createSlice } from '@reduxjs/toolkit';
import { userInterface } from '../Interfaces/userInterface';

interface LoginAction {
    payload: userInterface;
    type: string;
}

interface UserState {
    value: userInterface;
}

const initialState: UserState = { value: { name: '', age: 0, email: '' } };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state: UserState, action: LoginAction) => {
            state.value = action.payload;
        },
        logout: (state: UserState) => {
            state.value = initialState.value;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
