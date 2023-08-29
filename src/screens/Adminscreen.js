import React, { useState, useEffect } from "react";
import Adminservice from "../service/Adminservice";
import { Link } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";
import Registeradmin from "../components/Registeradmin";
import Registeruser from "../components/Registeruser";
// const Registerstudent = () => {
//   return (
//     <Link to="/admin/:uname/register-user">
//       <button className="btn btn-primary mt-3">Add New Student</button>
//     </Link>
//   );
// };

const handleDelete = (ticketId) => {
  if (window.confirm("Are you sure you want to delete this ticket?")) {
    Adminservice.deleteByTicketId(ticketId);
  }
};

function Adminscreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Adminservice.getAllTickets()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [data]);
  return (
    <div>
      <Navbaradmin />
      <div className="row justify-content-center mt-5">
        <div className="col-md-11">
          <div className="bs">
            <h2>Welcome to the Admin Section</h2>
            <Registeradmin /> <Registeruser />
            <div>
              <h3>List of Tickets:</h3>
              <table>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>System Id</th>
                    <th>Issue</th>
                    <th>Ticket Status</th>
                    <th>View/Update Ticket</th>
                    <th>Delete Ticket</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td></td>
                      <td>{item.studentName}</td>
                      <td>{item.systemId}</td>
                      <td>{item.issueTitle}</td>
                      <td>{item.status}</td>
                      <td>
                        <Link to={`/admin/view/${item.ticketId}`}>
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

export default Adminscreen;
