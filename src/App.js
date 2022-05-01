import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import NavbarDificultyMode from './components/Header/NavbarDificultyMode';

function App() {

  const isShowNavbarModal = useSelector(state => state.showNavbarModal.isShowNavbarModal);

  return (
    <div className="App">
      <Header />
      { isShowNavbarModal && <NavbarDificultyMode />}
    </div>
  );
}

export default App;
