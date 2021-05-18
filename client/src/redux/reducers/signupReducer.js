import { signupTypes } from "../types/signupTypes";

const initState = {
  message: [],
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case signupTypes.FETCH_RESPONSE_SERVER:
      // console.log("payload", action.payload);
      return { message: action.payload.message };
    case signupTypes.FETCH_MESSAGE_LOGIN:
      return { message: action.payload.message };
    default:
      return state;
  }
};

export default signupReducer;
