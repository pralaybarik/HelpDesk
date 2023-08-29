import React, { useState, useEffect } from "react";
import Userservice from "../service/Userservice";
import { useParams } from "react-router-dom";
import Navbaruser from "../components/Navbaruser";

function Userticketdetails() {
  const divstyle = {
    textAlign: "left",
    fontSize: "20px",
    margin: "20px",
  };
  const [data, setData] = useState({});
  const { ticketId } = useParams();

  useEffect(() => {
    console.log(ticketId);
    Userservice.getTicketByTicketId(ticketId)
      .then((response) => {
        console.log(ticketId);
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
            <h2>Detailed Ticket Description:</h2>
            <div style={divstyle}>
              <b>Ticket Number:</b> {data.ticketId} <br />
              <b>System Id:</b> {data.systemId} <br />
              <b>Issue Title:</b> {data.issueTitle} <br />
              <b>Ticket Status:</b> {data.status} <br />
              <b>Issue Description:</b> {data.issueDescription} <br />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userticketdetails;
