import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    avatar: '',
    username: undefined,
    email: undefined,
    id: undefined,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInSuccess: (_, action) => action.payload,
        signOut: () => initialState,
    },
});

export const { signInSuccess, signOut } = userSlice.actions;
