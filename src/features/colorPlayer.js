import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = '';

export const colorPlayerSlice = createSlice({
    name: 'colorPlayer',
    initialState: {colorPlayer: initialStateValue},
    reducers: {
        setColorPlayer: (state, action) => {
            state.colorPlayer = action.payload;
        }
    }
})

export const {setColorPlayer} = colorPlayerSlice.actions;

export default colorPlayerSlice.reducer;