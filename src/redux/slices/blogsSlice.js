import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
    name: 'blogSlice',
    initialState: {
        loading: false,
        blogs: [],
        error: null,
        portfolio: ''
    },
    reducers: {
        getBlogsStart(state) {
            state.loading = true;
            state.error = null;
        },
        getBlogsSuccess(state, action) {
            state.loading = false;
            state.blogs = action.payload;
        },
        getBlogsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        getPortfolioStart(state) {
            state.loading = true;
            state.error = null;
        },
        getPortfolioSuccess(state, action) {
            state.loading = false;
            state.portfolio = action.payload;
        },
        getPortfolioFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    }
})

export const { 
    addBlogs, 
    getBlogsStart, 
    getBlogsSuccess, 
    getBlogsFailure,
    getPortfolioStart,
    getPortfolioSuccess,
    getPortfolioFailure,
} = blogsSlice.actions;
export default blogsSlice.reducer;