import { configureStore } from '@reduxjs/toolkit';
import offersReducer from './OfferSlice';
import settingReducer from './SettingSlice';


export const store = configureStore({
    reducer: {
        offers: offersReducer,
        setting: settingReducer
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;