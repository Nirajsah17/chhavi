// src/rootReducer.js
import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  filterReducer: filterReducer,
  appReducer: appReducer,
});

export default rootReducer;
