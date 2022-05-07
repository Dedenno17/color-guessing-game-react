import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setMessages } from "../../features/gamesMessages";
import { setIsRightAnswer } from "../../features/isAnswerRight";
import { resetChance, incrementChance } from "../../features/chance";
import CardColor from "./CardColor";

const Main = (props) => {
  const colors = useSelector((state) => state.colors.colors);
  const colorComp = useSelector((state) => state.colorComp.colorComp);
  const chance = useSelector((state) => state.chance.chance);

  const dispatch = useDispatch();

  const [colorPlayer, setColorPlayer] = useState("");

  useEffect(() => {
    if (colorPlayer.trim() === "") {
      return;
    }

    if (chance > 3) {
      dispatch(setMessages("DONE"));
    }

    if (colorPlayer !== colorComp && chance <= 3) {
      dispatch(setMessages("WRONG"));
      dispatch(setIsRightAnswer(false));
    }

    if (colorPlayer === colorComp && chance <= 3) {
      dispatch(setMessages("RIGHT"));
      dispatch(setIsRightAnswer(true));
      dispatch(resetChance());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chance, colorPlayer]);

  const chooseColorHandler = (color) => {
    dispatch(incrementChance());
    setColorPlayer(color);
  };

  console.log(chance);
  return (
    <div className="container mx-auto w-full bg-transparent pt-44 pb-2 flex justify-evenly flex-col items-center sm:pt-44 md:flex-row md:flex-wrap md:justify-evenly md:pt-48 md:pb-10 lg:max-w-6xl lg:pt-64 xl:max-w-full">
      {colors.map((item) => (
        <CardColor
          key={item.id}
          id={item.id}
          color={item.color}
          onChoose={chooseColorHandler}
        />
      ))}
    </div>
  );
};

export default Main;
