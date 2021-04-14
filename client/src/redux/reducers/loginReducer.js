import { loginTypes } from "./../types/loginTypes";

const initState = {
  login: true,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case loginTypes.FETCH_LOGIN:
        // console.log("payload", action.payload);
      return {
        ...state,
        login: !state.login,
      };
    default:
      return state;
  }
};

export default loginReducer;
