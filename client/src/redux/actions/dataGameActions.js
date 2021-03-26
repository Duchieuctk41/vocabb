import axios from "axios";
import { VocabTypes } from "../types/vocabTypes";
import { dataGameURL } from "../../api";

export const loadDataGame = () => async (dispatch) => {
  const dataGame = await axios.get(dataGameURL());

  dispatch({
    type: VocabTypes.FETCH_DATA_GAME,
    payload: {
      data: dataGame.data,
    },
  });
};
