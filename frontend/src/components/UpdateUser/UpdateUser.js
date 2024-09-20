import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./update.css";
import Nav from "../Nav/Nav";

const UpdateUser = () => {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/users/${id}`, {
        name: String(inputs.name),
        gmail: String(inputs.gmail),
        age: Number(inputs.age),
        address: String(inputs.address),
      })
      .then((res) => res.data);
  };

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

  return (
    <div>
      <Nav />
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
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

export default UpdateUser;
