import authReducer from "./authReducer";
import projReducer from "./projReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  proj: projReducer,
  firestore: firestoreReducer
});

export default rootReducer;
