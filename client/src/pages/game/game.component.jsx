import React, { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { vocabActions } from "../../redux/actions/vocabActions";

const Game = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(vocabActions());
  }, [dispatch]);

  const { vocab } = useSelector((state) => state.vocab);
  // console.log(vocab);

  return (
    <div>
      {vocab.map((item) => {
        return <h2>{item.EnName}</h2>;
      })}
    </div>
  );
};

export default Game;
