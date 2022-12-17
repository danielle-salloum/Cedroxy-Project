import { combineReducers } from "redux";
import LoadingReducer from "./loadingReducer";
import MessageReducer from "./messageReducer";
export default combineReducers({
  LoadingReducer,
  MessageReducer,
});

export type RootReducer = ReturnType<typeof combineReducers>;
