import { useSelector } from "react-redux";
import CardColor from "./CardColor";

const Main = props => {

    const colors = useSelector(state => state.colors.colors);

    return (
        <div className="w-full bg-skyBlue flex flex-col items-center h-full">
            {colors.map(item => <CardColor color={item}/>)}
        </div>
    );
}
 
export default Main;