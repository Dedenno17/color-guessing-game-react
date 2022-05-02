import { useSelector } from "react-redux";

const Head = props => {

    const colors = useSelector(state => state.colors.colors);

    const getOneColor = () => {
        const random = Math.round(Math.random() * (3 - 0));
        return colors[random];
    }

    return (
        <div className="w-full text-white py-2 flex flex-col items-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Color Guess Game</h2>
            <h1 className="text-4xl font-bold mt-2 sm:text-5xl">{getOneColor()}</h1>
            <h2 className="text-xl mt-1 sm:text-2xl">Guess the color above!</h2>
        </div>
    );
}
 
export default Head;