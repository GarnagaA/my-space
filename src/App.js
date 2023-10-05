import { Route, Routes } from "react-router-dom";

import Counters from "./pages/Counters/Counters";

import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";
import ToDoList from "./pages/ToDoList";
import FetchPage from "./pages/FetchPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ToDoList style={{ marginTop: 40 }} />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="counter-timer"
          element={<Counters />}
          errorElement={<ErrorPage />}
        />
        <Route path="fetch-page" element={<FetchPage />} />
        <Route path="error-page" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
