import axios from "axios";
import { vocabTypes } from "../types/vocabTypes";
import { dataGameURL } from "../../api";

export const vocabActions = () => async (dispatch) => {
  const vocabData = await axios.get(dataGameURL());
  // console.log(vocabData);

  dispatch({
    type: vocabTypes.FETCH_ALL_VOCAB,
    payload: {
      vocab: vocabData.data,
    },
  });
};
