import { getService } from "./action";
import { dataService } from "../../interfaces";
import { createSlice } from "@reduxjs/toolkit";

export type serviceState = {
    data: any[];
    pending: boolean;
    error: boolean;
}

const initialState: serviceState = {
    data: [],
    pending: false,
    error: false
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getService.pending, (state, action) => {
            state.pending = true
            state.error = false
        }),
            builder.addCase(getService.fulfilled, (state, action) => {
                state.data = action.payload.serviceData
                state.pending = true
                state.error = false
            }),
            builder.addCase(getService.rejected, (state, action) => {
                state.pending = false
                state.error = true
            })
    },
})