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
        { title: "some title1", text: "some text1", id: "1" },
        { title: "some title2", text: "some text1", id: "2" },
        { title: "some title3", text: "some text1", id: "3" },
        { title: "some title4", text: "some text1", id: "4" },
        { title: "some title5", text: "some text1", id: "5" },
        { title: "some title6", text: "some text1", id: "6" },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Toolbar />
        <NotesInner notes={this.state.notes} />
      </div>
    );
  }
}

export default app;
