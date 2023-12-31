import React, { useState, useEffect } from "react";
import Userservice from "../service/Userservice";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Errornew from "../components/Errornew";

function Loginscreen() {
  const navigate = useNavigate();
  const [prn, setPrn] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    Userservice.getByPrnAndPassword(prn,password)
      .then((response) => {
        console.log(response.data);
        navigate(`/user/${response.data.prn}`);
      })
      .catch((error) => {
        console.log("Error: " + error);
        setFlag(true);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="bs">
            {flag ? (
              <span>
                <Errornew message={"Invalid Credentials"} />
              </span>
            ) : (
              ""
            )}
            <h2>Student Login</h2>
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
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button
              className="btn btn-primary mt-3"
              onClick={() => handleClick()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginscreen;
