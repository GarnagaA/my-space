import "./components/styles/App.scss";
import { Route, Routes } from "react-router-dom";

import Counter from "./pages/Counter";
import Input from "./components/Input";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Input />} errorElement={<ErrorPage />} />
        <Route
          path="/counter"
          element={<Counter />}
          errorElement={<ErrorPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
