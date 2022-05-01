import { configureStore } from '@reduxjs/toolkit';

// reducer
import showNavbarModalReducer from '../features/showNavbarModal';
import colorsReducer from '../features/colors';

export const store = configureStore({
  reducer: {
    showNavbarModal: showNavbarModalReducer,
    colors: colorsReducer,
  },
});
