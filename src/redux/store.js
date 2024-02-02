import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from './slices/blogsSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
    reducer: {
        blogs: blogsSlice,
        theme: themeSlice
    }
})