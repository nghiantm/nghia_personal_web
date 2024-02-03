import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        changeTheme(state) {
            const themeToSet = state === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', themeToSet);
            return themeToSet;
        },
        setTheme(state, action) {
            localStorage.setItem('theme', action.payload);
            return action.payload;
        }
    }
})

export const { changeTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;