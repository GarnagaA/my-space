import classes from "./index.module.scss";
import React from "react";

const Input = ({ style, children, ...props }) => {
  return (
    <div style={style} className={classes.myInput}>
      <input {...props} />
      {children}
    </div>
  );
};

export default Input;
