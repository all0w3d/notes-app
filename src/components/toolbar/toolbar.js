import React, { Component } from "react";
import AddNewBtn from "../btns/addNewBtn";
import RemoveAllBtn from "../btns/removeAllBtn";
import Filter from "../filter/filter";
import Status from "../status/status";

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
    this.statusShow = this.statusShow.bind(this);
  }

  statusShow() {
    this.setState(() => {
      return { status: true };
    });
    setTimeout(() => {
      this.setState(() => {
        return { status: false };
      });
    }, 1500);
  }

  render() {
    return (
      <div className="toolbar__inner">
        <div className="btns">
          <AddNewBtn
            onAdd={() => this.props.onAdd()}
            status={this.statusShow}
          />
          <RemoveAllBtn onDelete={() => this.props.onDelete()} />
        </div>

        <Status status={this.state.status} />
        <Filter />
      </div>
    );
  }
}

export default Toolbar;
