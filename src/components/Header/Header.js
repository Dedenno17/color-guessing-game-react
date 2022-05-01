import Head from "./Head";
import Navbar from "./Navbar";

const Header = props => {
    return (
        <header className="bg-blueDefault flex flex-col-reverse sm:bg-pink-300">
            <Head />
            <Navbar />
        </header>
    );
}
 
export default Header;