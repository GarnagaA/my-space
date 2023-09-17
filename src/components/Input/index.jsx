import { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1 style={{ height: 100, margin: 0 }} className="input">
        {value}
      </h1>
      <input
        type="text"
        onChange={(e) => setValue(e.currentTarget.value)}
        style={{ width: 400, height: 40, padding: 10 }}
        placeholder="Пиши сюда"
      />
    </div>
  );
};

export default Input;
