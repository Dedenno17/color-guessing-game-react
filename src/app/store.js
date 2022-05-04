import { configureStore } from "@reduxjs/toolkit";

// reducer
import showNavbarModalReducer from "../features/showNavbarModal";
import colorsReducer from "../features/colors";
import colorCompReducer from "../features/colorComp";
import gamesMessagesReducer from "../features/gamesMessages";
import isRightAnswerReducer from "../features/isAnswerRight";
import isEasyModeReducer from "../features/isEasyMode";
import isLoadingReducer from "../features/isLoading";

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
    colorComp: colorCompReducer,
    gamesMessages: gamesMessagesReducer,
    isEasyMode: isEasyModeReducer,
    isLoading: isLoadingReducer,
    isRightAnswer: isRightAnswerReducer,
    showNavbarModal: showNavbarModalReducer,
  },
});
