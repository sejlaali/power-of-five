import React, { Component } from "react";
import { Link } from "react-router-dom";

class SubmitMood extends Component {
  constructor(props) {
    super();

    this.state = {
      number: null,
      text: null,
    };
  }

  render() {
    return (
      <div>
        Submit mood
      </div>
    );
  }
}

export default SubmitMood;
