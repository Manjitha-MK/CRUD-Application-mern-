import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/logi");
  };

  return (
    <nav>
      <ul className="left-links">
        <li>
          <Link to="/mainhome">Home</Link>
        </li>
        <li>
          <Link to="/adduser">Add User</Link>
        </li>
        <li>
          <Link to="/userdetails">User Details</Link>
        </li>
      </ul>
      <ul className="right-link">
        <button className="lo-btn" onClick={handleLogout}>
          Logout
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
