import axios from "axios";
import { vocabTypes } from "../types/vocabTypes";
import { vocabURL } from "../../api";

export const vocabActions = () => async (dispatch) => {
  const vocabData = await axios.get(vocabURL());
  // console.log(vocabData);

  dispatch({
    type: vocabTypes.FETCH_ALL_VOCAB,
    payload: {
      vocab: vocabData.data,
    },
  });
};
