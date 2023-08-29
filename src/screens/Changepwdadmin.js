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
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { uname } = useParams();
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
    uname,
    oldPassword,
    newPassword,
  };

  function handleClick() {
    if (newPassword === confirmNewPassword) {
      Adminservice.changePassword(data)
        .then((response) => {
          setSuccess(true);
          setOldPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
          console.log(response.data);
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
                <b>Enter Old Password:</b>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => {
                  setOldPassword(e.target.value);
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
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
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
                value={confirmNewPassword}
                onChange={(e) => {
                  setConfirmNewPassword(e.target.value);
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
