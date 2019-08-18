import React from "react";
import { Link } from "react-router-dom";
import PostsCard from "./PostsCard";
const PostsList = ({ posts }) => {
  return (
    <div>
      {posts &&
        posts.map(post => {
          return (
            <Link to={"/posts/" + post.id} key={post.id}>
              <PostsCard post={post} />
            </Link>
          );
        })}
    </div>
  );
};

export default PostsList;
