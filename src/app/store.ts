import { configureStore } from '@reduxjs/toolkit';
import offersReducer from './OfferSlice';


export const store = configureStore({
    reducer: {
        offers: offersReducer
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;