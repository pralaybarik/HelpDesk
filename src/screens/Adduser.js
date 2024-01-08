import React, { useState, useEffect } from "react";
import Adminservice from "../service/Adminservice";
import Navbaradmin from "../components/Navbaradmin";
import Success from "../components/Success";

function Adduser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [prn, setPrn] = useState("");
  const [data, setData] = useState("");
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    const user = {
      name,
      email,
      prn,
    };
    Adminservice.registerUser(user)
      .then((response) => {
        console.log(response.data);
        setFlag(true);
        setName("");
        setEmail("");
        setPrn("");
      })
      .catch((error) => {
        console.log("error :" + error);
      });
  };

  return (
    <div>
      <Navbaradmin />
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="bs">
            {flag ? (
              <span>
                <Success message={"Student Added Successfully."} />
              </span>
            ) : (
              ""
            )}
            <h2>Register New Student</h2>
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
              placeholder="PRN"
              value={prn}
              onChange={(e) => {
                setPrn(e.target.value);
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

            <button
              className="btn btn-primary mt-3"
              onClick={() => handleClick()}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adduser;
