import React, { useState, useEffect } from "react";
import Adminservice from "../service/Adminservice";
import Errornew from "../components/Errornew";
import Success from "../components/Success";
import Navbaradmin from "../components/Navbaradmin";

function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [showComponent]);

  function register() {
    if (password == cpassword) {
      const user = {
        name,
        email,
        uname,
        password,
      };
      setSuccess(true);
      console.log(user);
      Adminservice.registerAdmin(user)
        .then((resp) => {
          console.log("data added");
          setName("");
          setEmail("");
          setUname("");
          setPassword("");
          setCpassword("");
        })
        .catch((err) => {
          console.log("error :" + err);
        });
    } else {
      setFail(true);
      setShowComponent(true);
    }
  }

  return (
    <div>
      <Navbaradmin />
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="bs">
            {success ? (
              <Success message={"Admin Registered Successfully."} />
            ) : (
              ""
            )}
            {fail
              ? showComponent && (
                  <Errornew message={"Passwords Do Not Match!"} />
                )
              : ""}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
