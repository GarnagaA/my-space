import classes from "../../components/ButtonDelete/index.module.scss";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const ButtonDelete = (props) => {
  return (
    <div style={props.style} className={classes.ButtonDelete}>
      <IconButton
        className={classes.button}
        aria-label="delete"
        size="medium"
        onClick={props.onClick}
        disabled={false}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default ButtonDelete;
