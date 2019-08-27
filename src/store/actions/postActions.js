import { getStackTraceLines } from "jest-message-util";

export const createPost = post => {
  //return{
  //  type:'ADD_POST',
  //  post:post
  //}
  //
  // when using thunk, can return a function;
  // halting dispatch
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    console.log("------=========", post);
    console.log(">>>>>....>>>>", post.picture);
    const firestore = getFirestore();
    const firebase = getFirebase();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    //

    post.picture != ""
      ? firebase
          .storage()
          .ref()
          .child(`posts/${new Date().getTime()}`)
          .put(post.picture)
          .then(snapshot => {
            //
            console.log("++++++++++++", snapshot.metadata);
            firestore
              .collection("posts")
              .add({
                ...post,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
                createdAt: new Date(),
                //
                picture: snapshot.metadata.fullPath
              })

              .then(() => {
                dispatch({ type: "CREATE_POST", post: post });
              })
              .catch(err => {
                dispatch({ type: "CREATE_POST_ERROR", err });
              });
          }) // snapshots
      : firestore
          .collection("posts")
          .add({
            ...post,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
            //picture: snapshot.metadata.fullPath
          })

          .then(() => {
            dispatch({ type: "CREATE_POST", post: post });
          })
          .catch(err => {
            dispatch({ type: "CREATE_POST_ERROR", err });
          });
  };
};
