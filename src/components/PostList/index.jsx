import React from "react";
import Post from "../Post/index";
import "./index.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, isDeleteButton, animationType }) => {
  return (
    <TransitionGroup>
      {posts.map((el, index) => (
        <CSSTransition key={el.id} timeout={500} classNames={animationType}>
          <Post
            number={index + 1}
            id={el.id}
            title={el.title}
            body={el.body}
            isDeleteButton={isDeleteButton}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default PostList;
