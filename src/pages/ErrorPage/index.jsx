import React from "react";
import classes from "./index.module.scss";
const Index = (props) => {
  return (
    <div className={classes.ErrorPage} style={props.style}>
      <img
        className={classes.gif}
        src={require("../../assets/gif/interstellar-cry.gif")}
        width={250}
        height={250}
        alt="asd"
      />
      <h4 className={classes.text}>Упс! Что-то пошло не по плану ;(</h4>
    </div>
  );
};

export default Index;
