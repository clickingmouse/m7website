export const createProj = proj => {
  return (dispatch, getState) => {
    //make asynch call to db

    dispatch({ type: "CREATE_PROJECT", proj: project });
  };
};
