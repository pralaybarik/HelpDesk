import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Userservice from "../service/Userservice";

function Navbaruser() {
  const [data, setData] = useState("");
  const { prn } = useParams();

  useEffect(() => {
    Userservice.getByPrn(prn)
      .then((response) => {
        console.log(prn);
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand">Computer Lab Help Desk</a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href={`/user/${prn}`}>
                Home
              </a>
            </li>
            <div className="nav-item dropdown" style={{ paddingRight: "5rem" }}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {data.name}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  to={`/user/${prn}/view-user-profile`}
                  style={{ textDecoration: "none" }}
                >
                  <button className="dropdown-item" href="#">
                    View Profile
                  </button>
                </Link>
                <Link
                  to={`/user/${prn}/change-user-password`}
                  style={{ textDecoration: "none" }}
                >
                  <button className="dropdown-item">Change Password</button>
                </Link>

                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Logout
                </a>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbaruser;
