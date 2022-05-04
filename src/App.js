// import { useState } from 'react';
import { useSelector } from 'react-redux';

// component
import Header from './components/Header/Header';
import NavbarDificultyMode from './components/Header/NavbarDificultyMode';
import Main from './components/Main/Main';


function App() {

  const isShowNavbarModal = useSelector(state => state.showNavbarModal.isShowNavbarModal);


  return (
    <div className="App">
      <Header />
      <Main />
      { isShowNavbarModal && <NavbarDificultyMode />}
    </div>
  );
}

export default App;
