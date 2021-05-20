import { combineReducers } from "redux";
import lessonReducer from "./lessonReducer";
import vocabReducer from "./vocabReducer";
import signupReducer from "./signupReducer";
import loginReducer from "./loginReducer";
import questionReducer from "./questionReducer";
import studiedReducer from "./studiedReducer";

const rootReducer = combineReducers({
  lesson: lessonReducer,
  vocab: vocabReducer,
  message: signupReducer,
  login: loginReducer,
  question: questionReducer,
  studied: studiedReducer,
});

export default rootReducer;
