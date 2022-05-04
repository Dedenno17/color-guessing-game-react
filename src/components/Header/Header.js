import Head from "./Head";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <header className="bg-teal flex flex-col-reverse shadow-lg fixed top-0 left-0 right-0 lg:flex-col">
      <Head />
      <Navbar onChangeMode={props.onChangeMode} />
    </header>
  );
};

export default Header;
