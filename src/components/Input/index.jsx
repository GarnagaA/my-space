import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Input = ({ style }) => {
  const inputArea = document.querySelector("input");

  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // useEffect(() => {
  //
  //   return document.removeEventListener("keyup", checkKeyUp);
  // }, []);

  const onChangeInput = (e) => {
    e.preventDefault();
    if (isFocused && e.key === "Enter")
      document
        .querySelector("input")
        .addEventListener("keyup", onCleanInput(e));
    setValue(e.currentTarget.value);
    console.log(e.key);

    if (!isFocused) document.removeEventListener("keyup");
  };

  const checkKeyUp = (e) => {};
  const onCleanInput = () => {
    setValue("");
    inputArea.value = "";
    // document.removeEventListener("keyup", () => checkKeyUp());
  };
  return (
    <form style={style}>
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
          style={{ border: "none", outline: "none", height: 40, padding: 10 }}
          className="input"
          onFocus={(e) => setIsFocused(e.isTrusted)}
          onBlur={(e) => setIsFocused(!e.isTrusted)}
          type="text"
          onChange={(e) => onChangeInput(e)}
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
    </form>
  );
};

export default Input;
