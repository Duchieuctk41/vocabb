import axios from "axios";

import { vocabURL } from "../../api";

export const loadVocab = () => async (dispatch) => {
  // FETCH AXIOS
  const vocabData = await axios.get(vocabURL());

  dispatch({
    type: "FETCH_VOCAB",
    payload: {
      vocab: vocabData.data,
    },
  });
};
