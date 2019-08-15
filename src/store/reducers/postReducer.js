import { defaultCoreCipherList } from "constants";

const initState = {
  posts: [
    { id: "1", title: "title1", content: "lorem ipsum1" },
    { id: "2", title: "title2", content: "lorem ipsum2" },
    { id: "3", title: "title3", content: "lorem ipsum3" }
  ]
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("created post", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("create post error", action.err);
      return state;
    default:
      return state;
  }
  //return state;
};

export default postReducer;
