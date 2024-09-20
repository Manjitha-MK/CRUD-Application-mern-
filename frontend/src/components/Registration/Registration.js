import React, { useState } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    gmail: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRequest()
      .then(() => {
        alert("Register Succces");
        history("/logi");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/register", {
        name: String(user.name),
        gmail: String(user.gmail),
        password: String(user.password),
      })
      .then((res) => res.data);
  };

  return (
    <>
      <div className="registration-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="reg-form">
          <div className="in-reg">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="gmail"
              value={user.gmail}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Registration;
