import axios from "axios";
import { questionTypes } from "../types/questionTypes";
import { questionURL } from "../../api";

export const questionActions = (id) => async (dispatch) => {
  const questionData = await axios.get(questionURL(id));
  // console.log("question: ", questionData);

  dispatch({
    type: questionTypes.FETCH_QUESTION,
    payload: {
      question: questionData.data,
    },
  });
};
