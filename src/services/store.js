import { configureStore } from '@reduxjs/toolkit';
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

export const store = configureStore({
    reducer: {},
    middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat()

});