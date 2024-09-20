import React, { useState } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Adduser.css";

const Adduser = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User data submitted:", inputs);
    sendRequest().then(() => history("/userdetails"));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/users", {
        name: String(inputs.name),
        gmail: String(inputs.gmail),
        age: Number(inputs.age),
        address: String(inputs.address),
      })
      .then((res) => res.data);
  };

  return (
    <div className="container">
      <Nav />
      <h1 className="add-user-heading">Add Users</h1>
      <form className="user-form" onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="gmail"
            value={inputs.gmail}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={inputs.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Address: </label>
          <input
            type="text"
            name="address"
            value={inputs.address}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default Adduser;
