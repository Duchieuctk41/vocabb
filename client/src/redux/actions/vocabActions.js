import axios from "axios";
import { VocabTypes } from "../types/vocabTypes";
import { vocabURL } from "../../api";

export const loadVocab = () => async (dispatch) => {
  const vocabData = await axios.get(vocabURL());

  dispatch({
    type: VocabTypes.FETCH_VOCAB,
    payload: {
      vocab: vocabData.data,
    },
  });
};
