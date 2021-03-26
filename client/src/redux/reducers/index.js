import { combineReducers } from "redux";
import vocabReducer from "./vocabReducer";

const rootReducer = combineReducers({
  vocab: vocabReducer,
});

export default rootReducer;
