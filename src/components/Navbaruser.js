import React from "react";

function Navbaruser() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand">Computer Lab Help Desk</a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-n">
            <div className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Username
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  View Profile
                </a>
                <a className="dropdown-item" href="/user/changepwduser">
                  Change Password
                </a>
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
