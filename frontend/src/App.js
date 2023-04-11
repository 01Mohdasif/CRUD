import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import axios from "axios";

import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./login";
import Create from "./Create";
import Read from "./Read";
import Edit from "./Edit";
import Register from "./register";

function App() {
  const [loginUser, setLoginUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoginUser(null);
    navigate("/");
  };

  return (
    <div>
      <Navbar isLoggedIn={Boolean(loginUser)} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setLoginUser={setLoginUser} />}
          />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
