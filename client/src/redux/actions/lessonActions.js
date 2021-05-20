import axios from "axios";
import { lessonTypes } from "../types/lessonTypes";
import { lessonURL, lessonIdURL } from "../../api";

export const lessonActions = () => async (dispatch) => {
  const lessonData = await axios.get(lessonURL());
  // console.log("lesson=", lessonData);

  dispatch({
    type: lessonTypes.FETCH_ALL_LESSON,
    payload: {
      lesson: lessonData.data,
    },
  });
};

export const lessonIdActions = (idLesson) => async (dispatch) => {
  const lessonData = await axios.get(lessonIdURL(idLesson));
  // console.log("lesson=", lessonData);

  dispatch({
    type: lessonTypes.FETCH_LESSON_BY_ID,
    payload: {
      lesson: lessonData.data,
    },
  });
};

