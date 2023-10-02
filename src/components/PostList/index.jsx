import React from "react";
import Post from "../Post/index";
import "./index.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const PostList = ({ posts }) => {
  return (
    <TransitionGroup>
      {posts.map((el, index) => (
        <CSSTransition key={el.id} timeout={500} classNames="post">
          <Post number={index + 1} id={el.id} title={el.title} body={el.body} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default PostList;
