import axios from "axios";
import { gameTypes } from "../types/gameTypes";
import { gameURL } from "../../api";

export const gameActions = (idQuestion) => async (dispatch) => {
  const gameData = await axios.get(gameURL(idQuestion));
  // console.log("game=== ", gameData);

  dispatch({
    type: gameTypes.FETCH_GAME,
    payload: {
      game: gameData.data,
    },
  });
};
