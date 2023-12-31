import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Adminservice from "../service/Adminservice";

function Navbaradmin() {
  const [data, setData] = useState("");
  const { uname } = useParams();

  useEffect(() => {
    Adminservice.getByUname(uname)
      .then((response) => {
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
              <a className="nav-link" href={`/admin/${uname}`}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <div
                className="nav-item dropdown"
                style={{ paddingRight: "5rem" }}
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {data.uname}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    to={`/admin/${uname}/view-admin-profile`}
                    style={{ textDecoration: "none" }}
                  >
                    <button className="dropdown-item" href="#">
                      View Profile
                    </button>
                  </Link>
                  <Link
                    to={`/admin/${uname}/change-admin-password`}
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
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbaradmin;
