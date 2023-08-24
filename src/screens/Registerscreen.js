import React, { useState, useEffect } from "react";
import Userservice from "../service/Userservice";
import Navbar from "../components/Navbar";

function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  function register() {
    if (password == cpassword) {
      const user = {
        name,
        email,
        uname,
        password,
        cpassword,
      };
      console.log(user);
      Userservice.post(user)
        .then((resp) => {
          console.log("data added");
        })
        .catch((err) => {
          console.log("error :" + err);
        });
    } else {
      alert("Password and Confirm Password are not matching");
    }
  }

  return (
    <div>
      <Navbar/>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="bs">
            <h2>Register</h2>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={uname}
              onChange={(e) => {
                setUname(e.target.value);
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
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />

            <button className="btn btn-primary mt-3" onClick={register}>
              Register
            </button>
            <p>
              Already have an Account?
              <span>
                <a href="/adminlogin">Click here to Login</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
