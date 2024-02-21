import { changeTheme } from "../slices/themeSlice"

export const toggleTheme = () => async (dispatch) => {
    dispatch(changeTheme());
    const body = document.body;
    body.classList.toggle('light');
    body.classList.toggle('dark');
}