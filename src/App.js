import { Route, Routes } from "react-router-dom";

import Counters from "./pages/Counters/Counters";
import MyInput from "./components/MyInput";
import Index from "./pages/ErrorPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MyInput />} errorElement={<Index />} />
        <Route path="counter" element={<Counters />} errorElement={<Index />} />
        <Route path="error-page" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
