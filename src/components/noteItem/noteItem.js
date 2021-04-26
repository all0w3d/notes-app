import React, { Component } from "react";

class NoteItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.item.title,
      text: this.props.item.text,
      buttonName: "Edit",
      buttonStyle: "blue",
      tempTitle: "",
      tempText: "",
    };

    this.change = this.change.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.randomDeg = {
      transform: `rotate(${Math.floor(Math.random() * 10) - 5}deg)`,
    };
  }

  change() {
    if (this.state.buttonName === "Edit") {
      return this.setState(() => {
        let newTitle = (
          <textarea
            onChange={this.onChangeTitle}
            defaultValue={this.state.title}
            autoFocus
          />
        );

        let newText = (
          <textarea
            onChange={this.onChangeText}
            defaultValue={this.state.text}
          />
        );

        if (this.state.title === "Add title...") {
          newTitle = (
            <textarea
              onChange={this.onChangeTitle}
              placeholder={this.state.title}
              autoFocus
            />
          );
        }

        if (this.state.text === "Add text...") {
          newText = (
            <textarea
              onChange={this.onChangeText}
              placeholder={this.state.text}
            />
          );
        }

        return {
          title: newTitle,
          text: newText,
          buttonName: "Save",
          buttonStyle: "green",
        };
      });
    }

    return (
      this.setState(() => {
        let newTitle = this.state.tempTitle;
        let newText = this.state.tempText;

        if (newTitle === "") {
          newTitle = this.state.title.props.defaultValue;
        }

        if (newText === "") {
          newText = this.state.text.props.defaultValue;
        }

        return {
          title: newTitle,
          text: newText,
          buttonName: "Edit",
          buttonStyle: "blue",
        };
      }),
      this.props.changeState(
        this.state.tempTitle || this.props.item.title,
        this.state.tempText || this.props.item.text,
        this.props.item.id
      )
    );
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
      <div>
        <div className="note__item" style={this.randomDeg}>
          <div className="note__item-text">
            <div className="note__title">{this.state.title}</div>
            <div className="note__text">{this.state.text}</div>
          </div>
          <div className="note__btns">
            <button
              className={"note__btn " + this.state.buttonStyle}
              onClick={this.change}
            >
              {this.state.buttonName}
            </button>
            <button
              onClick={() => this.props.delete(this.props.item.id)}
              className="note__btn note__btn-del"
            >
              Remove
            </button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default NoteItem;
