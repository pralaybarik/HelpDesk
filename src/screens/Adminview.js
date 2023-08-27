import React, { useState, useEffect } from "react";
import Adminservice from "../service/Adminservice";
import { useParams } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";

function Adminview() {
  const divstyle = {
    textAlign: "left",
    fontSize: "20px",
    margin: "20px",
  };
  const [data, setData] = useState({});
  const { id } = useParams();
  const{id2 } = useParams();
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange() {
    Adminservice.updateStatus(id, { status: selectedOption })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  useEffect(() => {
    Adminservice.getById(id)
      .then((response) => {
        console.log(id);
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
            <h2>Detailed Ticket Description:</h2>
            <div style={divstyle}>
              <b>Issue Number:</b> {data.id} <br />
              <b>Ticket Number:</b> {data.ticketid} <br />
              <b>Student Name:</b> {data.name} <br />
              <b>Email:</b> {data.email} <br />
              <b>Student PRN:</b> {data.prn} <br />
              <b>Course Name:</b> {data.course} <br />
              <b>Lab Number:</b> {data.lab} <br />
              <b>PC Number:</b> {data.pc} <br />
              <b>Issue Title:</b> {data.issueTitle} <br />
              <b>Issue Description:</b> {data.issuedesc} <br />
              <b>Ticket Status:</b> {data.status} <br />
              <b>Update Ticket Status: </b>
              <select
                value={selectedOption}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              >
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="resolved">Resolved</option>
              </select>
              <button
                className="btn btn-primary"
                onClick={handleChange}
                style={{
                  height: "42px",
                  width: "6%",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  padding: "6px",
                  marginLeft: "1%",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminview;
