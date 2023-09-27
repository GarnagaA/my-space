import React from "react";
import Post from "../Post/index";
const PostList = ({ posts }) => {
  return (
    <ul>
      {posts.map((el, index) => (
        <Post
          key={el.id}
          number={index + 1}
          id={el.id}
          title={el.title}
          text={el.text}
        />
      ))}
    </ul>
  );
};

export default PostList;
