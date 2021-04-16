import { questionTypes } from "../types/questionTypes";

const initState = {
  question: [],
};

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case questionTypes.FETCH_QUESTION:
      // console.log("reducer:", action.payload);
      return { ...state, question: action.payload.question };

    default:
      return state;
  }
};

export default questionReducer;
