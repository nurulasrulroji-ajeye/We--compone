import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";
import { connection } from "../../config";


export const getService = createAsyncThunk(
    'koscode/getService',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://koscode.herokuapp.com/api/service');
            let messages = 'something went wrong';
            if (response.status != 200) {
                throw new Error(messages);
            }
            const data = response.data.data
            return {
                serviceData: Object.values(data),
            };
        } catch (e: any) {
            console.log('Error', e.response.data);
            return rejectWithValue(e.response.data);
        }
    },
)
