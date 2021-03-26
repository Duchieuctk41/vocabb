import { combineReducers } from "redux";
import lessonReducer from "./lessonReducer";
import vocabReducer from "./vocabReducer";

const rootReducer = combineReducers({
  lesson: lessonReducer,
  vocab: vocabReducer,
});

export default rootReducer;
