import { combineReducers } from "redux";
import LoadingReducer from "./LoadingReducer";
export default combineReducers({
  LoadingReducer,
});

export type RootReducer = ReturnType<typeof combineReducers>;
