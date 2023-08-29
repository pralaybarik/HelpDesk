import React, { useState, useEffect } from "react";
import Userservice from "../service/Userservice";
import Navbaruser from "../components/Navbaruser";
import { useParams, Link } from "react-router-dom";

function Userviewprofile() {
  const divstyle = {
    textAlign: "left",
    fontSize: "22px",
    margin: "20px",
  };
  const [data, setData] = useState({});
  const { prn } = useParams();

  const handleDelete = (ticketId) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      Userservice.deleteByTicketId(ticketId)
        .catch((error) => {
        console.log("Error: " + error);
      });
    }
  };

  useEffect(() => {
    Userservice.getByPrn(prn)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }, [data]);

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
              <b>List of Tickets:</b>
              <br />
              <table>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Ticket Id</th>
                    <th>Issue Title</th>
                    <th>Issue Status</th>
                    <th>View Ticket</th>
                    <th>Delete Ticket</th>
                  </tr>
                </thead>
                <tbody>
                  {data.ticketList?.map((item) => (
                    <tr key={item.ticketId}>
                      <td></td>
                      <td>{item.ticketId}</td>
                      <td>{item.issueTitle}</td>
                      <td>{item.status}</td>
                      <td>
                        <Link to={`/user/${prn}/view-user-profile/ticket-details/${item.ticketId}`}>
                          <button className="btn btn-primary mt-3">
                            View Ticket
                          </button>
                        </Link>
                      </td>
                      <td>
                      <button
                          className="btn btn-primary mt-3"
                          onClick={() => handleDelete(`${item.ticketId}`)}
                        >
                          Delete
                        </button>
                      </td>
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
