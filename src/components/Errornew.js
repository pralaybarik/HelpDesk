import React from "react";

function Errornew(message) {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    </div>
  );
}

export default Errornew;
