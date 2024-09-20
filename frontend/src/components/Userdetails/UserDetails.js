import React, { useEffect, useRef, useState } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import User from "../User/User";
import { useReactToPrint } from "react-to-print";
import "./userdetails.css";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const UserDetails = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  //PDF Download part

  const componentsRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentsRef.current,
    onafterprint: () => alert("User Report Successfully Download!"),
  });

  //Search Function

  const [searchQuary, setSearchQuary] = useState("");
  const [noResults, setNoResults] = useState(false);

  const handleSearch = () => {
    fetchHandler().then((data) => {
      const filterdUsers = data.users.filter((user) =>
        Object.values(user).some((field) =>
          field.toString().toLowerCase().includes(searchQuary.toLowerCase())
        )
      );
      setUsers(filterdUsers);
      setNoResults(filterdUsers.length === 0);
    });
  };

  return (
    <div className="details">
      <Nav />
      <h1 className="userD">User Details</h1>
      {/* Search Bar */}

      <input
        className="search"
        onChange={(e) => setSearchQuary(e.target.value)}
        type="text"
        name="search"
        placeholder="Search Users Details"
      ></input>
      <div className="searchbtn">
        <button className="search-btn" onClick={handleSearch}>
          SEARCH
        </button>
      </div>

      {noResults ? (
        <div>
          <p className="no-results">no user found</p>
        </div>
      ) : (
        <div ref={componentsRef}>
          {users &&
            users.map((user, i) => (
              <div key={i}>
                <User user={user} />
              </div>
            ))}
        </div>
      )}
      <button onClick={handlePrint}>DOWNLOAD PDF</button>
    </div>
  );
};

export default UserDetails;
