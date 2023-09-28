import classes from "./index.module.scss";
import React from "react";

const Input = ({ children, ...props }) => {
  return (
    <div style={props.style} className={classes.myInput}>
      <input {...props} />
      {children}
    </div>
  );
};

export default Input;
