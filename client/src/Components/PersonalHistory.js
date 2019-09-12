import React, { Component } from "react";
import { Link } from "react-router-dom";

class PersonalHistory extends Component {
  constructor(props) {
    super();

    this.state = {
      name: null,
      moodsArray: null,
    };
  }

  render() {
    return (
      <div>
        Personal History
      </div>
    );
  }
}

export default PersonalHistory;
