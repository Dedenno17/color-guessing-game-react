import CardColor from "./CardColor";

const Main = props => {
    return (
        <div className="w-full bg-skyBlue flex flex-col items-center h-full">
            <CardColor />
            <CardColor />
            <CardColor />
        </div>
    );
}
 
export default Main;