import React, { useContext } from "react";
import classes from "./index.module.scss";
import ButtonDelete from "../ButtonDelete";
import ToDoListContext from "../../pages/ToDoList/context";

const Post = (props) => {
  const { deletePost } = useContext(ToDoListContext);

  return (
    <div className={classes.Post}>
      <div className={classes.wrapperContent}>
        <strong>{props.number}.</strong>
        <span className={classes.title}>{props.title}</span>
        <div className={classes.body}>{props.body}</div>
      </div>
      <div className={classes.wrapperButton}>
        <ButtonDelete
          onClick={() => deletePost(props.id)}
          style={{ right: 20 }}
        />
      </div>
    </div>
  );
};

export default Post;
