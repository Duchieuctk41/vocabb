import { vocabTypes } from "../types/vocabTypes";

const initState = {
  vocab: {
    listQuestion: [
      "609e71fbf172b71f985cd8dc",
      "609e73b4083e0a0930a0788a",
      "609e7eb9dbc7b512b079ee2c",
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
