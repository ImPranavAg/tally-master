import { React, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Navbar from "./components/Home/Navbar";
import { auth } from "./firebase";

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setUserName("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Router>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {userName ? (
              <>
                <li>
                  <Link to="/cal">Calculator</Link>
                </li>
                <li>
                  <button onClick={handleSignOut}>Sign Out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Navbar name={userName} />} />
          <Route path="/cal" element={<Home name={userName} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
