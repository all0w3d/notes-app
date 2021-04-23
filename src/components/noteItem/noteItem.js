import React, { Component } from "react";

class NoteItem extends Component {
  render() {
    const { title, text } = this.props.item;

    return (
      <div className="note__item">
        <div className="note__title">{title}</div>
        <div className="note__text">{text}</div>
      </div>
    );
  }
}

export default NoteItem;
