import { combineReducers } from "redux";
import lessonReducer from "./lessonReducer";
import vocabReducer from "./vocabReducer";
import signupReducer from "./signupReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  lesson: lessonReducer,
  vocab: vocabReducer,
  message: signupReducer,
  login: loginReducer,
});

export default rootReducer;
