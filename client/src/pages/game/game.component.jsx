import React, { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { loadDataGame } from "../../redux/actions/dataGameActions";

const Game = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDataGame());
  }, [dispatch]);

  const { dataGame } = useSelector((state) => state);
  console.log(dataGame.data);

  return (
    <div>
      {dataGame.data.map((item) => {
        return <h2>{item.EnName}</h2>;
      })}
    </div>
  );
};

export default Game;
