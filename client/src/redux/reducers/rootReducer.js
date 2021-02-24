import { combineReducers } from "redux";
import modelReducer from "./modelReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  models: modelReducer,
  error: errorReducer,
});

export default rootReducer;
