import "./components/styles/App.scss";

import FunctionalCounter from "./components/Counter";
import Input from "./components/Input";
import ClassComponent from "./components/ClassComponent";
import Animation from "./components/Animation/Animation";
import { useState } from "react";
import Index from "./components/Postlist";

function App() {
  const [state, setState] = useState(true);

  const asd = (e) => {
    e.stopPropagation();
    console.log(e);
    setState((prev) => !prev);
  };
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FunctionalCounter style={{ border: "1px solid black", margin: 10 }} />
        <div
          style={{ width: 150, height: 150 }}
          className="animation__wrapper"
          onClick={asd}
        >
          {state ? (
            <Animation style={{ width: 160 }} />
          ) : (
            <button
              style={{ margin: 10, padding: 5, width: 130, height: 130 }}
              onClick={asd}
            >
              Show Animation
            </button>
          )}
        </div>
        <ClassComponent style={{ border: "1px solid black", margin: 10 }} />
      </div>
      <Input
        style={{
          border: "1px solid black",
          margin: 10,
        }}
      />
    </div>
  );
}

export default App;
