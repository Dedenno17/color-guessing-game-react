import { useSelector } from "react-redux";

const CardColor = (props) => {
  const rightAnswer = useSelector((state) => state.isRightAnswer.isRightAnswer);

  return (
    <div
      id={props.id}
      className={`cursor-pointer w-full h-32 mt-4 shadow-xl sm:rounded-lg md:w-80 md:rounded-lg md:h-40 xl:w-96 active:scale-95 ${
        rightAnswer ? "pointer-events-none" : ""
      }`}
      style={{ backgroundColor: `${props.color}` }}
      onClick={() => props.onChoose(props.color)}
    ></div>
  );
};

export default CardColor;
