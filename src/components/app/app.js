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
          title: "Hello World",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "1",
        },
        {
          title: "Lets Rock!",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "2",
        },
        {
          title: "Good Morning",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "3",
        },
        {
          title: "In the background ",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "4",
        },
        {
          title: "Hey Brother",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "5",
        },
        {
          title: "Like the speed of light",
          text:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.  ",
          id: "6",
        },
      ],
    };
    this.addItem = this.addItem.bind(this);
    this.changeStateAfterEditing = this.changeStateAfterEditing.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.maxId = this.state.notes.length + 1;
  }

  deleteAll() {
    this.setState(() => {
      return {
        notes: [],
      };
    });
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
        newItemAdded: true,
      };
    });
  }

  deleteItem(id) {
    this.setState(({ notes }) => {
      const index = notes.findIndex((elem) => elem.id === id);
      const newArr = [...notes.slice(0, index), ...notes.slice(index + 1)];
      return {
        notes: newArr,
      };
    });
  }

  changeStateAfterEditing(title, text, id) {
    this.setState(({ notes }) => {
      const index = notes.findIndex((elem) => elem.id === id);

      const elem = notes[index];

      elem.title = title;
      elem.text = text;

      const newArr = [
        ...notes.slice(0, index),
        elem,
        ...notes.slice(index + 1),
      ];

      return {
        notes: newArr,
      };
    });
  }

  render() {
    return (
      <div>
        <Header notesQ={this.state.notes.length} />
        <Toolbar onAdd={this.addItem} onDelete={this.deleteAll} />
        {!this.state.notes.length < 1 ? (
          <NotesInner
            notes={this.state.notes}
            changeState={this.changeStateAfterEditing}
            delete={this.deleteItem}
          />
        ) : (
          <div className="on__delete">Please add some notes... 😊</div>
        )}
      </div>
    );
  }
}

export default app;
