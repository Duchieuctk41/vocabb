import axios from "axios";
import { vocabTypes } from "../types/vocabTypes";
import { gameURL } from "../../api";

export const vocabActions = () => async (dispatch) => {
  const vocabData = await axios.get(gameURL());
  console.log("vocab=== ", vocabData);

  dispatch({
    type: vocabTypes.FETCH_ALL_VOCAB,
    payload: {
      vocab: vocabData.data,
    },
  });
};
