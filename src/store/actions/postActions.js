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
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .add({
        ...post,
        authorFirstName: "John",
        authorLastName: "Doe",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_POST", post: post });
      })
      .catch(err => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};
