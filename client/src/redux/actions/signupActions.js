import axios from "axios";
import { signupTypes } from "../types/signupTypes";
import { postSignupUrl } from "../../api";

export const signupActions = () => async (dispatch) => {
  const signupData = await axios.get(postSignupUrl());
  console.log("signup=", signupData);

  dispatch({
    type: signupTypes.FETCH_RESPONSE_SERVER,
    payload: {
      signup: signupData.data,
    },
  });
};
