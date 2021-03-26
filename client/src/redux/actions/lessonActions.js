import axios from "axios";
import { lessonTypes } from "../types/lessonTypes";
import { vocabURL } from "../../api";

export const lessonActions = () => async (dispatch) => {
  const lessonData = await axios.get(vocabURL());
  // console.log("lesson", lessonData);

  dispatch({
    type: lessonTypes.FETCH_ALL_LESSON,
    payload: {
      lesson: lessonData.data,
    },
  });
};
