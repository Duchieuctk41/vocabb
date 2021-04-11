import { combineReducers } from "redux";
import lessonReducer from "./lessonReducer";
import vocabReducer from "./vocabReducer";
import signupReducer from "./signupReducer";

const rootReducer = combineReducers({
  lesson: lessonReducer,
  vocab: vocabReducer,
  message: signupReducer,
});

export default rootReducer;
