import React from "react";
import classes from "./ErrorPage.module.scss";
const ErrorPage = (props) => {
  return (
    <div className={classes.ErrorPage__wrapper} style={props.style}>
      <div className={classes.emoji__wrapper}>
        <img src="../../public/img/logo-brain-400х400.png" alt="asd" />
        <h4>Упс! Что-то пошло не по плану ;(</h4>
      </div>
    </div>
  );
};

export default ErrorPage;
