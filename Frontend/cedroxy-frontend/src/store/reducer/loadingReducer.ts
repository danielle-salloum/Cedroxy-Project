import { REMOVE_LOADING, SHOW_LOADING } from "../action/loadingAction";
const initialState = false;
const LoadingReducer = (state = initialState, action: any) => {
  const { type } = action;

  switch (type) {
    case REMOVE_LOADING:
      return false;
    case SHOW_LOADING:
      return true;
    default:
      return state;
  }
};
export default LoadingReducer;
