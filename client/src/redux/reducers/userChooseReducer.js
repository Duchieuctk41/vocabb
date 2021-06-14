import { userChooseTypes } from "../types/userChooseTypes";
import { addUserChoose, removeUserChoose, clearUserChoose, addUserInput } from "./../utils/userChooseUtils";

const initState = {
  userChoose: [],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userChooseTypes.ADD_USER_CHOOSE:
      return { ...state, userChoose: addUserChoose(state.userChoose, action.payload) };
    case userChooseTypes.ADD_USER_INPUT:
      return addUserInput(state.userChoose, action.payload) ;
    case userChooseTypes.REMOVE_USER_CHOOSE:
      console.log("action: ", action.payload);
      return { ...state, userChoose: removeUserChoose(state.userChoose, action.payload) };
    case userChooseTypes.CLEAR_USER_CHOOSE:
      return { ...state, userChoose: clearUserChoose() };
    default:
      return state;
  }
};

export default userReducer;
