import { questionTypes } from "../types/questionTypes";

const initState = {
  question: [],
};

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case questionTypes.FETCH_QUESTION:
      return { ...state, question: action.payload.question };
    
    default:
      return state;
  }
};

export default questionReducer;
