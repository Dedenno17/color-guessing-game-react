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

  return (
    <div className="container mx-auto w-full bg-transparent flex flex-col items-center overflow-y-auto md:flex-row md:flex-wrap md:justify-evenly md:pt-11 md:pb-16 lg:max-w-6xl xl:max-w-full">
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
