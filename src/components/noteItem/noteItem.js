import React, { Component } from "react";

class NoteItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.item.title,
      text: this.props.item.text,
      buttonName: "Change",
      tempTitle: "",
      tempText: "",
    };
    this.change = this.change.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  change() {
    if (this.state.buttonName === "Change") {
      return this.setState(() => {
        const newTitle = (
          <input
            onChange={this.onChangeTitle}
            defaultValue={this.state.title}
          />
        );
        const newText = (
          <textarea
            onChange={this.onChangeText}
            defaultValue={this.state.text}
          />
        );

        return {
          title: newTitle,
          text: newText,
          buttonName: "save",
        };
      });
    }

    return this.setState(() => {

      let newTitle = this.state.tempTitle;
      let newText = this.state.tempText;
      
      if (newTitle === "") {
        newTitle = this.state.title.props.defaultValue
      }

      if (newText === "") {
        newText = this.state.text.props.defaultValue
      }
      console.log(newTitle)
      return {
        title: newTitle,
        text: newText,
        buttonName: "Change",
      };
    });
  }

  onChangeTitle(e) {
    const newTitle = e.target.value;

    this.setState(() => {
      return {
        tempTitle: newTitle,
      };
    });
  }

  onChangeText(e) {
    const newText = e.target.value;

    this.setState(() => {
      return {
        tempText: newText,
      };
    });
  }

  render() {
    return (
      <div className="note__item">
        <div className="note__title">{this.state.title}</div>
        <div className="note__text">{this.state.text}</div>
        <button onClick={this.change}>{this.state.buttonName}</button>
      </div>
    );
  }
}

export default NoteItem;
