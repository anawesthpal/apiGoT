import { combineReducers } from "@reduxjs/toolkit";
import charactersSlice from "./album/characters.slice";

const rootReducer = combineReducers({
  characters: charactersSlice,

});

export default rootReducer;
