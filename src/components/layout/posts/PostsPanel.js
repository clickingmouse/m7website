import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import React, { Component } from 'react'
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
//firebase.initializeApp({
//  apiKey: "AIzaSyBKEJmsbIRDqz6CvaLrBZ0jJzqbhfC1N4g",
//  authDomain: "m7website-d2a30.firebaseapp.com"
//});
class PostsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignedIn: false };
  }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      singInSuccess: () => false
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
        <h1>-=POST PANEL=-</h1>
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
      </div>
    );
  }
}

export default PostsPanel;
