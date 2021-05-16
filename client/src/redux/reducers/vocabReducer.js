import { vocabTypes } from "../types/vocabTypes";

const initState = {
  vocab: {
    listQuestion: [
      "609e71fbf172b71f985cd8dc",
      "609e73b4083e0a0930a0788a",
      "609e7eb9dbc7b512b079ee2c",
      "60a1299b7e153c1f1c4053cd",
      "60a129cd7e153c1f1c4053ce",
      "60a129f07e153c1f1c4053cf",
      "60a12a2a7e153c1f1c4053d0",
      "60a12a517e153c1f1c4053d1",
      "60a12a6c7e153c1f1c4053d2",
      "60a12ac77e153c1f1c4053d3",
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
