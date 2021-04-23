import React from "react";
import NoteItem from "../noteItem/noteItem";

const NotesInner = (props) => {
  const elements = props.notes.map((item) => {
    return (
      <div>
        <NoteItem item={item} />
      </div>
    );
  });

  return <div className="notes__inner">{elements}</div>;
};

export default NotesInner;
