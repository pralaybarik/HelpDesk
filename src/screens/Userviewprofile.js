import React, { useState, useEffect } from "react";
import Userservice from "../service/Userservice";
import Navbaruser from "../components/Navbaruser";
import { useParams } from "react-router-dom";

function Userviewprofile() {
  const divstyle = {
    textAlign: "left",
    fontSize: "22px",
    margin: "20px",
  };
  const [data, setData] = useState({});
  const { prn } = useParams();

  useEffect(() => {
    Userservice.getByPrn(prn)
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
      <Navbaruser />
      <div className="row justify-content-center mt-5">
        <div className="col-md-11">
          <div className="bs">
            <h2>Your Profile: </h2>
            <div style={divstyle}>
              <b>Student Name:</b> {data.name} <br />
              <b>Email:</b> {data.email} <br />
              <b>Student PRN:</b> {data.prn} <br />
              <b>Course Name:</b> {data.course} <br />
              <b>List of Tickets:</b>
              <br />
              <table>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Issue Title</th>
                    {/* <th>Issue Description</th> */}
                    <th>Issue Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.issues?.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userviewprofile;
