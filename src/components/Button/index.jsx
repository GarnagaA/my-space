import React, { useState } from "react";
import classes from "./index.module.scss";
const Button = (props) => {
  return (
    <button
      className={classes.button}
      style={props.style}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
