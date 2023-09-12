import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import { useState } from "react";

import "./App.css";

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || "",
  );
  console.log(token);

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin/*"
            element={token ? <Admin /> : <Login data={{ token, setToken }} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
