import authReducer from "./authReducer";
import projReducer from "./projReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  proj: projReducer
});

export default rootReducer;
