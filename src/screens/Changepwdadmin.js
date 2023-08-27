import React, { useState, useEffect } from "react";
import Navbaradmin from "../components/Navbaradmin";
import Adminservice from "../service/Adminservice";
import { useParams } from "react-router-dom";
import Errornew from "../components/Errornew";
import Success from "../components/Success";

function Changepwdadmin() {
  const divstyle = {
    textAlign: "left",
    margin: "10px",
  };
  const [email, setEmail] = useState("");
  const [newpwd, setNewPwd] = useState("");
  const [cnewpwd, setCNewPwd] = useState("");
  const { id } = useParams();
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const[showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [showComponent]);

  const data = {
    email,
    newpwd,
  };

  function handleClick() {
    if (newpwd === cnewpwd) {
      Adminservice.changePassword(id, data)
        .then((response) => {
          setSuccess(true);
          setEmail("");
          setNewPwd("");
          setCNewPwd("");
          console.log("Data added ");
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
    } else {
      setFail(true);
      setShowComponent(true);
      console.log("error");
    }
  }

  return (
    <div>
      <Navbaradmin />
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="bs">
            {success ? (
              <Success message={"Password Changed Successfully."} />
            ) : (
              ""
            )}
            {fail ? showComponent && <Errornew message={"Passwords Do Not Match!"} /> : ""}
            <h2>Change Password</h2>
            <br />
            <div style={divstyle}>
              <label>
                <b>Enter your Email:</b>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <label>
                <b>Enter your New Password:</b>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
                value={newpwd}
                onChange={(e) => {
                  setNewPwd(e.target.value);
                }}
              />
              <br />
              <label>
                <b>Retype your New Password:</b>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm New Password"
                value={cnewpwd}
                onChange={(e) => {
                  setCNewPwd(e.target.value);
                }}
              />
              <br />
              <button className="btn btn-primary mt-3" onClick={handleClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changepwdadmin;
