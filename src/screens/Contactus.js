import React from "react";
import Navbar from "../components/Navbar";
import contact from "../images/ContactUs.jpg";

function Contactus() {
  return (
    <div>
      <Navbar />
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>Contact Us</h1>
                  <h2 className="my-3">
                    <b>Call Us On:</b> 9658110867
                    <br />
                    <b>Email Us On: </b> acts_samadhan@gmail.com
                    <br />
                  </h2>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={contact}
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

export default Contactus;
