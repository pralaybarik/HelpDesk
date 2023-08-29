import React, { useState, useEffect } from "react";
import Navbaradmin from "../components/Navbaradmin";
import { useParams } from "react-router-dom";
import Adminservice from "../service/Adminservice";

function Adminviewprofile() {
  const divstyle = {
    textAlign: "left",
    fontSize: "22px",
    margin: "20px",
  };
  const [data, setData] = useState({});
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
      <Navbaradmin />
      <div className="row justify-content-center mt-5">
        <div className="col-md-11">
          <div className="bs">
            <h2>Your Profile: </h2>
            <div style={divstyle}>
              <b>Name:</b> {data.name} <br />
              <b>Email:</b> {data.email} <br />
              <b>User Name:</b> {data.uname} <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminviewprofile;
