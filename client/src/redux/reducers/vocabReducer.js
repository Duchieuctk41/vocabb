import { vocabTypes } from "../types/vocabTypes";

const initState = {
  vocab: {
    listQuestion: [
      "6079108d8a5b364151f0f929",
      "6079117dedb60243d24212c1",
      "60791360e1c87a49ba560322",
    ],
  },
};

const vocabReducer = (state = initState, action) => {
  switch (action.type) {
    case vocabTypes.FETCH_ALL_VOCAB:
      // console.log("reducer:", action.payload);
      return { ...state, vocab: action.payload.vocab };

    default:
      return state;
  }
};

export default vocabReducer;
