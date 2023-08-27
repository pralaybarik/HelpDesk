import React from "react";
import Navbar from "../components/Navbar";
import home from "../images/homepage1.jpg";

function Homescreen() {
  return (
    <div>
      <Navbar />
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Get your issues resolved with
                  <strong className="brand-name"> ACTS समाधान</strong>
                </h1>
                <h2 className="my-3">
                  Team of expert technicians available 24*7
                </h2>
                <div className="my-3">
                  <a href="/about" className="btn-about-us">About ACTS समाधान</a>
                </div>
              </div>

              <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={home} className="img-fluid animated" alt="homeimg" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homescreen;
