import "./components/styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Input />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
