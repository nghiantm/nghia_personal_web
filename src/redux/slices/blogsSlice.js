import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
    name: 'blogs',
    initialState: [],
    reducers: {
        addBlogs(state, action) {
            state.push({
                id: action.payload.id
            })
        }
    }
})

export const { addBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;