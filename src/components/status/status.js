import React from "react";

const Status = (props) => {
  return props.status ? (
    <div className="status">
      <div>✔ Added Successfully!</div>
    </div>
  ) : null;
};

export default Status;
