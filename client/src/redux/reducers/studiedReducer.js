import { studiedTypes } from "../types/studiedTypes";

const initState = {
  studied: [],
};

const studiedReducer = (state = initState, action) => {
  switch (action.type) {
    case studiedTypes.FETCH_ALL_STUDIED:
      // console.log("payload", action.payload);
      return { ...state, studied: action.payload.studied };
    default:
      return state;
  }
};

export default studiedReducer;
