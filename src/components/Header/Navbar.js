import { useDispatch, useSelector } from "react-redux";
import { setIsShowNavbarModal } from "../../features/showNavbarModal";
import { setColors } from "../../features/colors";
import { setIsRightAnswer } from "../../features/isAnswerRight";
import { setIsLoading } from "../../features/isLoading";

const Navbar = (props) => {
  const chance = useSelector((state) => state.chance.chance);

  const dispatch = useDispatch();

  const showNavbarModalHandler = () => {
    dispatch(setIsShowNavbarModal(true));
  };

  const newColorsHandler = () => {
    dispatch(setIsLoading(true));
    dispatch(setColors([]));

    const timeOut = setTimeout(() => {
      dispatch(setColors("EASY"));
      dispatch(setIsRightAnswer(false));
      dispatch(setIsLoading(false));
      clearTimeout(timeOut);
    }, 500);
  };

  return (
    <nav className="w-full bg-blueDefault justify-end shadow-md flex px-5 lg:justify-center lg:shadow-shadow-inverse">
      <ul className="hidden lg:flex w-full justify-evenly text-2xl text-white xl:w-3/4">
        <li className="h-full block">
          <button
            type="button"
            className={`bg-blueDefault py-2 px-3 h-full hover:brightness-95 ${
              chance !== 0 ? "pointer-events-none" : ""
            }`}
            onClick={newColorsHandler}
          >
            New colors
          </button>
        </li>
        <li className="w-72 h-full flex justify-evenly ">
          <button
            type="button"
            className="bg-blueDefault px-5 h-full hover:brightness-95 py-2"
          >
            Easy
          </button>
          <button
            type="button"
            className="bg-blueDefault px-5 h-full hover:brightness-95 py-2"
          >
            Hard
          </button>
        </li>
      </ul>
      <div className="flex w-1/2 justify-end lg:hidden">
        <button
          type="button"
          className="text-white text-xl font-semibold hover:text-slate-200 sm:text-2xl mr-5"
          onClick={newColorsHandler}
        >
          New colors
        </button>
        <button
          type="button"
          className="text-white text-xl font-semibold hover:text-slate-200 sm:text-2xl"
          onClick={showNavbarModalHandler}
        >
          Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
