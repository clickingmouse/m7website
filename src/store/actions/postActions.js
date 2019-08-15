export const createPost = post => {
  //return{
  //  type:'ADD_POST',
  //  post:post
  //}
  //
  // when using thunk, can return a function,
  // halting dispatcht
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: "CREATE_POST", post: post });
  };
};
