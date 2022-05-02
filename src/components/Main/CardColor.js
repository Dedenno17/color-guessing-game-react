const CardColor = props => {

    return (
        <div
            datatype={props.color} 
            className="cursor-pointer w-full mt-3.5 mb-1 h-36 shadow-xl sm:rounded-lg md:w-80 md:rounded-lg md:h-40 xl:w-96"
            style={{backgroundColor: `${props.color}`}}
            
        ></div>
    );
}
 
export default CardColor;