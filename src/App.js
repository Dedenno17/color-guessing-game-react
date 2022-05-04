// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setColors } from "./features/colors";
import { setIsLoading } from "./features/isLoading";
import { setIsRightAnswer } from "./features/isAnswerRight";

// component
import Header from "./components/Header/Header";
import NavbarDificultyMode from "./components/Header/NavbarDificultyMode";
import Main from "./components/Main/Main";
import { setIsEasyMode } from "./features/isEasyMode";

function App() {
  const isShowNavbarModal = useSelector(
    (state) => state.showNavbarModal.isShowNavbarModal
  );

  const dispatch = useDispatch();

  const changeModeColorHandler = (mode) => {
    dispatch(setIsLoading(true));
    dispatch(setColors([]));

    if (mode === "EASY") {
      const timeOut = setTimeout(() => {
        dispatch(setColors(mode));
        dispatch(setIsRightAnswer(false));
        dispatch(setIsEasyMode(true));
        dispatch(setIsLoading(false));
        clearTimeout(timeOut);
      }, 500);
    } else {
      const timeOut = setTimeout(() => {
        dispatch(setColors(mode));
        dispatch(setIsRightAnswer(false));
        dispatch(setIsEasyMode(false));
        dispatch(setIsLoading(false));
        clearTimeout(timeOut);
      }, 500);
    }
  };

  return (
    <div className="App">
      <Header onChangeMode={changeModeColorHandler} />
      <Main />
      {isShowNavbarModal && (
        <NavbarDificultyMode onChangeMode={changeModeColorHandler} />
      )}
    </div>
  );
}

export default App;
