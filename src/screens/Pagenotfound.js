import React from "react";
import Navbar from "../components/Navbar";
import pagenotfound from "../images/404_page_not_found.png";

function Pagenotfound() {
  return (
    <div>
      <Navbar />
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>Page Not Found</h1>
                  <h2 className="my-3">
                    <a href="/" className="btn-about-us">
                      Go to Homepage
                    </a>
                  </h2>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={pagenotfound}
                    className="img-fluid animated"
                    alt="homeimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pagenotfound;
