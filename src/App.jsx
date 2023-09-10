import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>React</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
