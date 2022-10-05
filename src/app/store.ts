import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import { serviceSlice } from "../features/services/slice";

export const store = configureStore({
    reducer: {
        service: serviceSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;