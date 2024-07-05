// src/rootReducer.js
import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import appReducer from "./appReducer";
import canvasReducer from "./canvasReducer";

const rootReducer = combineReducers({
  filterReducer: filterReducer,
  appReducer: appReducer,
  canvasReducer: canvasReducer
});

export default rootReducer;
