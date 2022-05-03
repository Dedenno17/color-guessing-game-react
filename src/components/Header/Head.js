import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setColorComp} from '../../features/colorComp';

const Head = props => {

    const colors = useSelector(state => state.colors.colors);
    const message = useSelector(state => state.gamesMessages.gamesMessages);
    
    const [colorToMatch, setColorToMatch] = useState('');
    
    const dispatch = useDispatch();

    const getOneColor = () => {
        const random = Math.round(Math.random() * (3 - 0));
        dispatch(setColorComp(colors[random].color));
        setColorToMatch(colors[random].color);
    }

    useEffect(() => {
        getOneColor();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="w-full text-white py-2 flex flex-col items-center lg:py-4 lg:shadow-inner">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:mb-3 lg:text-4xl">Color Guess Game</h2>
            <h1 className="text-4xl font-bold mt-2 sm:text-5xl lg:mb-2">{ colorToMatch }</h1>
            <h2 className="text-xl mt-1 sm:text-2xl">{ message }</h2>
        </div>
    );
}
 
export default Head;