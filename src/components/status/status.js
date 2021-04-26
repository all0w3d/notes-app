import React from "react";

const Status = (props) => {
  return props.status ? (
    <div className="status">
      <div>✔</div>
    </div>
  ) : null;
};

export default Status;
