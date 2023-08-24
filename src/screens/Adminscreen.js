import React, { useState, useEffect } from "react";
import Adminservice from "../service/Adminservice";
import { Link } from "react-router-dom";
import Navbaradmin from "../components/Navbaradmin";

const RegisterButton = () => {
  return (
    <Link to="/register">
      <button className="btn btn-primary mt-3">Add New Admin</button>
    </Link>
  );
};

const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this ticket?")) {
    Adminservice.deleteById(id);
  }
};

function Adminscreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Adminservice.getAll()
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [data]);
  return (
    <div>
      <Navbaradmin/>
      <div className="row justify-content-center mt-5">
        <div className="col-md-11">
          <div className="bs">
            <h2>Welcome to the Admin Section</h2>
            <RegisterButton />
            <div>
              <h3>List of Tickets:</h3>
              <table>
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Lab No.</th>
                    <th>PC No.</th>
                    <th>Issue</th>
                    <th>View Ticket</th>
                    <th>Update Status</th>
                    <th>Delete Ticket</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.lab}</td>
                      <td>{item.pc}</td>
                      <td>{item.issueTitle}</td>
                      <td>
                        <Link to={`/admin/view/${item.id}`}>
                          <button className="btn btn-primary mt-3">
                            View Ticket
                          </button>
                        </Link>
                      </td>
                      <td>
                        <select>
                          <option>Pending</option>
                          <option>Processing</option>
                          <option>Resolved</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary mt-3"
                          onClick={() => handleDelete(`${item.id}`)}
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
