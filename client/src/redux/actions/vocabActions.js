import axios from "axios";
import { vocabTypes } from "../types/vocabTypes";
import { gameURL } from "../../api";

export const vocabActions = (idQuestion) => async (dispatch) => {
  const vocabData = await axios.get(gameURL(idQuestion));
  // console.log("vocab=== ", vocabData);

  dispatch({
    type: vocabTypes.FETCH_ALL_VOCAB,
    payload: {
      vocab: vocabData.data,
    },
  });
};
