import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendRequest();

      if (response.Status === "OK") {
        alert("Login Success");
        history("/mainhome");
      } else {
        alert(response.err || "Login Failed");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  const sendRequest = async () => {
    return await axios
      .post("http://localhost:5000/login", {
        gmail: user.gmail,
        password: user.password,
      })
      .then((res) => res.data);
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2 className="h2">Login</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">Email</label>
          <input className="input"
            type="email"
            name="gmail"
            value={user.gmail}
            onChange={handleChange}
            required
          />

          <label className="label">Password</label>
          <input className="input"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <div className="button-container">
            <button className="log-btn" type="submit">Login</button>
            <li>
              <Link to="/regi">
              <button className="register-btn">Register</button>
              </Link>
            </li>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
