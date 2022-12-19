import thunk from "redux-thunk";
import rootReducer from "../store/reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  //this activate the redux dev tool on the browser
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
