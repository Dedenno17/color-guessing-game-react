import Head from "./Head";
import Navbar from "./Navbar";

const Header = props => {
    return (
        <header className="bg-blueDefault flex flex-col-reverse md:bg-green-500 shadow-lg lg:flex-col xl:bg-pink-500">
            <Head />
            <Navbar />
        </header>
    );
}
 
export default Header;