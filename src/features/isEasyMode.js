import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = true;

export const isEasyModeSlice = createSlice({
    name: 'isEasyMode',
    initialState: {isEasyMode: initialStateValue},
    reducers: {
        setIsEasyMode: (state, action) => {
            state.isEasyMode = action.payload;
        }
    }
})

export const { setIsEasyMode } = isEasyModeSlice.actions;

export default isEasyModeSlice.reducer;