import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Adminservice from "../service/Adminservice";
import { useNavigate } from "react-router-dom";
import Errornew from "../components/Errornew";

function Adminlogin() {
  const navigate = useNavigate();
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    Adminservice.getAdminByUnameAndPassword(uname, password)
      .then((response) => {
        console.log(response.data.uname);
        navigate(`/admin/${response.data.uname}`);
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
            <h2>Admin Login</h2>
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

            <button
              className="btn btn-primary mt-3 "
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

export default Adminlogin;
