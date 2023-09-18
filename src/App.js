import "./components/styles/App.scss";

import FunctionalCounter from "./components/Counter";
import Input from "./components/Input";
import ClassComponent from "./components/ClassComponent";
import Animation from "./components/Animation/Animation";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <FunctionalCounter style={{ border: "1px solid black", margin: 10 }} />
        <Animation />
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
