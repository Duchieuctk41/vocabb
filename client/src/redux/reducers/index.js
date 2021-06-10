import { combineReducers } from "redux";
import lessonReducer from "./lessonReducer";
import gameReducer from "./gameReducer";
import vocabReducer from "./vocabReducer";
import signupReducer from "./signupReducer";
import loginReducer from "./loginReducer";
import questionReducer from "./questionReducer";
import studiedReducer from "./studiedReducer";
import storeReducer from "./storeReducer";
import achievementReducer from "./achievementReducer";
import adquestionReducer from "./adquestionReducer";

const rootReducer = combineReducers({
  lesson: lessonReducer,
  vocab: vocabReducer,
  game: gameReducer,
  message: signupReducer,
  login: loginReducer,
  question: questionReducer,
  studied: studiedReducer,
  store: storeReducer,
  achievement: achievementReducer,
  adquestion: adquestionReducer,
});

export default rootReducer;
