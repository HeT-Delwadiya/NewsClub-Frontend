import { combineReducers } from "redux";
import cateReducer from "./cateReducer";
import langReducer from "./langReducer";

const reducers = combineReducers({
       category: cateReducer,
       language: langReducer
})

export default reducers;