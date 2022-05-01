import { createPortal } from "react-dom";

import { useDispatch } from "react-redux";
import { setIsShowNavbarModal } from '../../features/showNavbarModal'

const ModalBackground = props => {

    const dispatch = useDispatch();

    const hideNavbarModalHandler = () => {
        dispatch(setIsShowNavbarModal(false));
    }

    return (
        <div 
            className="fixed top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-slate-800 to-transparent"
            onClick={hideNavbarModalHandler}    
        ></div>
    );
}

const ModalContent = props => {

    const classes = `${props.className} fixed top-14 left-1/2 -translate-x-1/2 z-50 max-w-xs bg-slate-200 rounded-lg shadow-lg`

    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

const modalElement = document.getElementById('modal');

const Modal = props => {
    return (
        <>
            {createPortal(<ModalBackground />, modalElement)}
            {createPortal(<ModalContent className={props.className}>{props.children}</ModalContent>, modalElement)}
        </>
    );
}
 
export default Modal;