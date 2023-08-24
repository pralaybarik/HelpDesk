import React, { useState, useEffect } from "react";
import Userservice from "../service/Userservice";
import Navbar from "../components/Navbar";

function Loginscreen() {
  const [prn, setPrn] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    const user = {
      prn,
      password,
    };

    // Userservice.get()
    //   .then((resp) => {
    //     resp.data.map((obj) => {
    //       if (obj.email === email && obj.password === password && obj.role === role) {
    //         navigate("/userloggedin");
    //       } else {
    //         setError('Invalid username or password');
    //       }
    //   });
    //   .catch((error) => {
    //     console.log("Error :" + error);
    //   });
  }

  return (
    <div>
      <Navbar />
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="bs">
            <h2>Student Login</h2>
            <input
              type="number"
              className="form-control"
              placeholder="Email"
              value={prn}
              onChange={(e) => {
                setPrn(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="btn btn-primary mt-3">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
