import { useSelector } from "react-redux";
import CardColor from "./CardColor";

const Main = props => {

    const colors = useSelector(state => state.colors.colors);

    return (
        <div className="w-full bg-transparent flex flex-col items-center overflow-y-auto">
            {colors.map((item, i) => <CardColor key={i} color={item} />)}
        </div>
    );
}
 
export default Main;