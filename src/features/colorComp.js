import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = '';

export const colorCompSlice = createSlice({
    name: 'colorComp',
    initialState: {colorComp: initialStateValue},
    reducers: {
        setColorComp: (state, action) => {
            state.colorComp = action.payload;
        }
    }
})

export const {setColorComp} = colorCompSlice.actions;

export default colorCompSlice.reducer;