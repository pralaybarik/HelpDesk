import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Adminservice from "../service/Adminservice";

function Registeruser() {
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
    <Link to={`/admin/${uname}/register-user`}>
      <button className="btn btn-primary mt-3">Add New Student</button>
    </Link>
  );
}

export default Registeruser;
