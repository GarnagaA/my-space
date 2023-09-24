import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Counters from "./pages/Counters";
import MyInput from "./components/MyInput";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MyInput />} errorElement={<ErrorPage />} />
        <Route
          path="counter"
          element={<Counters />}
          errorElement={<ErrorPage />}
        />
        <Route path="error-page" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
