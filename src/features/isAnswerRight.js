import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const isRightAnswerSlice = createSlice({
  name: "isRightAnswer",
  initialState: { isRightAnswer: initialStateValue },
  reducers: {
    setIsRightAnswer: (state, action) => {
      state.isRightAnswer = action.payload;
    },
  },
});

export const { setIsRightAnswer } = isRightAnswerSlice.actions;

export default isRightAnswerSlice.reducer;
