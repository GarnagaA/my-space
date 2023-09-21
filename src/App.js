import "./components/styles/App.scss";
import { Route, Routes } from "react-router-dom";

import Counter from "./pages/Counter";
import Input from "./components/Input";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Input />} errorElement={<ErrorPage />} />
        <Route
          path="counter"
          element={<Counter />}
          errorElement={<ErrorPage />}
        />
        <Route path="error-page" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
