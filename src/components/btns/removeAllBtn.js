import React from "react";

const RemoveAllBtn = ({ onDelete }) => {
  return (
    <div className="button rem-button">
      <button
        onClick={() => {
          onDelete();
        }}
      >
        Delete All
      </button>
    </div>
  );
};

export default RemoveAllBtn;
