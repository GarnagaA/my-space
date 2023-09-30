import classes from "../../components/ButtonDelete/index.module.scss";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Delete";
import React from "react";

const ButtonDelete = (props) => {
  return (
    <IconButton
      className={classes.button}
      aria-label="delete"
      size="medium"
      onClick={props.onClick}
      disabled={false}
    >
      <Close />
    </IconButton>
  );
};

export default ButtonDelete;
