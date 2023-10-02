import React from "react";
import classes from "./index.module.scss";
const Select = ({ options, defaultValue, value, onChange, ...props }) => {
  return (
    <select
      className={classes.Select}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      {...props}
    >
      <option key={defaultValue} value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
