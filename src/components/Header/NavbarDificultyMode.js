import Modal from "../UI/Modal";

const NavbarDificultyMode = props => {
    return (
        <Modal className="p-5 flex flex-col justify-evenly text-xl text-slate-600 w-80 h-40">
            <button type="button" className="hover:text-slate-900">Easy</button>
            <button type="button" className="hover:text-slate-900">Hard</button>
        </Modal>
    );  
}
 
export default NavbarDificultyMode;