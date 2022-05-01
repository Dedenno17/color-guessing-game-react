import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const showNavbarModalSlice = createSlice({
    name: 'showNavbarModal',
    initialState: {isShowNavbarModal : initialStateValue},
    reducers: {
        setIsShowNavbarModal : (state, action) => {
            state.isShowNavbarModal = action.payload;
        }
    }
})

export const {setIsShowNavbarModal} = showNavbarModalSlice.actions;

export default showNavbarModalSlice.reducer;