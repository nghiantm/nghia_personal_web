import { configureStore } from '@reduxjs/toolkit';
import blogsSlice from './slices/blogsSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
    reducer: {
        blog: blogsSlice,
        theme: themeSlice
    }
})