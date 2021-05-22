import { vocabTypes } from "./../types/vocabTypes";

const initState = {
  vocab: [],
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
