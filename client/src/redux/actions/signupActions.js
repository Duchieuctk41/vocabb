import axios from "axios";
import { signupTypes } from "../types/signupTypes";
import { verifyUrl } from "../../api";

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
