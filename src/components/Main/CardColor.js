const CardColor = props => {

    return (
        <div 
            className="cursor-pointer w-full my-3.5 h-36 shadow-xl"
            style={{backgroundColor: `${props.color}`}}
        ></div>
    );
}
 
export default CardColor;