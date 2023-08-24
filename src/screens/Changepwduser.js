import React, { useState, useEffect } from "react";
import Navbaruser from "../components/Navbaruser";

function Changepwduser() {
  const [pwd, setPwd] = useState("");
  const [newpwd, setNewPwd] = useState("");
  const [cnewpwd, setCNewPwd] = useState("");

  return (
    <div>
      <Navbaruser />
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          <div className="bs">
            <h2>Change Password</h2>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={newpwd}
              onChange={(e) => {
                setNewPwd(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={cnewpwd}
              onChange={(e) => {
                setCNewPwd(e.target.value);
              }}
            />

            <button className="btn btn-primary mt-3">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changepwduser;
