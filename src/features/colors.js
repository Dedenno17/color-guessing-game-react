import { createSlice } from "@reduxjs/toolkit";

const getRandomColor = () => {
  const r = Math.round(Math.random() * (255 - 0));
  const g = Math.round(Math.random() * (255 - 0));
  const b = Math.round(Math.random() * (255 - 0));
  return `rgb(${r}, ${g}, ${b})`;
};

const initialStateValue = [
  { color: getRandomColor(), id: Math.random() + 1 },
  { color: getRandomColor(), id: Math.random() + 1 },
  { color: getRandomColor(), id: Math.random() + 1 },
];

export const colorsSlice = createSlice({
  name: "colors",
  initialState: { colors: initialStateValue },
  reducers: {
    setColors: (state, action) => {
      if (action.payload === "EASY") {
        state.colors = [
          { color: getRandomColor(), id: Math.random() + 1 },
          { color: getRandomColor(), id: Math.random() + 1 },
          { color: getRandomColor(), id: Math.random() + 1 },
        ];
      }

      if (action.payload === "HARD") {
        state.colors = [
          { color: getRandomColor(), id: Math.random() + 1 },
          { color: getRandomColor(), id: Math.random() + 1 },
          { color: getRandomColor(), id: Math.random() + 1 },
          { color: getRandomColor(), id: Math.random() + 1 },
          { color: getRandomColor(), id: Math.random() + 1 },
          { color: getRandomColor(), id: Math.random() + 1 },
        ];
      }

      if (action.payload !== "HARD" && action.payload !== "EASY") {
        state.colors = action.payload;
      }
    },
  },
});

export const { setColors } = colorsSlice.actions;

export default colorsSlice.reducer;
