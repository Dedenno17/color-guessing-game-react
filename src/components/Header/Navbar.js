import { useDispatch } from "react-redux";
import { setIsShowNavbarModal } from '../../features/showNavbarModal';

const Navbar = props => {

    const dispatch = useDispatch();

    const showNavbarModalHandler = () => {
        dispatch(setIsShowNavbarModal(true));
    }

    return (
        <nav className="w-full bg-blueDefault justify-end shadow-md flex px-5">
            <ul className="hidden lg:flex w-full justify-evenly text-2xl text-white">
                <li className="h-full block">
                    <button
                        type="button"
                        className="bg-blueDefault py-2 px-3 h-full hover:brightness-95"
                    >New colors</button>
                </li>
                <li className="w-72 h-full flex justify-evenly">
                    <button type="button" className="bg-blueDefault px-5 h-full hover:brightness-95 py-2">Easy</button>
                    <button type="button" className="bg-blueDefault px-5 h-full hover:brightness-95 py-2">Hard</button>
                </li>
            </ul>
            <div className="flex w-1/2 justify-end lg:hidden">
                <button
                    type="button"
                    className="text-white text-xl font-semibold hover:text-slate-200 sm:text-2xl mr-5"
                >New colors</button>
                <button 
                    type="button" 
                    className="text-white text-xl font-semibold hover:text-slate-200 sm:text-2xl"
                    onClick={showNavbarModalHandler}    
                >Mode</button>
            </div>
        </nav>
    );
}
 
export default Navbar;