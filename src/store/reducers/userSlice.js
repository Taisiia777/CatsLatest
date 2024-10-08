import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    coins: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        setCoins(state, action) {
            state.coins = action.payload;
        },
        updateUser(state, action) {
            state.user = { ...state.user, ...action.payload };
        },
        clearUser(state) {
            state.user = null;
        }
    },
});

export const { setUser, updateUser, clearUser, setCoins } = userSlice.actions;

export default userSlice.reducer;
