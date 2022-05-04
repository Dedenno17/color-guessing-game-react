import Head from "./Head";
import Navbar from "./Navbar";

const Header = props => {
    return (
        <header className="bg-teal flex flex-col-reverse shadow-lg lg:flex-col">
            <Head />
            <Navbar />
        </header>
    );
}
 
export default Header;