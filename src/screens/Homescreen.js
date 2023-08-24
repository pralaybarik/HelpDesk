import React from "react";
import image from "../images/Project_Homepage.jpg";
import Navbar from "../components/Navbar";

function Homescreen() {
  return (
    <div>
      <Navbar/>
      <img src={image} alt="Homescreen"></img>
    </div>
  );
}

export default Homescreen;
