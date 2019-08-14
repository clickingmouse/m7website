import authReducer from "./authReducer";
import projReducer from "./projReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  proj: projReducer,
  post: postReducer,
  firestore: firestoreReducer
});

export default rootReducer;
