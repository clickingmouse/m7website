import React from "react";
import PostsCard from "./PostsCard";
const PostsList = ({ posts }) => {
  return (
    <div>
      {posts &&
        posts.map(post => {
          return <PostsCard post={post} key={post.id} />;
        })}
    </div>
  );
};

export default PostsList;
