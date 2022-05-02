import { useDispatch } from "react-redux";
import { setIsShowNavbarModal } from '../../features/showNavbarModal';

const Navbar = props => {

    const dispatch = useDispatch();

    const showNavbarModalHandler = () => {
        dispatch(setIsShowNavbarModal(true));
    }

    return (
        <nav className="w-full bg-blueDefault justify-end shadow-md flex px-5 py-1">
            <ul className="hidden lg:flex">
                <li>
                    <button
                        type="button"
                    >New colors</button>
                </li>
                <li>
                    <div>
                        <button type="button">Easy</button>
                        <button type="button">Hard</button>
                    </div>
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