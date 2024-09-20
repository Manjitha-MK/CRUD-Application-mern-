import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import User from "./components/Adduser/Adduser"; // Create this component
import UserDetails from "./components/Userdetails/UserDetails"; // Create this component
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/adduser" element={<User />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/regi" element={<Registration />} />
          <Route path="/logi" element={<Login />} />
          <Route path="/userdetails/:id" element={<UpdateUser />} />

        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
