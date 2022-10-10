import { combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./tasks";
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
