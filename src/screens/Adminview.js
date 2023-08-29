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
  const { ticketId } = useParams();
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange() {
    Adminservice.updateStatus(ticketId,selectedOption)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  useEffect(() => {
    Adminservice.getTicketByTicketId(ticketId)
      .then((response) => {
        console.log(ticketId);
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }, [data]);

  return (
    <div>
      <Navbaradmin />
      <div className="row justify-content-center mt-5">
        <div className="col-md-11">
          <div className="bs">
            <h2>Detailed Ticket Description:</h2>
            <div style={divstyle}>
              <b>Ticket Number:</b> {data.ticketId} <br />
              <b>Student Name:</b> {data.name} <br />
              <b>Email:</b> {data.email} <br />
              <b>Student PRN:</b> {data.prn} <br />
              <b>System Id:</b> {data.systemId} <br />
              <b>Issue Title:</b> {data.issueTitle} <br />
              <b>Issue Description:</b> {data.issueDescription} <br />
              <b>Ticket Status:</b> {data.status} <br />
              <b>Update Ticket Status: </b>
              <select
                value={selectedOption}
                onChange={(e) => {
                  setSelectedOption(e.target.value);
                }}
              >
                <option value="PENDING">Pending</option>
                <option value="PROCESSING">Processing</option>
                <option value="RESOLVED">Resolved</option>
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
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminview;
