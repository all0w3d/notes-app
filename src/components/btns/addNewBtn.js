import React from "react";

const AddNewBtn = ({ onAdd, status }) => {
  return (
    <div className="button">
      <button
        onClick={(e) => {
          onAdd();
          status();
        }}
      >
        Add New
      </button>
    </div>
  );
};

export default AddNewBtn;
