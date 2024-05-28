import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import { useState } from "react";
const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div>
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login setIsLoggedin={setIsLoggedin} />} />
        <Route
          path="Signup"
          element={<Signup setIsLoggedin={setIsLoggedin} />}
        />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
