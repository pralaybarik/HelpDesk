import React, { useState, useEffect } from "react";
import Userservice from "../service/Userservice";
import Navbaruser from "../components/Navbaruser";
import { useParams } from "react-router-dom";
import Success from "../components/Success";

function Userscreen() {
  const divstyle = {
    textAlign: "left",
    margin: "20px",
  };
  const [systemId, setSystemId] = useState("");
  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [data, setData] = useState({});
  const { prn } = useParams();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    Userservice.getByPrn(prn)
      .then((response) => {
        console.log(prn);
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }, []);

  const info = {
    systemId,
    issueTitle,
    issueDescription,
    prn,
  };

  function handleClick() {
    Userservice.createTicket(info)
      .then((response) => {
        setSystemId("");
        setIssueTitle("");
        setIssueDescription("");
        setFlag(true);
        console.log("Data added ");
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  return (
    <div>
      <Navbaruser />
      <div className="row justify-content-center mt-5">
        <div className="col-md-11">
          <div className="bs">
            {flag ? <Success message={"Form submitted successfully!"} /> : ""}
            <h2>Hello {data.name}, Raise your complaints here!</h2>
            <br />
            <div style={divstyle}>
              <label>
                <b>Enter your System Id: </b>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lab Number-PC Number"
                  value={systemId}
                  onChange={(e) => {
                    setSystemId(e.target.value);
                  }}
                />
              </label>
              <br />
              <br />
              <label>
                <b>Enter the Title of the Issue:</b>
                <input
                  type="text"
                  className="form-control"
                  value={issueTitle}
                  onChange={(e) => {
                    setIssueTitle(e.target.value);
                  }}
                />
              </label>
              <br />
              <br />
              <label>
                <b>Type in brief the issue faced by you in the lab:</b>

                <textarea
                  rows={5}
                  cols={200}
                  type="text"
                  className="form-control"
                  value={issueDescription}
                  onChange={(e) => {
                    setIssueDescription(e.target.value);
                  }}
                ></textarea>
              </label>
              <br />

              <button className="btn btn-primary mt-3" onClick={handleClick}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userscreen;
