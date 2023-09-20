import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Input = ({ style }) => {
  const [value, setValue] = useState("");

  // useEffect(() => {
  //   document.querySelector("input").addEventListener("keyup", checkKeyUp);
  //   return document.removeEventListener("keyup", checkKeyUp);
  // }, []);

  const checkKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onCleanInput();
      console.log(e.key);
    }
  };
  const onCleanInput = () => {
    setValue("");
    document.querySelector("input").value = "";
  };

  return (
    <div style={style}>
      <h1
        style={{
          width: "100%",
          height: 50,
          borderBottom: "1px solid black",
        }}
        className="input"
      >
        {value}
      </h1>
      <div
        style={{
          width: "100%",
          height: 50,
          display: "flex",
        }}
      >
        <input
          style={{ border: "none", outline: "none", padding: 10 }}
          className="input"
          type="text"
          onKeyUp={checkKeyUp}
          onChange={(e) => setValue(e.currentTarget.value)}
          placeholder="Управляемый input"
        />
        <IconButton
          aria-label="delete"
          color="default"
          size="small"
          onClick={onCleanInput}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Input;
