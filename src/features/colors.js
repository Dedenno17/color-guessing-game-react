import { createSlice } from '@reduxjs/toolkit';


const getRandomColor = () => {
    const r = Math.round(Math.random() * (255 - 0));
    const g = Math.round(Math.random() * (255 - 0));
    const b = Math.round(Math.random() * (255 - 0));
    return `rgb(${r}, ${g}, ${b})`;
}

const initialStateValue = [
    getRandomColor(),
    getRandomColor(),
    getRandomColor(),

]

export const colorsSlice = createSlice({
    name: 'colors',
    initialState: {colors: initialStateValue},
    reducers: {
        setColors: (state, action) => {
            if( action.payload === 'EASY' ) {
                state.colors = [
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                ]
            }

            if( action.payload === 'HARD' ) {
                state.colors = [
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                    getRandomColor(),
                ]
            }
        }
    }
})

export const {setColors} = colorsSlice.actions;

export default colorsSlice.reducer;