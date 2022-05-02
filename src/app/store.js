import { configureStore } from '@reduxjs/toolkit';

// reducer
import showNavbarModalReducer from '../features/showNavbarModal';
import colorsReducer from '../features/colors';
import colorCompReducer from '../features/colorComp';
import gamesMessagesReducer from '../features/gamesMessages';

export const store = configureStore({
  reducer: {
    showNavbarModal: showNavbarModalReducer,
    colors: colorsReducer,
    colorComp: colorCompReducer,
    gameMessages: gamesMessagesReducer
  },
});
