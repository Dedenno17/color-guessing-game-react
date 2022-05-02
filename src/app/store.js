import { configureStore } from '@reduxjs/toolkit';

// reducer
import showNavbarModalReducer from '../features/showNavbarModal';
import colorsReducer from '../features/colors';
import colorCompReducer from '../features/colorComp';
import colorPlayerReducer from '../features/colorPlayer';

export const store = configureStore({
  reducer: {
    showNavbarModal: showNavbarModalReducer,
    colors: colorsReducer,
    colorComp: colorCompReducer,
    colorPlayer: colorPlayerReducer,
  },
});
