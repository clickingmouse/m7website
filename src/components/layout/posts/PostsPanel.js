import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import React, { Component } from 'react'
//import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import PostsAppBar from "./dashboard/menubar/PostsAppBar";
import PostsDashboard from "./dashboard/PostsDashboard";

import firebase from "../../../config/firebaseConfig";
console.log("-------------------------------------------");
console.log(firebase);
///src/config/firebaseConfig";
//firebase.initializeApp({ fbConfig });
//  apiKey: "AIzaSyBKEJmsbIRDqz6CvaLrBZ0jJzqbhfC1N4g",
//  authDomain: "m7website-d2a30.firebaseapp.com"
//});

class PostsPanel extends Component {
  //  constructor(props) {
  //    super(props);
  state = { isSignedIn: false };
  // }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      //      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDIdMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
    });
  };
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>-=POST PANEL=-</h1>
        {/* 
        <Container style={{ height: 200 }}>
          <hr />
          {this.state.isSignedIn ? (
            <span>
              <div>Signed In!</div>
              <button onClick={() => firebase.auth().signOut()}>
                Sign Out
              </button>
            </span>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </Container>
                  */}

        <PostsDashboard />
      </div>
    );
  }
}

export default PostsPanel;
