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
  const [pc, setPc] = useState("");
  const [lab, setLab] = useState("");
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
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
    pc,
    lab,
    title,
    detail,
  };

  function handleClick() {
    Userservice.post(info)
      .then((response) => {
        setPc("");
        setLab("");
        setTitle("");
        setDetail("");
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
                <b>Enter your PC Number:</b>
                <input
                  type="text"
                  className="form-control"
                  value={pc}
                  onChange={(e) => {
                    setPc(e.target.value);
                  }}
                />
              </label>
              <br />
              <br />
              <label>
                <b>Enter your Lab Number:</b>
                <input
                  type="text"
                  className="form-control"
                  label="Enter your Lab Number"
                  value={lab}
                  onChange={(e) => {
                    setLab(e.target.value);
                  }}
                />
              </label>
              <br />
              <br />
              <label>
                <b>Enter the title of the Issue:</b>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
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
                  value={detail}
                  onChange={(e) => {
                    setDetail(e.target.value);
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
