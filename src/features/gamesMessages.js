import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = '';

const rightMessages = [
    'You are Great!!',
    'Unstopable!!',
    'Good Intuition!!',
    'Excellent!!',
    'Great Brain!!'
];

export const gamesMessagesSlice = createSlice({
    name: 'gamesMessages',
    initialState: {messages: initialStateValue},
    reducers: {
        setMessages: (state, action) => {
            if( action.payload === 'RIGHT' ) {
                const random = Math.round(Math.random() * (4 - 0));
                state.messages = rightMessages[random];
            }

            if( action.payload === 'WRONG' ) {
                state.messages = 'Try Again!!'
            }
        }
    }
});

export const {setMessages} = gamesMessagesSlice.actions;

export default gamesMessagesSlice.reducer;