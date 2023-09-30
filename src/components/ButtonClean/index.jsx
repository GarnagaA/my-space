import React from "react";
import classes from "./index.module.scss";
import Button from "@mui/material/Button";
import Close from "@mui/icons-material/Close";

const ButtonClean = ({ ...props }) => {
  return (
    <div className={classes.ButtonClean} {...props}>
      <Button
        className={classes.button}
        aria-label="close"
        size="medium"
        onClick={props.onClick}
      >
        <Close />
      </Button>
    </div>
  );
};

export default ButtonClean;
