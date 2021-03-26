import { combineReducers } from "redux";
import vocabReducer from "./vocabReducer";
import dataGameReducer from "./dataGameReducer";

const rootReducer = combineReducers({
  vocab: vocabReducer,
  dataGame: dataGameReducer,
});

export default rootReducer;
