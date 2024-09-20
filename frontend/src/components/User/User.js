import React from "react";
import "./user.css";
// Delete function
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const User = (props) => {
  const { _id, name, gmail, age, address } = props.user;

  //delete function
  const history = useNavigate();

  const deleteHnandler = async () => {
    await axios
      .delete(`http://localhost:5000/users/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/userdetails"));
  };
  ///////////////////////

  if (!_id) {
    return <div>No user data available</div>;
  }
  return (
    <>
      <div className="user-container">
        <h1>
          <span>Id:</span> {_id}
        </h1>
        <h1>
          <span>Name:</span> {name}
        </h1>
        <h1>
          <span>Gmail:</span> {gmail}
        </h1>
        <h1>
          <span>Age:</span> {age}
        </h1>
        <h1>
          <span>Address:</span> {address}
        </h1>
        <div>
          <Link to={`/userdetails/${_id}`} className="update">
            UPDATE
          </Link>
          <button onClick={deleteHnandler} className="delete">
            DELETE
          </button>
        </div>
      </div>
      
    </>
  );
};

export default User;
