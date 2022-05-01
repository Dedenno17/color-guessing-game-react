import { configureStore } from '@reduxjs/toolkit';

// reducer
import showNavbarModalReducer from '../features/showNavbarModal';

export const store = configureStore({
  reducer: {
    showNavbarModal: showNavbarModalReducer,
  },
});
