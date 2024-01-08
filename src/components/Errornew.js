import React from "react";

function Errornew(props) {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        {props.message}
      </div>
    </div>
  );
}

export default Errornew;
