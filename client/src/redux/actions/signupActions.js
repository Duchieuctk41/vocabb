import axios from "axios";
import { signupTypes } from "../types/signupTypes";
import { authLoginUrl, verifyUrl } from "../../api";

export const signupActions = () => async (dispatch) => {
  const messageData = await axios.get(verifyUrl());
  console.log("message", messageData);

  dispatch({
    type: signupTypes.FETCH_RESPONSE_SERVER,
    payload: {
      message: messageData.data,
    },
  });
};

export const loginActions = () => async (dispatch) => {
  const messageData = await axios.get(authLoginUrl());
  console.log("message", messageData);

  dispatch({
    type: signupTypes.FETCH_MESSAGE_LOGIN,
    payload: {
      message: messageData.data,
    },
  });
};
