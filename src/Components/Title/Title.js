import React, { Component } from "react";
import "./Title.css";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "This is a dummy title",
      isInput: false,
    };
  }

  render() {
    let output = null;
    if (this.state.isInput) {
    } else {
      output = (
        <div className="d-flex title">
          <h1 className="display-4">{this.state.title}</h1>
          <span className="ms-auto edit-icon">
            <i className="fas fa-pencil-alt"></i>
          </span>
        </div>
      );
    }
    return <div>{output}</div>;
  }
}

export default Title;
