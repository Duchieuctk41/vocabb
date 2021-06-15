import { vocabTypes } from "./../types/vocabTypes";

const initState = {
  vocab: [],
};

const vocabReducer = (state = initState, action) => {
  switch (action.type) {
    case vocabTypes.FETCH_VOCAB_STORE:
      // console.log("reducer:", action.payload);
      return { ...state, vocab: action.payload.vocab };

    case vocabTypes.FETCH_ALL_VOCAB:
      return { ...state, vocab: action.payload.vocab };
      
    case vocabTypes.DELETE_VOCAB:
      return {
        vocab: state.vocab.filter((it) => {
          return it._id !== action.payload;
        }),
      };
   
    default:
      return state;
  }
};

export default vocabReducer;
