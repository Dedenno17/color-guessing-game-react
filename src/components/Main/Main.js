import { useSelector } from "react-redux";
import CardColor from "./CardColor";

const Main = props => {

    const colors = useSelector(state => state.colors.colors);

    return (
        <div className="container mx-auto w-full bg-transparent flex flex-col items-center overflow-y-auto md:flex-row md:flex-wrap md:justify-evenly md:pt-11 md:pb-16 lg:max-w-6xl xl:max-w-full">
            {colors.map((item, i) => <CardColor key={i} color={item} />)}
        </div>
    );
}
 
export default Main;