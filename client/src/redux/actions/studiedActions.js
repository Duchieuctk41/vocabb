import axios from "axios";
import { studiedTypes } from "../types/studiedTypes";
import { studiedURL } from "../../api";

export const studiedActions = () => async (dispatch) => {
  const studiedData = await axios.get(studiedURL());
  // console.log("studied=", studiedData);

  dispatch({
    type: studiedTypes.FETCH_ALL_STUDIED,
    payload: {
      studied: studiedData.data,
    },
  });
};
