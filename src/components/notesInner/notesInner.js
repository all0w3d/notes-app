import React from "react";
import NoteItem from "../noteItem/noteItem";

const NotesInner = (props) => {
  const elements = props.notes.map((item) => {
    return (
      <div key={item.id}>
        <NoteItem
          item={item}
          changeState={props.changeState}
          delete={props.delete}
        />
      </div>
    );
  });

  return <div className="notes__inner">{elements}</div>;
};

export default NotesInner;
