import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class SignIn extends Component {
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
        <h1>SIGNIN</h1>
        <hr />
        <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
}

export default SignIn;
