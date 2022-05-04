import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const loadingSlice = createSlice({
  name: "isLoading",
  initialState: { isLoading: initialStateValue },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
