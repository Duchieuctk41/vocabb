import { lessonTypes } from "../types/lessonTypes";

const initState = {
  lesson: [
    {
      _id: "605cb312c881b239f6a1eadf",
      name: "Cơ bản",
      __v: 0,
    },
    {
      _id: "605cb312c881b239f6a1eae0",
      name: "Chào hỏi",
      __v: 0,
    },
    {
      _id: "605cb312c881b239f6a1eae1",
      name: "Giới thiệu",
      __v: 0,
    },
    {
      _id: "605cb312c881b239f6a1eae1",
      name: "Giới aaa",
      __v: 0,
    },
  ],
};

const vocabReducer = (state = initState, action) => {
  switch (action.type) {
    case lessonTypes.FETCH_ALL_LESSON:
      // console.log("payload", action.payload);
      return { ...state, lesson: action.payload.lesson };
    default:
      return state;
  }
};

export default vocabReducer;
