import { lessonTypes } from "../types/lessonTypes";

const initState = {
  lesson: [],
};

const vocabReducer = (state = initState, action) => {
  switch (action.type) {
    case lessonTypes.FETCH_ALL_LESSON:
      // console.log("payload", action.payload);
      return { ...state, lesson: action.payload.lesson };
    case lessonTypes.FETCH_LESSON_BY_ID:
      return { ...state, lesson: action.payload.lesson };
    default:
      return state;
  }
};

export default vocabReducer;
