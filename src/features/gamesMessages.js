import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 'Color Guess Games';

const rightMessages = [
    'You are Great!!',
    'Unstopable!!',
    'Good Intuition!!',
    'Excellent!!',
    'Great Brain!!'
];

export const gamesMessagesSlice = createSlice({
    name: 'gamesMessages',
    initialState: {gamesMessages: initialStateValue},
    reducers: {
        setMessages: (state, action) => {
            if( action.payload === 'RIGHT' ) {
                const random = Math.round(Math.random() * (4 - 0));
                state.gamesMessages = rightMessages[random];
            }

            if( action.payload === 'WRONG' ) {
                state.gamesMessages = 'Try Again!!'
            }

            if( action.payload === 'DONE' ) {
                state.gamesMessages = 'Sorry Your Time Is Up!!'
            }
        }
    }
});

export const {setMessages} = gamesMessagesSlice.actions;

export default gamesMessagesSlice.reducer;