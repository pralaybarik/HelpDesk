import React from "react";
import Navbar from "../components/Navbar";
import about from "../images/AboutUs.png";

function About() {
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
                    About <strong className="brand-name">ACTS समाधान</strong>
                  </h1>
                  <h2 className="my-3">
                    Computer Lab - Help Desk (Acts - “समाधान”) is a Web
                    Application made to resolve the issues faced by the students
                    of CDAC Acts in their computer labs by generating a ticket
                    to the technical team and provides an intuitive interface
                    for both the admins and the students.
                  </h2>
                  <div className="my-3">
                  <a href="/about/contact-us" className="btn-about-us">
                    Contact Us
                  </a>
                </div>
                </div>
                
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={about}
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

export default About;
