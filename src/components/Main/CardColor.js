const CardColor = props => {

    return (
        <div
            datatype={props.color} 
            className="cursor-pointer w-full mt-3.5 mb-1 h-36 shadow-xl"
            style={{backgroundColor: `${props.color}`}}
            
        ></div>
    );
}
 
export default CardColor;