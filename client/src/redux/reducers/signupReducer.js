import { signupTypes } from "../types/signupTypes";

const initState = {};

const signupReducers = (state = initState, action) => {
  switch (action.type) {
    case signupTypes.FETCH_RESPONSE_SERVER:
      // console.log("payload", action.payload);
      return { ...state, signup: action.payload.signup };
    default:
      return state;
  }
};

export default signupReducers;
