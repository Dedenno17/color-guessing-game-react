import { useDispatch } from "react-redux";
import { setIsShowNavbarModal } from "../../features/showNavbarModal";
import Modal from "../UI/Modal";

const NavbarDificultyMode = (props) => {
  const dispatch = useDispatch();

  const changeModeClickHandler = (mode) => {
    props.onChangeMode(mode);
    dispatch(setIsShowNavbarModal(false));
  };

  return (
    <Modal className="p-5 flex flex-col justify-evenly text-xl text-slate-600 w-80 h-40">
      <button
        type="button"
        className="hover:text-slate-900"
        onClick={() => changeModeClickHandler("EASY")}
      >
        Easy
      </button>
      <button
        type="button"
        className="hover:text-slate-900"
        onClick={() => changeModeClickHandler("HARD")}
      >
        Hard
      </button>
    </Modal>
  );
};

export default NavbarDificultyMode;
