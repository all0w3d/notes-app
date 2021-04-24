import React, { Component } from "react";

import "../main.scss";
import Header from "../header/header";
import Toolbar from "../toolbar/toolbar";
import NotesInner from "../notesInner/notesInner";

class app extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          title: "Lorem ipsum dolor",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "1",
        },
        {
          title: "Lorem ipsum dolor",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "2",
        },
        {
          title: "Lorem ipsum dolor",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "3",
        },
        {
          title: "Lorem ipsum dolor",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "4",
        },
        {
          title: "Lorem ipsum dolor",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "5",
        },
        {
          title: "Lorem ipsum dolor",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "6",
        },
      ],
    };
    this.addItem = this.addItem.bind(this);
    this.maxId = this.state.notes.length + 1;
  }

  addItem(title = "Add title...", text = "Add text...") {
    const newItem = {
      title: title,
      text: text,
      id: this.maxId++,
    };
    this.setState(({ notes }) => {
      const newArr = [newItem, ...notes];

      return {
        notes: newArr,
      };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Toolbar onAdd={this.addItem} />
        <NotesInner notes={this.state.notes} />
      </div>
    );
  }
}

export default app;
