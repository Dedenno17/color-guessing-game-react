import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;

export const chanceSlice = createSlice({
  name: "chance",
  initialState: { chance: initialStateValue },
  reducers: {
    incrementChance: (state) => {
      state.chance += 1;
    },

    resetChance: (state) => {
      state.chance = 0;
    },
  },
});

export const { resetChance, incrementChance } = chanceSlice.actions;

export default chanceSlice.reducer;
