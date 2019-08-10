import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
//import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
//import { createFirestoreInstance } from 'redux-firestore'

import fbConfig from "../src/config/firebaseConfig";

//const rrfConfig = { userProfile: "users" }; // react-redux-firebase config

//firebase.initializeApp(fbConfig); //3.0

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig),
    window.devToolsExtension && window.devToolsExtension()
  )
);

//3.0
//const rrfProps = {
//  firebase,
//  config: rrfConfig,
//  dispatch: store.dispatch
//createFirestoreInstance // <- needed if using firestore 3.0
//};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
